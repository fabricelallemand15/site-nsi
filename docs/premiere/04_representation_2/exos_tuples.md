_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :fontawesome-solid-computer: Exercice 1

La notation française pour les dates est jj/mm/aa, alors que la notation anglaise est aa/mm/jj.

Une date étant composée de trois informations, elle peut être représentée par un tuple, par exemple : ``date = (21,11,18)`` pour le 21 novembre 2018.

1.	Tester le programme ci-dessous et le corriger :

````python
date = (24, 12, 20)
jour, mois = date
if jour == 24 and mois == 12:
    print("C'est Noël demain, les petits !")
````

2.	Écrire un programme qui à partir du tuple ``date = (21,11,18)`` affiche la date selon les deux formats :

* Format français : 21/11/18
* Format anglais : 18/11/21

--------------------------------------------------------------------------

## :octicons-pencil-16: Exercice 2

Un point $A$ de coordonnées $A(2 ; 7)$ peut être représenté par un tuple :  ``A = (2,7)``.

L'abscisse et l'ordonnée d'un point $A$ sont en général notées $x_A$ et $y_A$.

On considère la fonction :

````python
def milieu(A, B):
    xA, yA = A
    xB, yB = B
    xM = (xA + xB) / 2
    yM = (yA + yB) / 2
    return xM, yM
````

1. Parmi les appels suivants, quel est celui qui correct ?

    a. ``milieu((2, 3, 4, 9))``
    b. ``milieu(2, 3, 4, 9)``
    c. ``milieu((2, 3), (4, 9))``
    d. ``milieu((2 ; 3), (4 ; 9))``

2. Quelle est la valeur retournée par l'appel suivant  : ``milieu((2,3),(4,9))`` ?
3. On utilise cette fonction dans le programme suivant :

    ````python
    C = (2, 3)
    D = (4, 9)
    xE = milieu(C, D)
    print("Le milieu a pour abscisse :", xE)
    ````

    Corriger ce programme pour qu'il fonctionne.

----------------------------------------------------------

## :fontawesome-solid-computer: Exercice 3

**Cet exercice doit être fait après avoir étudié le tableaux.**

Voici un tableau qui répertorie des informations sur les adhérents d'un site internet :

|Nom	|Sexe	|Avatar	|Age	|Année d'adhésion	|Mot de passe|
|:---|:---|:---|:---|:---|:---|
|BERNARD|	F|	Bebert|	19|	2019|	Bibi2019*|
|BONNET|	M|	Bonbon|	22|	2017|	45trd ;*%GR|
|DUBET|	M|	Bud	|17	|2018|	Bud17|
|DURAND|	M|	Rantanplan|	15|	2018|	OuahOuah|
|FOURNIER|	F|	Fifou|	21|	2016|	12051995|
|MARTIN|	M|	Tinmar|	23|	2017|	Titidu15|

On peut le représenter par **un tableau de tuples** (un tuple pour chaque adhérent) :

````python

ListeAdherents = [("BERNARD", "F", "Bebert", 19, 2019, "Bibi2019*"), ("BONNET", "M", "Bonbon", 22, 2017, "45trd ;*%GR"),
                  ("DUBET", "M", "Bud", 17, 2018, "Bud17"), ("DURAND", "M", "Rantanplan", 15, 2018, "OuahOuah"),
                  ("FOURNIER", "F", "Fifou", 21, 2016, "12051995"), ("MARTIN", "M", "Tinmar", 23, 2017, "Titidu15")]

````

1.	Sans utiliser l'ordinateur, prévoir ce qui est affiché par les instructions suivantes :

    * ``print(ListeAdherents[1])``
    * ``print(ListeAdherents[1,2])``
    * ``print(ListeAdherents[1][2])``
    * ``print(ListeAdherents[2][1])``
    * ``print(ListeAdherents[4][5])``

2.	Écrire une fonction qui prend en paramètre le dictionnaire ``ListeAdherents``, qui affiche la liste des avatars de tous les adhérents, et qui renvoie l'âge moyen de tous les adhérents (utiliser une boucle for).
