_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :octicons-pencil-16: Exercice 1

1. Construire la table de vérité de l'expression : a OU (NON b)
2. Construire la table de vérité de l'expression : NON a ET (b OU c)
3. Construire la table de vérité de l'expression : (a ET NON b) OU (NON a ET b)
4. Construire la table de vérité de l'expression : (a OU b) ET (a OU c)

--------------------------------------

## :octicons-pencil-16: Exercice 2

Donner la valeur des expressions booléennes suivantes :

````pycon
>>> (1 > 2) and (3 < 5)
>>> ((4 - 7) >= 2) or (2 != 1 + 1)
>>> a = 223
>>> b = 455
>>> a != (b // 2)
````

------------------------------------------

## :octicons-pencil-16: Exercice 3

On considère la table de vérité de l'expression booléenne Z ci-dessous :

|x |	Z(x)|
| :--: | :--: |
|0 |	0|
|1 | 	0|

Exprimer Z à l'aide des fonctions booléennes ET, OU, NON.

-------------------------------------

## :octicons-pencil-16: Exercice 4

On considère la table de vérité de l'expression U ci-dessous :

|x |	U(x)|
| :--: | :--: |
|0| 	1|
|1| 	1|

Exprimer U à l'aide des fonctions booléennes ET, OU, NON.

---------------------------------------------

## :octicons-pencil-16: Exercice 5

On considère l'extrait de code suivant :

````python
while (a < 20) or (b > 50):
	......
	......
````

Quelles conditions permettent de mettre fin à cette boucle ?

* [ ] la boucle prend fin lorsque $a < 20$ ou $b > 50$
* [ ] la boucle prend fin lorsque $a < 20$ et $b > 50$
* [ ] la boucle prend fin lorsque $a \geqslant 20$ ou $b \leqslant 50$
* [ ] la boucle prend fin lorsque $a \geqslant 20$ et $b \leqslant 50$

----------------------------------------

## :octicons-pencil-16: Exercice 6

Si A et B sont des variables booléennes, laquelle de ces expressions booléennes est équivalente à (not A) or B ?

* [ ] (A and B) or (not A and B)
* [ ] (A and B) or (not A and B) or (not A and not B)
* [ ] (not A and B) or (not A and not B)
* [ ] (A and B) or (not A and not B)

-------------------------------------------------

## :octicons-pencil-16: Exercice 7

Quelle table de vérité correspond à l'expression (NON(A) OU B) ?

_Remarque : dans les tables proposées, la première colonne donne les valeurs de A, la première ligne les valeurs de B._

* [ ] Table 1 :

    |A\B |0	|1|
    |--|--|--|
    |0|	0|1|
    |1|	1|	1|

* [ ] Table 2 :

    |A\B	|0|	1|
    |--|--|--|
    |0|	1|	1|
    |1|	0|	0|

* [ ] Table 3 :

    |A\B	|0	|1|
    |--|--|--|
    |0	|1	|1|
    |1	|0	|1|

* [ ] Table 4 :

    |A\B|	0|	1|
    |--|--|--|
    |0|	1|	0|
    |1|	1|	0|

-----------------------------------

## :octicons-pencil-16: Exercice 8

Parmi les quatre expressions suivantes, laquelle s'évalue en `#!python True` ?

* [ ] `#!python False and (True and False)`
* [ ] `#!python False or (True and False)`
* [ ] `#!python True and (True and False)`
* [ ] `#!python True or (True and False)`

----------------------------------------------------

## :octicons-pencil-16: Exercice 9

À quelle affectation sont équivalentes les instructions suivantes, où ``a``, ``b`` sont des variables entières et ``c`` une variable booléenne ?

````python
if a==b:
	c = True
elif a > b+10:
	c = True
else:
	c = False
````

* [ ] `#!python c = (a==b) or (a > b+10)`
* [ ] `#!python c = (a==b) and (a > b+10)`
* [ ] `#!python c = not(a==b)`
* [ ] `#!python c = not(a > b+10)`
