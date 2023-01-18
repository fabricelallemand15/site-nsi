---
title: Référence des principales balises HTML
niveau: Première NSI
année: 2022-2023
---

Cette page répertorie les éléments HTML principaux, qui sont créés à l'aide de balises. Ils sont regroupés par fonction pour vous aider à trouver facilement ce que vous avez en tête.

Pour une liste complète, reportez-vous au [site de Mozilla](https://developer.mozilla.org/fr/docs/Web/HTML/Element){target="_blank"} (excellente ressource en français). Les informations de cette page sont extraites de ce site.

## Racine principale

!!! danger "Principales balises HTML"
   
    | **Balise** | **Description** |
    |--------|--------|
    |`<html>`|   L'élément HTML **`<html>`** représente la racine d'un document HTML. Tout autre élément du document doit être un descendant de cet élément.|
<!--  -->

## Métadonnées

Les métadonnées contiennent des informations à propos de la page. Elles
comprennent des informations sur les styles, les scripts et les données
qui aident les programmes (moteur de
recherche, navigateurs, etc.) à utiliser et à rendre
la page. Les métadonnées relatives aux styles et aux scripts peuvent
être définies dans la page ou renvoyer à un autre fichier contenant ces
informations.

!!! danger "Principales balises HTML"
   
    | **Balise** | **Description** |
    |--------|--------|
    |`<head>`|     L'élément HTML **`<head>`** fournit des informations générales (métadonnées) sur le document, incluant son titre et des liens ou des définitions vers des scripts et feuilles de style.
    |`<link>`|     L'élément HTML **`<link>`** définit la relation entre le document courant et une ressource externe. Cet élément peut être utilisé pour définir un lien vers une feuille de style, vers les icônes utilisées en barre de titre ou comme icône d'application sur les appareils mobiles.
    |`<style>`|   L'élément HTML **`<style>`** contient des informations de mise en forme pour un document ou une partie d'un document. Par défaut, les instructions de mise en forme écrites dans cet élément sont écrites en CSS.
    |`<title>`|   L'élément **`<title>`** définit le titre du document (qui est affiché dans la barre de titre du navigateur ou dans l'onglet de la page). Cet élément ne peut contenir que du texte, les balises qu'il contiendrait seraient ignorées.
<!--  -->

## Structure du document

Organiser le contenu d'une page en différentes sections permet d'avoir
une structure logique au sein d'un document. Grâce à ces éléments, on
peut créer un plan pour la page, ajouter des titres pour identifier les
sections et également gérer un en-tête et un bas de page.

On remarquera que, en dehors des balises de titres, ces éléments HTML ne modifient pas du tout la mise en forme du texte qu'elles contiennent. Ce sont des balises **sémantiques** : elles servent à donner du **sens** au contenu, pour le rédacteur de la page. Elles guident aussi l'indexation de la page par les moteurs de recherche.

!!! danger "Principales balises HTML"
   
    | **Balise** | **Description** |
    |--------|--------|
    |`<body>`|   L'élément HTML **`<body>`** représente le contenu principal du document HTML. Il ne peut y avoir qu'un élément `<body>` par document.
    |`<header>`|L'élément HTML **`<header>`** représente du contenu introductif, généralement un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d'autres éléments tels qu'un logo, un formulaire de recherche, le nom d'auteur, etc.
    |`<footer>`| L'élément HTML **`<footer>`** représente le pied de page de la section ou de la racine de sectionnement la plus proche. Un élément `<footer>` contient habituellement des informations sur l'autrice ou l'auteur de la section, les données relatives au droit d'auteur  ou les liens vers d'autres documents en relation. 
    |`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`|   Les éléments **`<h1>`** à **`<h6>`** représentent six niveaux de titres dans un document, `<h1>` est le plus important et `<h6>` est le moins important. Un élément de titre décrit brièvement le sujet de la section qu'il introduit.
    `<main>`|L'élément HTML **`<main>`** représente le contenu majoritaire du `body` du document. Le contenu principal de la zone est constitué de contenu directement en relation, ou qui étend le sujet principal du document.
    |`<nav>`|L'élément HTML **`<nav>`** représente une section d'une page ayant des liens vers d'autres pages ou des fragments de cette page. Autrement dit, c'est une section destinée à la navigation dans un document .
    |`<section>`|L'élément HTML **`<section>`** représente une section générique d'un document, par exemple un groupe de contenu thématique. Une section commence généralement avec un titre.
<!--  -->

## Contenu textuel

Le contenu HTML textuel permet d'organiser des blocs ou des sections de
contenu entre la balise ouvrante
`<body>` et la balise fermante
`</body>`. Ces éléments sont cruciaux pour l'accessibilité et le
référencement car ils permettent d'identifier le sens du contenu.

!!! danger "Principales balises HTML"
   
    | **Balise** | **Description** |
    |-------------|-------------|
    |`<blockquote>`|L'élément HTML **`<blockquote>`**  indique que le texte contenu dans l'élément est une citation longue. Le texte est généralement affiché avec une indentation. Une URL indiquant la source de la citation peut être donnée grâce à l'attribut **`cite`** tandis qu'un texte représentant la source peut être donné via l'élément **`<cite>`**.
    |`<dd>`| L'élément HTML **`<dd>`** fournit la description, la définition ou la valeur du terme précédent **`<dt>`** dans une liste de description **`<dl>`**.
    |`<div>`| L'élément HTML **`<div>`**  est le conteneur générique de contenu. Il n'a aucun effet sur le contenu ou la mise en page tant qu'il n'est pas mis en forme d'une manière quelconque à l'aide de CSS.
    |`<dl>`|L'élément HTML **`<dl>`** représente une liste de descriptions sous la forme d'une liste de paires associant des termes (fournis par des éléments **`<dt>`**) et leurs descriptions ou définitions (fournies par des éléments **`<dd>`**). On utilisera par exemple cet élément pour implémenter un glossaire.
    |`<dt>`| L'élément HTML **`<dt>`** identifie un terme dans une liste de définitions ou de descriptions. Cet élément n'apparaît qu'en tant qu'élément enfant d'un élément **`<dl>`** et est généralement suivi d'un élément **`<dd>`**. Plusieurs éléments **`<dt>`** qui se suivent indiqueront qu'ils partagent la définition/description fournie par le prochain élément **`<dd>`**.
    |`<li>`| L'élément HTML **`<li>`** est utilisé pour représenter un élément dans une liste. Il doit être contenu dans un élément parent : une liste ordonnée **`<ol>`**, une liste non ordonnée **`<ul>`** ou un menu **`<menu>`**. Dans les menus et les listes non ordonnées, les éléments de liste sont habituellement affichés en utilisant des puces. Dans les listes ordonnées, ils sont habituellement affichés avec compteur croissant à gauche, tel qu'un nombre ou une lettre.
    |`<menu>`| L'élément HTML **`<menu>`** est une alternative sémantique à **`<ul>`**, mais est traité par les navigateurs, et en termes d'accessibilité comme un élément **`<ul>`**. Il représente une liste d'éléments non-ordonnée (chaque élément de la liste étant représenté par un élément **`<li>`**).
    |`<ol>`|L'élément HTML **`<ol>`** représente une liste ordonnée. Les éléments d'une telle liste sont généralement affichés avec un indicateur ordinal pouvant prendre la forme de nombres, de lettres, de chiffres romains ou de points. La mise en forme de la numérotation n'est pas utilisée dans la description HTML mais dans la feuille de style CSS associée grâce à la propriété `list-style-type`.
    |`<p>`| L'élément HTML **`<p>`** représente un paragraphe de texte. Les paragraphes sont généralement représentés comme des blocs et séparés par un espace vertical, leur première ligne est également parfois indentée. Les paragraphes sont des éléments blocs.
    |`<pre>`|L'élément HTML **`<pre>`** représente du texte préformaté, généralement écrit avec une police à chasse fixe. Le texte est affiché tel quel, les espaces utilisés dans le document HTML seront retranscrits.
    |`<ul>`| L'élément HTML **`<ul>`** représente une liste d'éléments sans ordre particulier. Il est souvent représenté par une liste à puces.
<!--  -->

## Sémantique du texte en ligne

Les éléments pour le texte en ligne peuvent être utilisés pour définir
la signification, la structure ou la mise en forme d'un terme, d'une
ligne ou d'un fragment de texte.

!!! danger "Principales balises HTML"
    | **Balise** | **Description** |
    |--------|--------|
    |`<a>`| L'élément HTML **`<a>`** (pour ancre ou *anchor* en anglais), avec son attribut `href`, crée un lien hypertexte vers des pages web, des fichiers, des adresses e-mail, des emplacements se trouvant dans la même page, ou tout ce qu'une URL peut adresser. Le contenu de chaque élément `<a>` **doit** indiquer la destination du lien. Si l'attribut `href` est présent, appuyer sur la touche entrée en se concentrant sur l'élément `<a>` l'activera.
    |`<abbr>`| L'élément HTML **`<abbr>`** (**abréviation** en français) représente une abréviation ou un acronyme ; l'attribut facultatif `title` peut fournir une explication ou une description de l'abréviation. S'il est présent, `title` doit contenir cette description complète et rien d'autre.
    |`<br>`| L'élément HTML **`<br>`** crée un saut de ligne (un retour chariot) dans le texte. Il s'avère utile lorsque les sauts de ligne ont une importance (par exemple lorsqu'on écrit une adresse ou un poème).
    |`<cite>`| L'élément **`<cite>`** contient le titre d'une œuvre telle qu'un livre, une chanson, un film, une sculpture... Cet élément doit inclure le titre de l'œuvre.
    |`<code>`| L'élément HTML **`<code>`** représente un court fragment de code machine. Par défaut, l'agent utilisateur utilise une police à chasse fixe (*monospace*) afin d'afficher le texte contenu dans cet élément.
    |`<em>`| L'élément HTML **`<em>`** (pour emphase) est utilisé afin de marquer un texte sur lequel on veut insister. Les éléments `<em>` peuvent être imbriqués, chaque degré d'imbrication indiquant un degré d'insistance plus élevé.
    |`<i>`| L'élément HTML **`<i>`** représente un morceau de texte qui se différencie du texte principal. Cela peut par exemple être le cas pour des termes techniques, des phrases dans une langue étrangère ou encore l'expression des pensées d'un personnage. Le contenu de cet élément est généralement affiché en italique.
    |`<kbd>`| L'élément HTML **`<kbd>`** représente une plage de texte en ligne indiquant la saisie de texte par l'utilisateur à partir d'un clavier, d'une saisie vocale ou de tout autre dispositif de saisie de texte. Par convention, le user agent rend par défaut le contenu d'un élément `<kbd>` en utilisant sa police monospace, bien que cela ne soit pas requis par le standard HTML.
    |`<mark>`| L'élément HTML **`<mark>`** représente un texte marqué ou surligné à cause de sa pertinence dans le contexte. Il peut par exemple être utilisé afin d'indiquer les correspondances d'un mot-clé recherché au sein d'un document.
    |`<s>`| L'élément HTML **`<s>`** permet d'afficher du texte qui est barré car il n'est plus pertinent ou car il est obsolète. `<s>` ne doit pas être employé pour indiquer des éditions dans un document .
    |`<small>`| L'élément HTML **`<small>`** permet de représenter des commentaires ou des textes à écrire en petits caractères (des termes d'un contrat, des mentions relatives au droit d'auteur, etc.) quelle que soit la présentation.
    |`<span>`| L'élément HTML **`<span>`** est un conteneur générique en ligne (*inline*) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme (grâce aux attributs `class` ou `id` et aux règles CSS) ou parce qu'ils partagent certaines valeurs d'attribut comme `lang`. Il doit uniquement être utilisé lorsqu'aucun autre élément sémantique n'est approprié. `<span>` est très proche de l'élément `<div>`, mais l'élément `<div>` est un élément de bloc, alors que `<span>` est un élément en ligne.
    |`<strong>`| L'élément HTML **`<strong>`** indique que le texte a une importance particulière ou un certain sérieux voire un caractère urgent. Cela se traduit généralement par un affichage en gras.
    |`<sub>`| L'élément HTML **`<sub>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte en indice (sous la ligne de base et généralement plus petit) par rapport au bloc de texte environnant.
    |`<sup>`| L'élément HTML **`<sup>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte en exposant (plus haut et généralement plus petit) par rapport au bloc de texte environnant.
<!--  -->

## Images et médias

HTML prend en charge différents fichiers multimédias pour les images,
les fichiers audio et vidéo.

!!! danger "Principales balises HTML"
    | **Balise** | **Description** |
    |--------|--------|
    |`<area>`| L'élément HTML **`<area>`** définit une zone particulière d'une image et peut lui associer un [lien hypertexte]. Cet élément n'est utilisé qu'au sein d'un élément **`<map>`**.
    |`<audio>`| L'élément HTML **`<audio>`** est utilisé afin d'intégrer un contenu sonore dans un document. Il peut contenir une ou plusieurs sources audio représentées avec l'attribut `src` ou l'élément `<source>` : le navigateur choisira celle qui convient le mieux.
    |`<img>`| L'élément HTML **`<img>`** permet d'intégrer une image dans un document.
    |`<map>`| L'élément HTML **`<map>`** est utilisé avec des éléments `<area>` afin de définir une image cliquable divisée en régions.
    |`<video>`| L'élément HTML **`<video>`** intègre un contenu vidéo dans un document.
<!--  -->

## Contenu embarqué

En plus du contenu multimédia, un document HTML peut embarquer d'autres
contenus (bien que les interactions soient plutôt limitées).

!!! danger "Principales balises HTML"
    | **Balise** | **Description** |
    |--------|--------|
    | `<embed>`| L'élément HTML **`<embed>`** permet d'intégrer du contenu externe à cet endroit dans le document (par exemple un fichier PDF).
    | `<iframe>`| L'élément HTML **`<iframe>`** représente un contexte de navigation imbriqué qui permet en fait d'obtenir une page HTML intégrée dans la page courante. Souvent utilisé pour intégrer une vidéo provenant d'une plateforme de streaming.
<!--  -->

## Élément interactif

Pour finir voici une dernière balise utile :

!!! danger "Principales balises HTML"
    | **Balise** | **Description** |
    |--------|--------|
    |`<details>`| L 'élément HTML **`<details>`** est utilisé comme un outil permettant de révéler une information. Un résumé ou un intitulé peuvent être fournis grâce à un élément `<summary>`.
    |`<summary>`| L 'élément HTML **`<summary>`** représente une boîte permettant de révéler le contenu d 'un résumé ou d 'une légende pour le contenu d 'un élément `details`. En cliquant sur l 'élément `<summary>`, on passe de l 'état affiché à l 'état masqué (et vice versa) de l 'élément `<details>` parent.
<!--  -->

!!! info "Remarque"
    * Les balises concernant les tableaux ne sont pas répertoriées ici. Voir le [site de Mozilla](https://developer.mozilla.org/fr/docs/Web/HTML/Element){target="_blank"} en cas de besoin.
    * Les balises concernant les **formulaires** et les **scripts** seront étudiées plus tard au cours de la séquence.
<!--  -->