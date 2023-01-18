// code pour le compteur de clics gauche

let compteur = 0; //definition d'une variable globale

function compte(){
    compteur = compteur + 1;
    let v = document.getElementById("nb_clics"); // acces à l'element HTML par son id
    v.innerHTML = compteur; // modification du contenu de l'element HTML
}

function reinitialiser(){
    compteur = -1
    let v = document.getElementById("nb_clics"); // acces a l'element HTML par son id
    v.innerHTML = compteur; // modification du contenu de l'element HTML
}

// code pour l'image du lion

function change_img(){
    let img = document.getElementById("lion"); // acces a l'element HTML par son id
    img.setAttribute("src", "lion2.jpg"); // modification d'un attribut de l'element HTML
}

function restaure_img(){
    let img = document.getElementById("lion"); // acces a l'element HTML par son id
    img.setAttribute("src", "lion1.jpg"); // modification d'un attribut de l'element HTML
}

// code pour le changement des couleurs

function getRandomInt(min, max) {
    // cette fonction renvoie un entier aleatoire 
    // compris entre min inclus et max exclu
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function changeFG(){
    let body = document.getElementsByTagName("body")[0]; // acces a l'element HTML par le nom de balise
    let r = getRandomInt(0,256);
    let g = getRandomInt(0,256);
    let b = getRandomInt(0,256);
    // construction d'une chaine de caracteres representant une couleur RGB
    couleur = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";
    console.log(couleur); // affichage de la couleur dans la console pour verification
    body.style.background = couleur;
}

function changeBG(){
    let html = document.getElementsByTagName("html")[0];
    let r = getRandomInt(0,256);
    let g = getRandomInt(0,256);
    let b = getRandomInt(0,256);
    // construction d'une chaine de caracteres representant une couleur RGB
    couleur = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";
    console.log(couleur);
    html.style.background = couleur;
}
