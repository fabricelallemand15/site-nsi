_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

**Fiche d'exercices sur fonctions et la portée des variables**

## :fontawesome-solid-computer: Exercice 1

1. Écrire une **fonction** `prixTTC` qui calcule un prix TVA comprise (au taux de 19,6 %) en fonction du prix hors taxes.
2. Écrire une **procédure** qui écrit à l’écran 50 fois la phrase "Je ne dois pas faire le pitre en classe".

--------------------------------

## :fontawesome-solid-computer: Exercice 2

1. Entrer le programme suivant dans une fenêtre de l’éditeur.

````py
#  definition  d’une  procédure
def ma_proc() :
    phrase = "Il fait beau" 
    print(phrase)

#  programme  principal 
phrase = "Il y a du soleil" 
ma_proc() 
print(phrase)
````
2.  Enregistrer et exécuter ce programme. Expliquer précisément ce qu’il se passe.

----------------------------------

## :fontawesome-solid-computer: Exercice 3

Écrire une procédure `lapin(nom)` qui affiche un lapin tenant une pancarte :

````pycon
|￣￣￣￣￣￣￣￣￣|
| Bonjour       |
| nom !         |       
|_______________|
        ||
(\__/) ||
(•ㅅ•) || 
/ 　 づ"
````

-------------------------------------------------------

## :octicons-pencil-16: :fontawesome-solid-computer: Exercice 4

On considère le programme suivant :

````py
from random import randint

def LancerDeuxDes(): 
    print("Lancer de deux dés ...")
    de1 = randint(1, 6)
    de2 = randint(1, 6)
    total = de1 + de2
    print(f"J'obtiens un total de {total} !")

LancerDeuxDes( )
if total == 2:
    print("C'est un petit score !")
elif total == 12:
    print("J'ai fait mon maximum !")
````

1. **Sans ordinateur** : Essayer de prévoir ce qu'il va se passer à l'exécution de ce programme.
2. Taper ce programme dans une fenêtre de l'éditeur et l'exécuter. Expliquer ce qu'il se passe.
3. Modifier le programme pour qu'il ait le comportement attendu.

-------------------------------------

## :fontawesome-solid-computer: Exercice 5

La procédure suivante affiche une ligne d’étoiles :

````py
def LigneEtoiles(NombreEtoiles) :
    for i in range(NombreEtoiles) :
        print("*", end = "")
    print()
````

Utiliser cette procédure pour écrire une deuxième procédure : `def  TriangleEtoiles(n)` qui affiche un triangle d’étoiles comportant $n$ étoiles sur la première ligne. 

Par exemple, l’appel : `TriangleEtoiles(4)` affichera :

````pycon
****
***
**
*
````

----------------------------------

## :fontawesome-solid-computer: Exercice 6

Le jeu du TicTacToe (morpion) se joue sur une grille de 3x3 cases, numérotées de 1 à 9 (de gauche à droite et de haut en bas).

Les cases sont au départ remplies avec des chiffres (symboles "1" à "9"), qui seront au fur et à mesure du jeu remplacés par le symbole d'un des deux joueurs ("X" ou "O").

Les états des cases sont enregistrés dans 9 variables `c1` à `c9`.

Écrire une procédure `AfficheGrille(c1,c2,c3,c4,c5,c6,c7,c8,c9)` qui prend en paramètres les états des cases `c1` à `c9` et affiche la grille.

Par exemple, l’appel `AfficheGrille(1,2,3,4,5,6,7,8,9)` affichera :

````pycon
----------
 1 | 2 | 3 
----------
 4 | 5 | 6 
----------
 7 | 8 | 9 
----------
````
