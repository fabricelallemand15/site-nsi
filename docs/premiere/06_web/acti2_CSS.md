---
title: "Activité 2 : Le couple HTML/CSS"
niveau: Première NSI
année: 2022-2023
---

!!! danger "Objectifs de cette activité"
    À l'issue de cette activité, vous saurez :

    * comment est codée la mise en page et le style d'une page Web ;
    * reconnaître quelques exemples d'instructions CSS ;
    * créer une feuille de style et l'appliquer à une page HTML.
[//]: ()

Pour cette activité, on utilisera de préférence le navigateur Firefox.

!!! info
    CSS signifie **Cascading Style Sheet** (feuilles de style en cascade). CSS est le langage utilisé pour coder le style des pages Web (couleurs, taille des caractères, alignements, etc.). CSS, tout comme HTML, n'est pas un langage de programmation.

## Partie 1. Observation d'une page Web stylée

1. Ouvrir dans un nouvel onglet la page suivante : [Tim_Berners_css.html](Tim_Berners_css.html){target="_blank"}. La page qui s'affiche est à peu près la même que celle que vous avez analysée dans l'activité 1, mais avec une application de différents styles.
2. Faire un clic droit dans la page et cliquer sur "Code source de la page" pour faire apparaître la page HTML source. Quels sont les principaux changements ?
3. Dans la balise `<head>` de la page se trouve un lien vers la **feuille de style CSS** de la page. Ouvrir cette feuille dans un nouvel onglet et observer le code CSS définissant le style de la page Web.
4. Décrire en quelques mots la syntaxe CSS et en relever les règles de base.
5. Rechercher, en comparant les fichiers CSS et HTML, le rôle des instructions `.en_couleur` et `#titres` et où elles s'appliquent.

## Partie 2. Modification du fichier CSS

1. Ouvrir l'activité [Replit correspondant à cette partie](https://replit.com/team/premiere-nsi/TP-2-Partie-2-Modifier-le-CSS).
2. Vous trouverez la page Web et sa feuille de style. Modifier la feuille de style (et si nécessaire la page Web) :

    * Changer les couleurs d'arrière-plan ;
    * Changer la couleur du texte de tout le contenu de la section qui a pour **identifiant** "introduction" ;
    * Changer la taille du texte de tous les éléments qui possèdent la classe "en_couleur" ;
    * Supprimer l'indentation des paragraphes ;
    * Changer les puces de la liste : vous utiliserez pour cela l'attribut `list-style-type: square;` ;
    * Dans la liste numérotée, changer les numéros en chiffres romains majuscules : vous utiliserez pour cela l'attribut `list-style-type: upper-roman;`.

    Une fois toutes ces modifications faites, soumettre votre travail.

## Partie 3. Création d'un fichier CSS

Dans cette partie, vous allez reprendre la page Web créée lors de l'activité sur le langage HTML et créer une feuille de style afin de la mettre en forme. Quand vous serez satisfait du résultat, soumettre votre travail dans le [Replit prévu à cet effet](https://replit.com/team/premiere-nsi/TP-2-Partie-3-Creer-un-fichier-CSS).