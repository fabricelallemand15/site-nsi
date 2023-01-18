var debug_mode = false;
var dict = {};  // Global dictionnary tracking the number of clicks
var tagHdr = "#--- HDR ---#";

function sleep(s){
    return new Promise(resolve => setTimeout(resolve, s));
  }
  
async function main() {
    await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });
}

let pyodideReadyPromise = main();

async function pyterm(id, height) {
await pyodideReadyPromise;
let namespace = pyodide.globals.get("dict")();

// creates the console
// the variable pyconsole is created here.
pyodide.runPython(`
    import sys
    import js
    from pyodide import console
    import __main__

    class PyConsole(console._InteractiveConsole):
        def __init__(self):
            super().__init__(
                __main__.__dict__,
                persistent_stream_redirection=False,
            )

        def banner(self):
            return f"Welcome to the Pyodide terminal emulator 🐍\\n{super().banner()}"

    
    js.pyconsole = PyConsole()
`, namespace);
namespace.destroy();


let ps1 = '>>> ', ps2 = '... ';

async function lock(){
    let resolve;
    let ready = term.ready;
    term.ready = new Promise(res => resolve = res);
    await ready;
    return resolve;
}

async function interpreter(command, id = null) {  /// reads the commands
    let unlock = await lock();
    try {
    term.pause();
    // multiline should be splitted (useful when pasting)
    for( var c of command.split('\n') ) {
        if (id != null) {
        let exclude = document.getElementById(id.slice(1)).parentElement.parentElement.dataset.exclude;
        if (exclude != "" && exclude != undefined) {
            for (let noImports of exclude.split(",")) {
                if (c.includes(noImports)) c = "#" + c
            }
        console.log(id)
        }}

        let run_complete = pyconsole.run_complete;   // trying to run the commands
        try {
            const incomplete = pyconsole.push(c);    // wait for completion of a Python command
            term.set_prompt(incomplete ? ps2 : ps1); // set the prompt line
            let r = await run_complete;
            if(pyodide.isPyProxy(r)){
            r.destroy();
            }
        } catch(e){   // the completion of the Python command triggered an error (wrong Python syntax)
            if(e.name !== "PythonError"){
            term.error(e);
            throw e;
            }
        }
        run_complete.destroy();
    }
    } finally {
    term.resume();
    await sleep(10);
    unlock();
    }
}

let term = $(id).terminal(   // creates terminal
    (command) => interpreter(command, id),      // how to read the input
    {
    greetings: '',    // pyconsole.banner(),
    prompt: ps1,
    completionEscape: false,
    height: height,  // if not specified, css says 200
    completion: function(command, callback) {     // autocompletion
        callback(pyconsole.complete(command).toJs()[0]);
    }
    }
);

window.term = term;
pyconsole.stdout_callback = s => $.terminal.active().echo(s, {newline : false});   // this is thie line to change
    pyconsole.stderr_callback = s => {
        $.terminal.active().error(s.trimEnd());
    }


term.ready = Promise.resolve();
pyodide._module.on_fatal = async (e) => {
    term.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers.");
    term.error("The cause of the fatal error was:");
    term.error(e);
    term.error("Look in the browser console for more details.");
    await term.ready;
    term.pause();
    await sleep(15);
    term.pause();
};
}

function removeLines(data, moduleName) {
    return data
      .split('\n')
      .filter(sentence => !(sentence.includes("import " + moduleName) || sentence.includes("from " + moduleName)))
      .join('\n');
}

async function foreignModulesFromImports(code, moduleDict = {}, id_editor = 0) {
    await pyodideReadyPromise;
    pyodide.runPython(`from pyodide import find_imports\nimported_modules = find_imports(${JSON.stringify(code)})`)
    const importedModules = pyodide.globals.get('imported_modules').toJs();
    var executedCode = code
    
    for (var moduleName in moduleDict) {
        var moduleFakeName = moduleDict[moduleName];
      
        if (importedModules.includes(moduleName)) {
            // number of characters before the first occurrence of the module name, presumably the import clause
            var indexModule = executedCode.indexOf(moduleName); 
            // substring to count the number of newlines
            var tempString = executedCode.substring(0, indexModule); 
            // counting the newlines
            var lineNumber = tempString.split('\n').length;
            
            let importLine = executedCode.split('\n')[lineNumber-1]; // getting the import line, now the business starts.

            // taking into consideration the various import options
            // Idea : change the import turtle of a user into import pyo_js_turtle
            // import turtle as tl	>	import js-turtle as tl
            // import turtle		>	import js-turtle as turtle
            // from turtle import *	>	from js-turtle import *
            if (importLine.includes('import ' + moduleName) && !importLine.includes('as')) {
                importLine = importLine.replace(moduleName, moduleFakeName + ' as ' + moduleName)
            } else {
                importLine = importLine.replace(moduleName, moduleFakeName)
            }
            if (moduleName.includes('turtle')) showGUI(id_editor)

            executedCode = `import micropip\nawait micropip.install("${moduleFakeName}")\n${importLine}\n` + executedCode
        }
        if (debug_mode) {console.log(executedCode)}
        executedCode = removeLines(executedCode, moduleName)
        if (debug_mode) {console.log(executedCode)}
    };
    return executedCode
}

function countParenthesis(string, char = '(') {
    const END = {'(' : ')', '[': ']', '{': '}'};
    let countChar = (str, c) => str.split(c).length - 1;
    return countChar(string, char) - countChar(string, END[char]);
}

function generateAssertionLog(errLineLog, code){
    // PROBLEME s'il y a des parenthèses non correctement parenthésées dans l'expression à parser !
    var codeTable = code.split("\n");  // get assertion test
    console.log('generateAsssertionLog', codeTable)
    errLineLog -= 1;
    var endErrLineLog = errLineLog;
    var countPar = 0;
    do { // multilines assertions
        countPar += countParenthesis(codeTable[endErrLineLog]);
        endErrLineLog++;
    } while (countPar !== 0 && !/^(\s*assert)/.test(codeTable[endErrLineLog]))
    return `${codeTable.slice(errLineLog, endErrLineLog).join(" ").replace("assert ", "")}`
}

function generateErrLog(errTypeLog, errLineLog, code, src = 0){
    let dictErrType = 
    {"AssertionError" : "Erreur avec les tests publics",
     "SyntaxError" : "Erreur de syntaxe",
     "ModuleNotFoundError" : "Erreur de chargement de module",
     "IndexError" : "Erreur d'indice",
     "KeyError" : "Erreur de clé",
     "IndentationError" : "Erreur d'indentation",
     "AttributeError" : "Erreur de référence",
     "TypeError" : "Erreur de type",
     "NameError" : "Erreur de nommage",
     "IndentationError" : "Erreur d'indentation",
     "ZeroDivisionError" : "Division par zéro",
     "MemoryError" : "Dépassement mémoire",
     "OverflowError" : "Taille maximale de flottant dépassée",
     "TabError" : "Mélange d'indentations et d'espaces",
     "RecursionError" : "Erreur de récursion",
     "UnboundLocalError": "Variable non définie"
    }
    // Ellipsis is triggered when dots (...) are used
    errTypeLog = errTypeLog + (errTypeLog.includes('Ellipsis') ? " (issue with the dots ...)" : "");
    for (errType in dictErrType) {
        if (errTypeLog.includes(errType)) {
            if (errType != "AssertionError") { // All Exceptions but assertions
                return ` Python a renvoyé une '${dictErrType[errType]}' à la ligne ${errLineLog}\n ---\n ${errTypeLog}`
            } else {
                console.log('double', src, errLineLog)
                if (errTypeLog !== "AssertionError") { // case : no Assertion description 
                    return ` Python a renvoyé une '${dictErrType[errType]}' à la ligne ${errLineLog + src}\n ---\n ${errTypeLog}`
                } else {  // Assertion with description
                    errTypeLog = `${errTypeLog} : test '${generateAssertionLog(errLineLog + src, code)}' failed`
                    return ` Python a renvoyé une '${dictErrType[errType]}' à la ligne ${errLineLog + src}\n ---\n ${errTypeLog}`
                }
            }
        }
    }
}

function generateLog(err, code, src = 0){
    console.log('err 229', err)
    err = String(err).split("\n")
    let p = -2
    var lastLogs = err.slice(p, -1)
    // catching relevant Exception logs
    while (!lastLogs[0].includes("line")) {
        lastLogs = err.slice(p, -1);
        p--;
    }
    var errLineLog = lastLogs[0].split(',');
    // catching line number of Exception
    let i = 0;
    while (!errLineLog[i].includes("line")) i++;
    // When <exec> appears, an extra line is executed on Pyodide side (correct for it with -1)
    let shift = errLineLog[0].includes("<exec>") ? -1 : 0;
    errLineLog = Number(errLineLog[i].slice(5 + errLineLog[i].indexOf("line"))) + shift //+ src; // get line number

    // catching multiline Exception logs (without line number)
    var errTypeLog = lastLogs[1];
    p = 2;
    while (p < lastLogs.length) {
        errTypeLog = errTypeLog + '\n' + " " + lastLogs[p];
        p++;
    }
    console.log(errTypeLog, errLineLog, code)
    console.log(src)
    return generateErrLog(errTypeLog, errLineLog, code, src)
}

var pluralize = (cond, sg, pl = 's', irr = false) => irr ? (cond ? sg : pl) : (cond ? sg : sg + 's')

async function evaluatePythonFromACE(code, id_editor, mode) {
    await pyodideReadyPromise;

    $.terminal.active().clear();   
    pyodide.runPython(`
      import sys as __sys__
      import io as __io__
      __sys__.stdout = __io__.StringIO()
    `);

    if (mode === "v") $.terminal.active().resize($.terminal.active().width(), document.getElementById(id_editor).style.height);

    // Strategy : code delimited in 2 blocks
    // Block 1 : code
    // Block 2 : asserts delimited by first "# TestsWHATEVER" tag (case insensitive)
    let splitCode = code.replace(/#(\s*)Test(s?)[^\n]*/i, "#tests").split("#tests")  // normalisation
    var mainCode = splitCode[0], assertionCode = splitCode[1];
    console.log(splitCode, mainCode)
    let lineShift = mainCode.split('\n').length
    
    $.terminal.active().echo(">>> Script exécuté : \n------"); 

    try 
    {
        if (debug_mode) {console.log(code)}
        // foreignModulesFromImports kinda run the code once to detect the imports (that's shit, thanks pyodide)
        mainCode = await foreignModulesFromImports(mainCode, {'turtle': "pyo_js_turtle"}, id_editor)

        await pyodide.runPythonAsync("from __future__ import annotations\n" + mainCode);    // Running the code
        var stdout = pyodide.runPython("__sys__.stdout.getvalue()")  // Catching and redirecting the output
        var testDummy = mainCode.includes('dummy_')
        if (testDummy) 
        { 
            var splitJoin = (txt, e) => txt.split(e).join('')
            var enumerize = (liste) => liste.length == 1 ? liste.join("") : liste.slice(0,-1).join(", ") + " et " + liste.slice(-1);
            console.log('ici')
            
            let joinInstr = []
            let joinLib = []
            let matchInstr = code.match(new RegExp('dummy_(\\w+)\\(', 'g'))
            let matchLib = code.match(new RegExp('#import dummy_lib_(\\w+)', 'g'))
            if (matchInstr != null) for (instruction of matchInstr) joinInstr.push(splitJoin(splitJoin(instruction, 'dummy_'), '('))
            if (matchLib != null) for (instruction of matchLib) joinLib.push(splitJoin(instruction, '#import dummy_lib_'))
            let nI = joinInstr.length
            let nL = joinLib.length
            stdout = '>>> Script exécuté : \n------\n'
            if (nI>0) stdout += ` ${pluralize(nI == 1, 'La', 'Les', true)} ${pluralize(nI == 1, 'fonction')} ${splitJoin(splitJoin(enumerize(joinInstr), 'dummy_'), '(')} ${pluralize(nI == 1, 'est', 'sont', true)} ${pluralize(nI == 1, 'interdite')} pour cet exercice !\n`
            if (nL>0) stdout += ` ${pluralize(nL == 1, 'Le', 'Les', true)} ${pluralize(nL == 1, 'module')} ${splitJoin(enumerize(joinLib), 'dummy_lib_')} ${pluralize(nL == 1, 'est', 'sont', true)} ${pluralize(nL == 1, 'interdit')} pour cet exercice !\n`
            stdout += '------'
        }

        if (stdout !== "") $.terminal.active().echo(" " + stdout);

        if (assertionCode !== undefined) 
        {
            await pyodide.runPythonAsync("from __future__ import annotations\n" + assertionCode);    // Running the assertions
            var stdout = pyodide.runPython("__sys__.stdout.getvalue()")  // Catching and redirecting the output
            console.log("tout s'est bien passé")
            if (!testDummy) $.terminal.active().echo(" " + stdout + "\n------\n");
        }
    }
    catch(err) 
    {
        console.log('err',err)
        // generateLog does the work
        // TODO : why was lineShift useful ?
        if (!testDummy) $.terminal.active().echo(generateLog(err, code, lineShift - 1) + "\n------\n");            
        // if (!testDummy) $.terminal.active().echo(generateLog(err, code, 0) + "\n------\n");            
    }
  }


async function evaluateHdrFile(id_editor) {
    let url_pyfile = document.getElementById('content_' + id_editor).innerText
    if (url_pyfile.includes(tagHdr)) {
        splitHdrPyFile = url_pyfile.match(new RegExp(tagHdr + "(.*)" + tagHdr));
        if (splitHdrPyFile !== null) pyodide.runPython(splitHdrPyFile[1].replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*"));
    }
}

async function silentInterpretACE(id_editor) {
    let ideClasseDiv = document.getElementById("term_"+id_editor).parentElement.parentElement;
    window.console_ready = await pyterm('#term_'+id_editor, 150);
    $('#term_'+id_editor).terminal().focus(true);   // gives the focus to the corresponding terminal

    let stream = await ace.edit(id_editor).getSession().getValue();
    
    localStorage.setItem(id_editor, stream)

    console.log(ideClasseDiv.dataset.exclude)
    if (ideClasseDiv.dataset.exclude != "") {
        for (let instruction of ideClasseDiv.dataset.exclude.split(",")) {
        pyodide.runPython(`
        def dummy_${instruction}(src):
            return src
        `)

        let re = new RegExp(`([^A-Za-z0-9_]|^)(${instruction}\\()`, 'g')

        stream = stream.replace(re, `$1dummy_$2`)
                       .replace(`import ${instruction}`, `#import dummy_lib_${instruction}`)

        }
    }
    // console.log(stream)
    return stream
}

async function interpretACE(id_editor, mode) {
    let stream = await silentInterpretACE(id_editor);
    evaluateHdrFile(id_editor)
    calcTermSize(stream, mode)
    evaluatePythonFromACE(stream, id_editor, mode);
}

async function start_term(idName) {
    document.getElementById(idName).className = "terminal terminal_f";
    document.getElementById('fake_'+idName).className = "hide";
    window.console_ready = pyterm('#'+idName);
    }

function downloadFile(id_editor, nom_script) {
    let data = ace.edit(id_editor).getValue();
    let script2download = nom_script+'.py';

    if (nom_script == '') {
        let splitDate = new Date().toISOString().split('T');
        let date = splitDate[0] + '-' + splitDate[1].split('.')[0].replace(/:/g, "-");
        script2download = `script_${date}.py`;
    }

    let link = document.createElement('a');
    link.download = script2download;
    let blob = new Blob(['' + data + ''], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}

function reload(idEditor) {
    localStorage.removeItem(`editor_${idEditor}`);
    let content = document.getElementById(`content_editor_${idEditor}`).innerText;
    ace.edit("editor_" + idEditor).getSession().setValue(content.replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*"))
}

function saveEditor(idEditor) {
    localStorage.setItem(`editor_${idEditor}`,
            ace.edit(`editor_${idEditor}`).getSession().getValue())
}

function calcTermSize(text, mode) {
    let nlines = (mode === 'v' ? Math.max(text.split(/\r\n|\r|\n/).length, 6) : Math.max(5,Math.min(10, text.split(/\r\n|\r|\n/).length)))
    $.terminal.active().resize($.terminal.active().width(), nlines*30);
    return nlines
  }

function getWrapperElement(filetype, idEditor) {
    if (document.getElementById(filetype + idEditor) === null) {
        let wrapperElement = document.getElementById(idEditor);  /* going up the DOM to IDE+buttons */ 
        while (wrapperElement.className !== "ide_classe") {
            wrapperElement = wrapperElement.parentNode
        }
    return wrapperElement;
}}

function showGUI(idEditor) {
    let wrapperElement = getWrapperElement("gui_", idEditor);
    var txt = document.createElement("div");
    // txt.innerHTML='<details class="check"><summary>Fenêtre graphique</summary>\
    // <div class="highlight" id="gui_'+idEditor+'"></div></details>'
    txt.innerHTML='<details open class="check"><summary>Fenêtre graphique</summary><div class = "can_wrapper"><div id = "gui_'+idEditor+'"><canvas id = "gui_'+idEditor+'_tracer" width="700" height="400"></canvas><canvas id="gui_'+idEditor+'_pointer" width="700" height="400"></canvas></div></div></details>'

    wrapperElement.insertAdjacentElement('afterend', txt)
}

function showCorrection(id_editor) {
    let wrapperElement = getWrapperElement("gui_", id_editor);

    var txt = document.createElement("div");
    txt.setAttribute("id", `solution_${id_editor}`);
    txt.innerHTML='<details class="admonition check" open><summary>Solution</summary>\
    <div class="highlight" id="corr_'+id_editor+'"></div></details>'

    let corrElt = document.getElementById(`corr_content_${id_editor}`)
    let url_pyfile = corrElt.textContent

    // __md_scope=new URL(".",location)
    // __md_get=(e,_=localStorage,t=__md_scope)=>JSON.parse(_.getItem(t.pathname+"."+e))
    // console.log('BLAM', __md_scope)
    // console.log('localStorage', localStorage)
    // console.log('localStorage 2', __md_scope.pathname+"."+"__palette")
    // console.log('localStorage 3', localStorage.getItem(__md_scope.pathname+"."+"__palette"))
    // console.log('localStorage 4', __md_get("__palette").index)

    function createACE(id_editor){
        let paletteElement = document.querySelector('label[for="__palette_2"]')
        if (paletteElement.previousElementSibling.dataset.mdColorMedia === "(prefers-color-scheme: dark)") {
            var defineTheme = paletteElement.hidden ? "ace/theme/crimson_editor" : 'ace/theme/tomorrow_night_bright'
        } else {
            var defineTheme = paletteElement.hidden ? 'ace/theme/tomorrow_night_bright' : "ace/theme/crimson_editor"
        }
        var editor = ace.edit(id_editor, {
            theme: defineTheme,
            mode: "ace/mode/python",
            autoScrollEditorIntoView: true,
            maxLines: 30,
            minLines: 6,
            tabSize: 4,
            readOnly: true,
            printMargin: false   // hide ugly margins...
        });
        // Decode the backslashes into newlines for ACE editor from admonitions 
        // (<div> autocloses in an admonition) 
        editor.getSession().setValue(url_pyfile.replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*"))
    }
    wrapperElement.insertAdjacentElement('afterend', txt)
    if (corrElt.dataset.strudel == "") window.IDE_ready = createACE(`corr_${id_editor}`)

    // revealing the remark from Element
    var remElement = document.getElementById("rem_content_" + id_editor)
    remElement.style.display = "block";
    
    var fragment = document.createDocumentFragment();
    fragment.appendChild(remElement);
    // console.log(document.getElementById("solution_" + id_editor).firstChild)
    document.getElementById("solution_" + id_editor).firstChild.appendChild(fragment);

}

function executeTest(id_editor, mode) {    
    executeTestAsync(id_editor, mode)
}

async function executeTestAsync(id_editor, mode) {
    await pyodideReadyPromise;
    let interpret_code = silentInterpretACE("editor_"+id_editor, "")

    var code = await interpret_code;
    $.terminal.active().clear();

    try 
    {
        var testDummy = code.includes('dummy_')
        console.log(code, testDummy)
        if (testDummy)
        { 
            var splitJoin = (txt, e) => txt.split(e).join('')
            var enumerize = (liste) => liste.length == 1 ? liste.join("") : liste.slice(0,-1).join(", ") + " et " + liste.slice(-1);
            console.log('ici')

            let joinInstr = []
            let joinLib = []
            let matchInstr = code.match(new RegExp('dummy_(\\w+)\\(', 'g'))
            let matchLib = code.match(new RegExp('#import dummy_lib_(\\w+)', 'g'))
            if (matchInstr != null) for (instruction of matchInstr) joinInstr.push(splitJoin(splitJoin(instruction, 'dummy_'), '('))
            if (matchLib != null) for (instruction of matchLib) joinLib.push(splitJoin(instruction, '#import dummy_lib_'))
            let nI = joinInstr.length
            let nL = joinLib.length
            stdout = '>>> Script exécuté : \n------\n'
            if (nI>0) stdout += ` ${pluralize(nI == 1, 'La', 'Les', true)} ${pluralize(nI == 1, 'fonction')} ${splitJoin(splitJoin(enumerize(joinInstr), 'dummy_'), '(')} ${pluralize(nI == 1, 'est', 'sont', true)} ${pluralize(nI == 1, 'interdite')} pour cet exercice !\n`
            if (nL>0) stdout += ` ${pluralize(nL == 1, 'Le', 'Les', true)} ${pluralize(nL == 1, 'module')} ${splitJoin(enumerize(joinLib), 'dummy_lib_')} ${pluralize(nL == 1, 'est', 'sont', true)} ${pluralize(nL == 1, 'interdit')} pour cet exercice !\n`
            stdout += '------'
        } else {
        let executed_code = await foreignModulesFromImports(code, {'turtle': "pyo_js_turtle"}, "editor_" + id_editor)
        await pyodide.runPythonAsync("from __future__ import annotations\n" + executed_code);    // Running the code
        // pyodide.runPython("from __future__ import annotations\n"+code);    // Running the student code (no output)

        let test_code = document.getElementById("test_term_editor_"+id_editor)
            .textContent.replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*");

        if (test_code.includes("benchmark")) {
        pyodide.runPython(`
        import sys as __sys__
        import io as __io__
        import js
        __sys__.stdout = __io__.StringIO()

        if 'test_unitaire' not in list(globals()):
            from random import choice

        def test_unitaire(numerous_benchmark):
            global_failed = 0
            success_smb = ['🔥','✨','🌠','✅','🥇','🎖']
            fail_smb = ['🌩','🙈','🙉','⛑','🌋','💣']
            try :
                if type(numerous_benchmark[0]) not in [list, tuple]:  # just one function has to be evaluated
                    type_bench = 'multiple' 
                    numerous_benchmark = (numerous_benchmark, )

                for benchmark in numerous_benchmark:
                    failed = 0
                    print(f">>> Test de la fonction ** {benchmark[0].split('(')[0].upper()} **")
                    
                    for k, test in enumerate(benchmark, 1):
                        if eval(test):
                            print(f'Test {k} réussi :  {test} ')
                        else:
                            print(f'Test {k} échoué :  {test} ')
                            failed += 1

                    if not failed :
                        print(f"Bravo vous avez réussi tous les tests {choice(success_smb)}")
                    else :
                        if failed == 1 : msg = f"{failed} test a échoué. "
                        else : msg = f"{failed} tests ont échoué. "
                        print(msg + f"Reprenez votre code {choice(fail_smb)}")
                        global_failed += 1
            except :
                if numerous_benchmark != []:
                    print(f"- Fonctions manquantes ou noms de fonctions incorrectes.")
                    print(f"- Respectez les noms indiqués dans l'énoncé.")
                    global_failed += 1
                else:
                    print(f"🙇🏻 pas de fichier de test... Si vous êtes sur de vous, continuez à cliquer sur le gendarme.")
                    global_failed += 1
            return global_failed
        `);
        var output = await pyodide.runPythonAsync(test_code + "\ntest_unitaire(benchmark)");    // Running the code OUTPUT
        } else {

    console.log('declaration', test_code)
    var global_failed = 0;
    var testCodeTable = test_code.split('\n');  // splits test code into several lines
    testCodeTable = testCodeTable.filter((e)=>e!='')  // get rid of blank lines
    var testCodeTableMulti = []; // multiple lines code joined into one line
    var line = 0;
    let comment = false;
    console.log('587')
    while (line < testCodeTable.length) {
        let countPar = 0;
        let countBra = 0;
        let countCur = 0;
        let contiBool = false;
        let lineStart = line;
        
        if (testCodeTable[line].startsWith('"""') || testCodeTable[line].startsWith("'''")) comment = !comment

        if (!comment)
        {
        do { // multilines assertions
            countPar += countParenthesis(testCodeTable[line], "(");
            countBra += countParenthesis(testCodeTable[line], "[");
            countCur += countParenthesis(testCodeTable[line], "{");
            contiBool = testCodeTable[line].endsWith("\\")
            testCodeTable[line] = testCodeTable[line].replace("\\", "").replace("'''","").replace('"""',"")
            line++;
        // } while (countPar !== 0 || countBra !== 0 || contiBool)
        // console.log(line, testCodeTable[line], !testCodeTable[line].includes('assert'))
        } while (line < testCodeTable.length && !/^(\s*assert)/.test(testCodeTable[line]) && 
                    (countPar !== 0 || countBra !== 0 || countCur !== 0 || contiBool))
        testCodeTableMulti.push(testCodeTable.slice(lineStart, line).join(""))
    } 
    else line++;
    }
    
    console.log('ici',testCodeTableMulti)

    var i = 0;
    var success = 0;
    line = 0;
    var countSoftTabs = (e) => e.startsWith("   ") || e.startsWith("    ")
    let formattedAssertCode = []
    while (line != testCodeTableMulti.length) {
        
        let multiLineCode = testCodeTableMulti[line]
        while (line + 1 != testCodeTableMulti.length && countSoftTabs(testCodeTableMulti[line + 1]) != 0) {
            multiLineCode = multiLineCode + '\n' + testCodeTableMulti[line + 1];
            line++;
        }
        formattedAssertCode.push(multiLineCode)
        line++;
    }


    // number of assert BLOCKS
    var nSecretTests = formattedAssertCode.filter(x => x.includes("assert") && !x.startsWith("#")).length;
    var nExtVar = formattedAssertCode.filter(x => !x.includes("assert") && !x.startsWith("#") && !x.includes("def ")).length;

    var nPassedDict = {};
    var extVarData = {};
    for (let i = 0; i < nSecretTests; i++) nPassedDict[i] = 0;
    for (let i = 0; i < nExtVar; i++) extVarData[i] = 0;

    console.log('627', formattedAssertCode)

    i = 0;
    let j = 0;
    for (let [line, command] of formattedAssertCode.entries()) {  
        try 
        {
            pyodide.runPython(`${command}`)
            if (!command.includes("assert") && !command.startsWith("#") && !command.includes("def ")) {extVarData[j] = [line, command];j++;}
            if (command.includes("assert") && !command.startsWith("#")) {nPassedDict[i] = [-1, command]; i++;success++;}
        }
        catch (err) 
        {
            nPassedDict[i] = [line, command] ;
            i++;
        }
    }
    // for (let test of testCodeTableMulti) {    
    //     try 
    //     {
    //         pyodide.runPython(`${test}`)
    //         if (test.includes("assert") && !test.startsWith("#")) {nPassedDict[i] = [1, test]; i++;success++;}
    //     }
    //     catch (err) 
    //     {
    //         nPassedDict[i] = [0, test] ;
    //         i++;
    //     }
    // }
    window.n_passed = nPassedDict;
    window.ext_var_data = extVarData;


    pyodide.runPython(`
from js import n_passed, ext_var_data
import random
import sys as __sys__
import io as __io__
__sys__.stdout = __io__.StringIO()
success_smb = ['🔥','✨','🌠','✅','🥇','🎖']

n_passed_dict = n_passed.to_py()
ext_var_data = ext_var_data.to_py()
n_passed = list(map(lambda x: x[0],n_passed_dict.values())).count(-1)

if n_passed == len(n_passed_dict):
    print(f""">>> Bravo {random.choice(success_smb)} : vous avez réussi tous les tests. \n === Penser à lire le corrigé et les commentaires ===""")
else :
    print(f""">>> Vérification : pour {len(n_passed_dict)} tests, il y a {n_passed} réussite{"s" if n_passed > 1 else ""} \n------""")

    def extract_log(dico):
        for key, value in n_passed_dict.items():
            if value[0] != -1:
                return key, value[1], value[0]
        return None

    def extract_external_var(log, err_line, var_list):
        T = {}
        for _, [line, declaration] in var_list.items():
            var_name = "".join(declaration.split("=")[0].split())
            if line < err_line and var_name in log and var_name != "":
                T[var_name] = declaration
        return "\\n".join(list(T.values()))

    key, log, err_line = extract_log(n_passed_dict)

    if (ext_var := extract_external_var(log, err_line, ext_var_data)) != "":
        print(f"""Échec du test n°{key} : \n\n{extract_external_var(log, err_line, ext_var_data)} \n\n{log}""")
    else:
        print(f"""Échec du test n°{key} : \n\n{log}""")

print(f"""------""", end="")
`)
        if (nSecretTests == success) {
            var output = 0;
        }
        }

        var stdout = pyodide.runPython("import sys as __sys__\n__sys__.stdout.getvalue()")  // Catching and redirecting the output
        let elementCounter = document.getElementById("test_term_editor_"+id_editor)
        let parentCounter = elementCounter.parentElement.dataset.max;
        const nAttempts = parentCounter;

        while (elementCounter.className !== "compteur") {
            elementCounter = elementCounter.nextElementSibling
        }
        if (output === 0) dict[id_editor] = nAttempts;
        else dict[id_editor] = 1 + (id_editor in dict ? dict[id_editor] : 0);

        if (nAttempts !== '\u221e') { // INFTY symbol
            elementCounter.textContent = Math.max(0, nAttempts-dict[id_editor]) + "/" + parentCounter
        } else {
            elementCounter.textContent = parentCounter + "/" + parentCounter
        }

        if (dict[id_editor] == nAttempts && !document.getElementById('solution_editor_'+id_editor)) {
            let correctionExists = $('#corr_content_editor_'+id_editor).text()  // Extracting url from the div before Ace layer
            if (correctionExists !== "" || document.getElementById("corr_content_editor_" + id_editor).dataset.strudel != "") {
                showCorrection('editor_'+id_editor);
            };
        }

        nlines = calcTermSize(stdout, mode)
        let editor = ace.edit("editor_"+id_editor);
        let stream = await editor.getSession().getValue();
        if(editor.session.getLength() <= nlines && mode === 'v') {
            nslash = editor.session.getLength()- nlines + 3; // +3 takes into account shift and newlines
            for (var i = 0; i < nslash; i++) {
                stream += "\n"
            }
            editor.session.setValue(stream); // set value and reset undo history
        }
    }
        $.terminal.active().echo(stdout); 

    } catch(err) { // Python not correct.
        err = err.toString().split("\n").slice(-7).join("\n");
        nlines = calcTermSize(err, mode);
        console.log('fin')
        $.terminal.active().echo(">>> Script exécuté : \n------\n" + generateLog(err, code, 0) + "\n------\n");

      }
    }