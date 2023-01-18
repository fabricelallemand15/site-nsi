var tagHdr = "#--- HDR ---#";

function createTheme() { // dark? XOR hidden? -> crimson
    let palElt = document.querySelector('label[for="__palette_2"]');
    let palStyle = palElt.previousElementSibling.dataset.mdColorMedia;
    return "ace/theme/" + (palStyle === "(prefers-color-scheme: dark)" == palElt.hidden  ? "crimson_editor" : 'tomorrow_night_bright');
};

$('[id^=editor_]').each(function() {
    let number = this.id.split('_').pop();
    let url_pyfile = $('#content_'+this.id).text()  // Extracting url from the div before Ace layer

    if (url_pyfile.includes(tagHdr)) { // test if a header code is present
        splitHdrPyFile = url_pyfile.match(new RegExp(tagHdr + "(.*)" + tagHdr + "(.*)"));
        if (splitHdrPyFile === null) { pyFile = `Missing ${tagHdr} tag. Please check !\n\n` + url_pyfile } 
        else {
            hdrFile = splitHdrPyFile[1];
            pyFile = splitHdrPyFile[2];
            newline = 'bksl-nl';
            while(pyFile.startsWith(newline)) { pyFile = pyFile.substring(newline.length); }
        }
    } else {
        pyFile = url_pyfile;
    }

    let idEditor = "editor_" + number
    function createACE(idEditor){
        ace.require("ace/ext/language_tools");
        var editor = ace.edit(idEditor, {
            theme: createTheme(),
            mode: "ace/mode/python",
            autoScrollEditorIntoView: true,
            maxLines: 30,
            minLines: 6,
            tabSize: 4,
            printMargin: false   // hide ugly margins...
        });
        editor.setOptions({
            //            https://github.com/ajaxorg/ace/blob/092b70c9e35f1b7aeb927925d89cb0264480d409/lib/ace/autocomplete.js#L545
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false,
        });
        editor.getSession().setValue(pyFile.replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*"))  
    }
    window.IDE_ready = createACE(idEditor) // Creating Ace Editor #idEditor

    var nChange = 0;
    let editor = ace.edit(idEditor);
    editor.getSession().on('change', function() {
        nChange += 1;
        if (nChange % 25 == 0) localStorage.setItem("editor_" + idEditor, editor.getSession().getValue())
    });


    let storedCode = localStorage.getItem(idEditor);
    if (storedCode !== null) ace.edit(idEditor).getSession().setValue(storedCode)
    
    // Create 6 empty lines
    if (url_pyfile === '') ace.edit(idEditor).getSession().setValue('\n'.repeat(6));  

    // A correction Element always exists (can be void)
    prevNode = document.getElementById("corr_content_" + idEditor)
    var key = prevNode.dataset.strudel
    var workingNode = prevNode
    var remNode = document.createElement("div");

    if (prevNode.parentNode.tagName === 'P') {
        
        // REM file on top level
        // console.log('51',idEditor,workingNode, workingNode.parentNode.innerHTML.includes('<strong>A</strong>'))
        workingNode = prevNode.parentNode.nextElementSibling //'<strong>A</strong>'
        // if (workingNode.nex)

        if (workingNode.innerHTML.includes('<strong>A</strong>') && workingNode.nextElementSibling.innerHTML.includes('<strong>Z</strong>')) {
            remNode.innerHTML = 'Pas de remarque particulière.';
            workingNode.nextElementSibling.remove()
            workingNode.remove()
        }
        else 
        {
        workingNode.remove()
        workingNode = prevNode.parentNode.nextElementSibling

        var tableElements = [];
        while (!workingNode.innerHTML.includes('<strong>Z</strong>')) {
            tableElements.push(workingNode)
            workingNode = workingNode.nextElementSibling;
        }
        workingNode.remove()

        for (let i = 0; i < tableElements.length; i++) remNode.append(tableElements[i])
        }

    } else {
        // Search for the rem DIV.
        workingNode = workingNode.nextElementSibling
        // console.log(prevNode, workingNode)
        // If workingNode is a <p> (admonition), we continue
        // else, we are outside an admonition
        if (workingNode !== null) workingNode = workingNode.nextElementSibling

        // No remark file. Creates standard sentence.
        if (workingNode === null) remNode.innerHTML = 'Pas de remarque particulière.';
        else 
        {

        var tableElements = [];
        while (workingNode !== null) {
            tableElements.push(workingNode);
            workingNode = workingNode.nextElementSibling;
        }

        for (let i = 0; i < tableElements.length; i++) remNode.append(tableElements[i])
        
        }}

    if (key != "")  
    /* another possible condition is this : 
    !remNode.innerHTML.includes('<h1'))  */
    {  
        remNode = document.createElement("div");
        remNode.innerHTML = `Vous trouverez une analyse détaillée de la solution <a href = "../${md5('e-nsi+' + key)}/exo_REM/" target="_blank"> en cliquant ici </a>`
    }

    prevNode.insertAdjacentElement('afterend', remNode)
    remNode.setAttribute("id", "rem_content_" + idEditor);
    document.getElementById("rem_content_" + idEditor).style.display = "none"

});

// Javascript to upload file from customized buttons
$('[id^=input_editor_]').each(function() {
    let number = this.id.split('_').pop();
    let idEditor = "editor_" + number
    document.getElementById('input_'+idEditor).addEventListener('change', function(e) {readFile(e, idEditor)}, false);
});

function readFile(evt, idEditor) {
    let file = evt.target.files[0];
    let reader = new FileReader();
    var editor = ace.edit(idEditor);
    reader.onload = function(event) {
        editor.getSession().setValue(event.target.result);
    }
    reader.readAsText(file)
};

// Following blocks paint the IDE according to the mkdocs light/dark mode 
function paintACE(theme) {
    for (let editeur of document.querySelectorAll('div[id^="editor_"], div[id^="corr_editor_"]')) {
        let editor = ace.edit(editeur.id);
        editor.setTheme(theme);
        editor.getSession().setMode("ace/mode/python"); // USEFUL ????
    };
}

window.addEventListener('DOMContentLoaded', () => paintACE(createTheme()));

var p2 = document.querySelector('input[id="__palette_1"]')
p2.addEventListener('click', () => paintACE('ace/theme/' + (p2 === "(prefers-color-scheme: dark)" ? 'tomorrow_night_bright' : 'crimson_editor')));

var p1 = document.querySelector('input[id="__palette_2"]')
p1.addEventListener('click', () => paintACE('ace/theme/' + (p1 === "(prefers-color-scheme: light)" ? 'crimson_editor' : 'tomorrow_night_bright')));

// turn off copy paste of code... A bit aggressive but necessary
$(".highlight").bind('copy paste',function(e) { e.preventDefault(); return false; });
