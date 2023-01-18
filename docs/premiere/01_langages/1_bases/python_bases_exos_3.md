_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

**Fiche d'exercices sur boucles.**

## Boucles `while`

### :octicons-pencil-16: Exercice 1

On considère le programme suivant :

```py
A = 10
while A < 2000 :
    A = A * 2
    A = A + 3
A = A - 5
```

1. Donner les dix premières valeurs successives prises par la variable A.
2. Vérifier avec l’ordinateur et l’onglet variables ou l'explorateur de variables.
3. Combien a-t-on fait de tours dans la boucle `while` lorsque le programme se termine ?

--------------------------

### :octicons-pencil-16: Exercice 2

On considère le programme suivant :

```py
t = 1
i = 0
while t < 100 :
    t = t + 2 * i
    i = i + 1
```

1. Dresser un tableau d'état faisant apparaître les valeurs successives des variables `t` et `i`.
2. Combien a-t-on fait de tours dans la boucle `while` quand le programme se termine ?

------------------------------------

### :fontawesome-solid-computer: Exercice 3

Une personne verse en 2017 la somme de 500 € sur un compte bancaire.

Cette somme augmente de 3,2% chaque année.

Écrire un programme qui affiche la somme qui se trouve sur le compte chaque année depuis 2017 jusqu’à ce que cette somme dépasse 1 000 €, sous la forme suivante :

````pycon
>>> 
En 2018, le capital sera de 516 €.
En 2019, le capital sera de 512.5120000000001 €.
. . .
En 2040, le capital sera de 1031.8178626526687 €.

````

-----------------------------------------

### :octicons-pencil-16: Exercice 4

On donne ci dessous quatre programmes comportant une boucle `while`. Ces boucles se terminent-elles ou sont-elles des boucles infinies ?

````py
# Programme 1
nombre = 10
while nombre!=27 :
    nombre = nombre+2
````

````py
# Programme 2
i = 0
while i<10 :
    print(i+1)
````

````py
# Programme 3
i = 2
while i<10 :
    i = 0
    i = i+1
````

````py
# Programme 4
i = 0
while i<1000000 :
    i = i+0.001
````

---------------------------------------------------

### :fontawesome-solid-computer: Exercice 5

Écrire un programme qui simule le lancer de trois et qui recommence jusqu’à ce qu’on obtienne un triple 6, et qui affiche le nombre d’essais qui ont été nécessaires pour obtenir ce résultat, de la manière présentée ci-dessous :

````pycon
>>> 
J’obtiens 5 4 2 Perdu !
J’obtiens 6 1 6 Perdu !
. . .
J’obtiens 6 6 6 Gagné en 124 essais !
````

!!! tip "Indication"
    La fonction `randint` de la bibliothèque `random` génère un entier aléatoire compris au sens large entre les deux entiers donnés en argument. Par exemple `random(8,18)` renvoie un entier aléatoire compris au sens large entre 8 et 18. Pour pouvoir être utilisée, cette fonction doit être importée en tapant par exemple `from random import randint` en début de programme.

--------------------------------------------------

### :fontawesome-solid-computer: Exercice 6

Le client d’une banque se présente devant un automate pour consulter son relevé de compte.

Pour y avoir accès, il doit saisir son code personnel qui est composé de 4 chiffres. Il devra ensuite confirmer sa saisie.

Écrire un programme qui demande à l’utilisateur de saisir son code, puis de confirmer sa saisie. Si les deux saisies sont différentes, un message d’erreur sera affiché et il devra recommencer, et si au bout de 10 essais il n’a toujours pas réussi, on lui dira que l’accès est refusé.

## Boucles `for`

### :fontawesome-solid-computer: Exercice 7

Écrire un programme qui affiche 50 fois les phrases suivantes :

````pycon
>>>
Je ne dois pas bavarder 
Ni discuter
Ni chuchoter
Je ne dois pas bavarder 
Ni discuter
Ni chuchoter
. . .
````

------------------------------------------------------------

### :fontawesome-solid-computer: Exercice 8

Écrire un programme qui affiche la phrase "Je rigole !", puis "HaHaHa" 50 fois sur une même ligne :

````pycon
>>>
Je rigole !
HaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa . . .
````

------------------------------

### :fontawesome-solid-computer: Exercice 9

Écrire un programme qui affiche la phrase "Punition d’Albert :", puis 20 fois la phrase "Je ne dois pas oublier ma trousse.", puis 20 fois la phrase "Je ne dois pas oublier mon cahier.", puis la phrase "C’est enfin fini !".

````pycon
>>>
Punition d’Albert :
Je ne dois pas oublier ma trousse. 
Je ne dois pas oublier ma trousse. 
	. . .
Je ne dois pas oublier mon cahier. 
Je ne dois pas oublier mon cahier.
	. . .
C’est enfin fini !
````

-------------------------

### :fontawesome-solid-computer: Exercice 10

_Dans cet exercice, répondre à chaque question en écrivant une programme utilisant une boucle `for`, puis un programme utilisant une boucle `while`._

1. Écrire un programme qui affiche les 20 premiers termes de la table de multiplication par 6.
2. Écrire un programme qui affiche une suite de 12 nombres dont chacun est égal au triple du
précédent.

--------------------------

### :fontawesome-solid-computer: Exercice 11

Écrire un programme qui affiche un « damier » de croix et de ronds de 40 lignes et 40 colonnes (sans utiliser les opérations sur les chaînes de caractères mais en utilisant deux boucles imbriquées) :

````pycon
>>>
xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxo
oxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxox
xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxo
oxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxox
...
````

!!! tip "Indication"
    Pour afficher une chaîne de caractères sans revenir à la ligne, on utilise : `print("toto", end="")`.

----------------------------------------------------

### :fontawesome-solid-computer: Exercice 12

Écrire un programme qui affiche un « rectangle » de croix creux de largeur 20 et hauteur 8 :
(sans utiliser les opérations sur les chaînes de caractères) :

````pycon
>>>
xxxxxxxxxxxxxxxxxxxx
x                  x
x                  x
x                  x
x                  x
x                  x
x                  x
xxxxxxxxxxxxxxxxxxxx
````

---------------------------------------------------------

### :octicons-pencil-16: Exercice 13

On considère le script suivant :

````py
for compteur1 in range(1,5,1):
    print("No")
    for compteur2 in range(1,4,1):
        print("Plouf")
    print("Gloub")
print("Yes")
````

1. Combien de fois affiche-t-il "No" ? Combien de fois affiche-t-il "Plouf" ?
2. Combien de fois affiche-t-il "Gloub" ? Combien de fois affiche-t-il "Yes" ?
