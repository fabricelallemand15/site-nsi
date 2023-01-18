---
title: "Javascript : Explications et compléments"
niveau: Première NSI
année: 2022-2023
---

<!-- Introduction avec historique -->

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png){width=15% style="float: right; margin-left: 20px"}

Les scripts Javascript permettent des interactions entre l'utilisateur et une page web à partir d'éléments graphiques inclus dans la page et de l'interception d'événements auxquels sont associés des fonctions.

JavaScript (souvent abrégé en « JS ») est un langage de script léger principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web. Le code JavaScript est interprété à la volée par le navigateur internet.

JavaScript a été créé en 1995 par [Brendan Eich](https://fr.wikipedia.org/wiki/Brendan_Eich){target="_blank"} et intégré au navigateur web [Netscape Navigator 2.0](https://fr.wikipedia.org/wiki/Netscape_Navigator){target="_blank"}. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition. 

JavaScript ne doit pas être confondu avec le langage de programmation Java. Java et JavaScript sont deux marques déposées par Oracle dans de nombreux pays, mais ces deux langages de programmation ont chacun une syntaxe, une sémantique et des usages différents.

!!! abstract "À savoir"
    Une page Web moderne, reçue par un client, comporte au moins trois composants logiciels :

    * HTML pour la structure du document.
    * CSS pour le paramétrage de l'apparence des éléments et leur positionnement.
    * Javascript pour la définition de programmes qui vont réagir à des événements déclenchés par l'utilisateur de la page et modifier la structure de données de la page (éléments HTML et styles CSS).

    L'environnement d'exécution d'un code Javascript est confiné à l'onglet de la page Web où il est chargé. Pour des raisons de sécurité il ne doit pas interagir avec d'autres pages ou des ressources du poste client. Par ailleurs, si on recharge la page auprès du serveur, l'environnement Javascript est réinitialisé et les modifications de la page effectuées par un code Javascript ne sont pas répercutées sur la page source disponible sur le serveur.
<!--  -->

Nous reparlerons plus en détail dans une autre partie du cours des notions de **client**, **serveur** et de la façon dont ils communiquent entre eux.

## 1. Éléments de base du langage

Il ne s'agit pas ici de donner une description complète du langage Javascript, mais de fournir quelques repères qui pourront être complétés en consultant les ressources données en bas de cette page.

Javascript est, comme Python, un langage à typage dynamique : il n'est pas nécessaire de déclarer le type des variables à leur création.

La création d'une variable doit cependant être **déclarée** à l'aide de l'instruction `let` ou de l'instruction `var`. La différence entre ces deux instructions est leur **portée** : `let` définit une variable locale, limitée à un bloc ; `var` définit une variable globale.

```js
let ma_variable = "toto"
```

Les blocs d'instruction sont délimités par des **accolades** alors qu'en Python ils le sont par l'**indentation**. Cette dernière n'a donc pas de sens en Javascript, mais elle peut être quand même utilisée pour rendre le texte plus lisible. La fin d'une ligne d'instructions est matérialisée par un point virgule `;`.

Les commentaires sont précédés de `//`.

**Opérateurs de base**

| Opérateurs |	Description |
| -------- | -------- |
| `=` 	|affectation|
| `*` 	|multiplication|
| `/` 	|division|
| `**` 	|puissance|
| `== ou ===` 	|égalité|
| `!= ou !===` 	|différence|
| `&&` 	|et logique|
| `||` 	|ou logique|
| `!` 	|négation logique|

**Fonctions**

Les fonctions sont définies par l'instruction `function`.

```JS
function f(x) {
    return 2 * x ** 2 + 5;
}
```

**Structures conditionnelles**

```js
function juge(x) {
    if (x > 10){
        console.log("Tu as la moyenne.");
    }
    else {
        console.log("Tu n'as pas la moyenne.");
    }
}
```

!!! info "Remarque"
    La fonction `console.log()` permet d'afficher des éléments dans la console Javascript visible dans les outils de développement du navigateur.

**Boucles**

```js
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// sortie attendue : "012345678"
```

```js
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// sortie attendue : 3
```

## 2. Interaction avec la page web

Du point de vue de Javascript, la page web est un arbre HTML (voir [le cours précédent](cours_HTML.md)).

La page web dans son ensemble est représentée par l'objet `document`.

Pour accéder aux éléments HTML, il existe plusieurs solutions : par leur classe CSS, par leur nom, mais le plus simple est l'accès par leur identifiant, en utilisant `getElementById`.

Une fois un élément HTML sélectionné, son contenu est représenté par `innerHTML`et il peut être modifié.

On peut aussi accéder aux et modifier les différentes règles CSS en utilisant une syntaxe du type `element.style.regle = ...'.

Toutes ces instructions sont illustrées par l'exemple ci-dessous. La [page web étant chargée dans le navigateur](mapageweb.html){target="_blank"}, on peut entrer les instructions Javascript ligne par ligne dans la console.

```HTML
<html>
  <head>
    <title> Ma page web </title>
  </head>
  <body>
    <p id="p1">Bonjour</p>
    <p id="p2">Bonsoir</p>
    <p id="p3">Au revoir !</p>
  </body>
</html>
```

```JS
// sélection de premier paragraphe et remplacement de son contenu
let para = document.getElementById("p1");
para.innerHTML = "Hello !";

// sélection du second paragraphe et application de style
let paragra = document.getElementById("p3");
paragra.style.color = "red";
paragra.style.textAlign = "center";
```

## 3. Programmation événementielle

!!! danger "Programmation événementielle"
    JavaScript utilise la programmation événementielle dans laquelle l'exécution d'actions est déclenchée automatiquement lorsqu'un événement survient. Un événement correspond en général à un changement d'état dans le contexte du programme, ou bien à une intervention explicite de l'utilisateur (ou d'un système externe). La programmation événementielle est souvent utilisée dans les cas suivants :

    * La programmation d'automates (systèmes de régulation par exemple). Par exemple : `température < 20 → déclencher chauffage ;`

    * La programmation d'interface graphique. En effet, chaque action de l'utilisateur (clic souris, etc.) peut être vue comme un événement.

    Le programme sera principalement défini par ses réactions aux différents événements qui peuvent se produire, c'est-à-dire des changements d'état de variable (par exemple l'incrémentation d'une liste),, un déplacement ou un click de souris, une saisie au clavier…

De nombreux types d'événements peuvent être détectés, par exemple : 

* `onload` : la page web est chargée ;
* `onkeypress` : une touche est pressée ;
* `onclick` : clic gauche sur un élément ;
* `onmouseover` : le pointeur de la souris passe sur un élément.

Une liste complète est disponible sur [le site W3Schools](https://www.w3schools.com/tags/ref_eventattributes.asp){target="_blank"}.

Pour associer une fonction à un événement, on ajoute un attribut portant le nom de cet événement à l'élément HTML considéré.

Par exemple, dans le code ci-dessous, la fonction `maFonction()` sera exécutée dès que la page aura été chargée dans le navigateur.

```HTML
 <body onload="maFonction()"> 
```

Le code Javascript de `maFonction` étant quant à lui situé dans un fichier de script séparé déclaré dans la section `<head>`de la page HTML.

## 4. Ressources pour aller plus loin

De très nombreuses ressources existent pour apprendre Javascript.

* Excellente ressource pour apprendre le HTML, le CSS et JavaScript : [MDN Web Docs de Mozilla](https://developer.mozilla.org/fr/){target="_blank"}. Cerise sur le gâteau : le site est disponible en français.
* Incontournable, mais en anglais, les tutoriels de [w3Schools](https://www.w3schools.com/){target="_blank"}.
* Plus difficile, mais très complet : [le cours de Pierre Giraud](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/){target="_blank"}. Attention, seule la version en ligne est gratuite !