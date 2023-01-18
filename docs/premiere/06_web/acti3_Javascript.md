---
title: "Activité 3 : Page Web interactive avec Javascript"
niveau: Première NSI
année: 2022-2023
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png){width=15% style="float: right; margin-left: 20px"}

!!! danger "Objectifs de cette activité"
    À l'issue de cette activité, vous saurez :

    * identifier les composants graphiques permettant d'interagir avec une page web ;
    * identifier des événements et les fonctions associées ;
    * comment fonctionne le trio HTML/CSS/Javascript.
<!--  -->

## Partie 1 - Observation d'une page web interactive

1. Ouvrir la page web qui va nous servir d'exemple, [en cliquant sur ce lien](acti3.html){target="_blank"}.
2. Tester et observer les différentes interactivités présentes sur la page. Quels éléments HTML permettent d'interagir avec la page ?
3. Ouvrir le code source de la page et repérer parmi les éléments HTML présents ceux qui possèdent un attribut de la forme "on...()". Ces attributs définissent la fonction Javascript qui doit être exécutée lorsque l'événement indiqué survient. Noter le nom de chacune de ces fonctions ainsi que l'élément auquel elles sont associées.
4. Mais où se trouve le code de ces fonctions ? Observer le contenu de l'élément `<head>`: une ligne faisant référence à un fichier de script Javascript a été ajoutée :

    ```html
    <script src="acti3.js"></script>
    ```
    Ouvrir ce fichier. Il contient la définition des fonctions déclenchées par les événements.

5. Répondre aux questions suivantes :

    1. Comment fait-on des commentaires en Javascript ?
    2. Quel mot-clef est utilisé pour définir une variable ?
    3. Quelle instruction correspond à l'instruction Python `def`?
    4. Quelle instruction correspond à l'instruction Python `str()`?

6. On trouve dans le code deux lignes `console.log(...)`. Cette instruction permet d'écrire dans la console Javascript. Celle-ci apparaît dans les outils de développement accessibles en pressant la touche F12 (onglet Console). Ouvrir cette console, cliquer plusieurs fois sur les boutons qui font changer les couleurs d'arrière-plan et observer ce qui apparaît dans la console.

!!! info "Le trio HTML/CSS/JS"
    Une page web interactive utilisant javascript sera donc rendue dans le navigateur à partir du code contenu dans trois fichiers distincts :

    * le fichier HTML pour la structure du document et son contenu ;
    * le fichier CSS pour le style ;
    * le fichier javascript pour la définition des algorithmes et la gestion des événements.

    Le code Javascript peut modifier le contenu des éléments HTML et les règles CSS.
<!--  -->

!!! warning "Attention !"
    Le code Javascript est exécuté sur l'ordinateur **client**, par le navigateur. Toute modification faite sur le client (avec les outils de développement par exemple) sera perdue si la page est rechargée. Le **serveur** va en effet alors renvoyer la page initiale.
<!--  -->

## Partie 2 - Création d'une page web interactive

Dans cette partie, vous devez créer une page web, au format HTML, contenant du texte et une image, associée à une feuille de style de votre choix.

Vous devez ensuite créer un fichier `script.js` et le lier à votre page HTML.

L'objectif est d'insérer dans votre page HTML un bouton "Mode jour/Mode nuit" qui changera les couleurs de la page à chaque clic : passage d'un thème clair à un thème sombre et vice versa.

[Ce travail est à faire dans le Replit accessible en cliquant ici.](https://replit.com/team/premiere-nsi/Mode-jourMode-nuit)