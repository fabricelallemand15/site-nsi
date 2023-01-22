_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

**Ce documents regroupe des petites questions rapides pour s'assurer que tout est bien compris**

## :octicons-pencil-16: Exercice 1

Cet exercice est une suite de petites "questions flash". Vous pouvez vérifier vos réponses dans la console Python.

1. Complétez le programme suivant afin que la variable ``a`` ait pour valeur 8 :

```python
mon_tuple = (5, 8, 6, 9)
a = mon_tuple[...]
```

2. Complétez le programme ci-dessous pour qu'après exécution de ce dernier, le tableau ``mon_tab`` soit composé des éléments suivants : ``[15, 8, 6,  9]``

```python
mon_tab = [5, 8, 6, 9]
mon_tab[...] = 15
```

3. Soit le tableau suivant :

```python
tab = [3,3,6,9]
```
Quelle sera la composition de ce tableau si on exécute la ligne suivante :

```python
tab.append(0)
```

4. Donnez  la composition du tableau ``mon_tab``  après l'exécution du programme  ci-dessous :

```python
mon_tab = [1, 2, 3, 4]
del mon_tab[1]
```

5. Quelle  est la valeur de la variable ``a``  après  l'exécution du programme ci-dessus ?

```python
mon_tab = [5, 8, 6, 9, 15,  0]
a = len(mon_tab)
```

6. Quelle est la valeur de la variable ``s`` après  l'exécution du programme  ci-dessus. Vérifiez  votre réponse à l'aide de la console.

```python
tab = [1, 2, 3]
s = 0
for t in tab:
	s = s + t
```

7. Soit le programme suivant :

```python
m = [[1, 3, 4],
     [5, 6, 8],
     [2, 1, 3],
     [7, 8, 15]]
a  = m[0][1]
```
Quelle est la valeur de la variable ``a`` après  l'exécution de ce programme ? Vérifiez  votre réponse à l'aide de la console.


-------------------------------------------------

## :octicons-pencil-16: Exercice 2

```python
tab = [5, 3, 4, 8]
mon_tab = [2*t for t in tab if t > 4]
```

Quelle est la composition du tableau ``mon_tab`` après  l'exécution du programme  ci-dessus. Vérifiez  votre réponse à l'aide de la console.

------------------------------------------------------------

## :octicons-pencil-16: Exercice 3

```python
m = [[1, 3],
     [5, 8],
     [2, 3]]
nb_colonne = 2
nb_ligne = 3
a = 0
for i in range(0, nb_ligne):
	for j in range(0, nb_colonne):
		a = a + m[i][j]
```

Quelle est la valeur de la variable ``a`` après  l'exécution de ce programme ? Vérifiez  votre réponse à l'aide de la console.

--------------------------------------------------------------

## :fontawesome-solid-computer: Exercice 4

Compléter la fonction ci-dessous pour qu'elle réponde à sa spécification.
Tester votre code.

Par exemple, ``recherche_max([4, 3, 0, 5])`` renvoie 5.

```python
def recherche_max(tab: list) -> int:
    """Retourne la plus grande valeur contenue dans le tableau
    tab: tableau d'entiers naturels"""
	maxi = ...
	for t in tab :
		if ... > maxi :
			maxi = ...
	return ...
```

-----------------------------------------------

## :fontawesome-solid-computer: Exercice 5

Compléter la fonction ci-dessous pour qu'elle réponde à sa spécification.
Tester votre code.

````python
def somme(tab: list) -> int:
    """Retourne la somme des éléments du tableau
    tab: tableau d'entiers"""
	s = ...
	for t in ... :
		s = s + ...
	return ...
````

````pycon
>>> somme([3,5,8,4])
20
````

----------------------------------------------------

## :octicons-pencil-16: Exercice 6

````python
d = {"voiture": 25, "vélo": 55, "train": 20}
tr = d['vélo']
````

Quelle est la valeur de la variable ``tr ``après l'exécution du programme ci-dessus. Vérifiez votre réponse à l'aide de la console.

------------------------------------------------------

## :octicons-pencil-16: Exercice 7

1. Quelle est la valeur de la variable ``tab`` après l'exécution de ce programme ?

    ````python
    tab = []
    d = {"voiture": 25, "vélo": 55, "train": 20}
    for t in d.values():
        if t < 40 :
            tab.append(t)
    ````

2. Quelle est la valeur de la variable ``tab`` après l'exécution de ce programme ?

    ````python
    tab = []
    d = {"voiture": 25, "vélo": 55, "train": 20}
    for v,t in d.items():
        if t < 40 :
            tab.append(v)
    ````

----------------------------------------------

## :fontawesome-solid-computer: Exercice 8

On utilise un tableau contenant des dictionnaires afin de stocker les notes des élèves Titi, Toto et Tutu :

````python
[{'nom':'Titi', 'note':12}, {'nom':'Tutu', 'note':11}, {'nom':'Toto', 'note':17}]
````

La fonction ``moyenne`` prend en paramètre un tableau contenant des dictionnaires (comme celui ci-dessus) et renvoie la moyenne des notes.

Écrivez la fonction ``moyenne``.
