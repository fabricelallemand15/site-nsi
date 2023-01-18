---
title: "Activité 1 : Page web et langage HTML"
niveau: Première NSI
année: 2022-2023
---

!!! danger "Objectifs de cette activité"
    À l'issue de cette activité, vous saurez :

    * comment est codée une page web simple ;
    * reconnaître les principales balises HTML ;
    * créer une page HTML simple.
[//]: ()

Pour cette activité, on utilisera de préférence le navigateur Firefox.

!!! info
    HTML signifie **Hypertext Markup Language**. Il s'agit du langage informatique utilisé pour coder les pages Web. Ce n'est pas un langage de programmation, mais un langage de description.

## Partie 1. Observation d'une page HTML simple

1. Ouvrir dans un nouvel onglet la page suivante : [Tim_Berners.html](Tim_Berners.html){target="_blank"}. La page qui s'affiche est une page HTML contenant des informations textuelles avec une mise en forme (titres, paragraphes, liste à puce, liste numérotée, caractères gras, italiques, ...), une image et un extrait de vidéo.
2. Faire un clic droit dans la page et cliquer sur "Code source de la page" pour faire apparaître la page HTML source. Le fichier qui s'ouvre est un fichier texte. Il contient le descriptif de la page Web en **langage HTML** : c'est sous cette forme que le navigateur reçoit la page Web. Il interprète ensuite le langage HTML pour produire l'affichage obtenu à la question précédente.

    !!! abstract "À savoir"
        Lorsque vous chargez la page web, celle-ci se trouve physiquement enregistrée sous forme de fichier HTML sur un **serveur distant** (un serveur est un ordinateur destiné à interagir avec d'autres ordinateurs, le plus souvent dans le contexte d'un réseau).

        Cette page, une fois reçue par votre navigateur dans l'ordinateur local, appelé **client**, est lue par le navigateur qui interprète le langage HTML et produit l'affichage correspondant.

        ![image40](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mod%C3%A8le-client-serveur.svg/1920px-Mod%C3%A8le-client-serveur.svg.png)

        Il s'agit d'un premier exemple de dialogue **client-serveur**, cette notion sera approfondie dans la suite.

3. Observer le code HTML. Il est composé de **balises**, la plupart de la forme `<balise>...</balise>`. Identifier les balises qui définissent :

    * un titre ;
    * un paragraphe ;
    * du texte en gras (pour montrer l'importance d'un mot ou d'un groupe de mots) ;
    * du texte en italique (pour insister sur un mot ou un groupe de mots) ;
    * une liste à puces ;
    * une liste numérotée.

4. Quelles balises permettent :

    * d'insérer une image ;
    * d'insérer une vidéo.

5. Quel semble être le rôle des balises `<html>`, `<head>` et `<body>` ? 
6. Certaines balises ne semblent servir à rien ! Lesquelles ? Nous verrons plus tard leur utilité éventuelle.

## Partie 2. Modification d'une page HTML simple

1. Ouvrir l'activité Replit correspondant à cette partie : [cliquez ici !](https://replit.com/team/premiere-nsi/TP-1-Partie-2-Modifier-une-page-HTML){target="_blank"}.
2. Vous retrouvez le code HTML de la page Web précédente ainsi que son rendu dans le navigateur intégré à Replit. Modifier la page Web afin qu'elle remplisse les spécifications suivantes :

    * Ajouter une deuxième photo différente de Timothy John Berners-Lee.
    * Ajouter un court paragraphe qui résume la biographie de Timothy John Berners-Lee. Ce paragraphe sera précédé d'un titre de niveau 2. Il contiendra certains mots sur lesquels vous voulez insister et d'autres dont vous montrerez l'importance.
    * Transformer la liste à puce en liste numérotée et vice-versa.
    * Supprimer la vidéo.

3. Une fois toutes ces modifications effectuées, soumettre votre travail dans Replit.

## Partie 3. Création d'une page Web

Utiliser les observations faites au cours de cette activité pour créer une page Web sur le sujet de votre choix.

Cette page devra comporter différentes balises, des images, des listes, etc.

Enregistrer votre travail dans Replit [en suivant ce lien](https://replit.com/team/premiere-nsi/TP-1-Partie-3-Page-HTML) et le soumettre.
