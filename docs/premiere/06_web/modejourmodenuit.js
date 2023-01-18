let mode_actuel = "jour"

function change(){
    let html = document.getElementById("page");
    let body = document.body;
    if (mode_actuel=="jour") {
        mode_actuel = "nuit";
        html.style.background = "rgb(13, 10, 70)";
        body.style.background = "rgb(48, 48, 43)";
        body.style.color = "white";
    } else {
        mode_actuel = "jour";
        html.style.background = "rgb(81, 76, 164)";
        body.style.background = "rgb(238, 238, 229)";
        body.style.color = "black";
    }
}