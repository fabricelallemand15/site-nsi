_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :octicons-pencil-16: Exercice 1

Donner les valeurs des tableaux T1, T2, T3, T4, T5, T6 suivants écrits en compréhension :

````python
T1 = [3 * i for i in range(10)]
T2 = ['A' for i in range(7)]
T3 = [randint(1, 6) for k in range(10)]
T4 = [10 ** i for i in range(5)]
T5 = [x * x for x in T4]
Liste = [-5, 2, 3, -7, 42, 7]
T6 = [elt for elt in Liste if elt > 0]
````

-----------------------------------------------------

## :fontawesome-solid-computer: Exercice 2

Chercher la différence entre les deux commandes python suivantes :

````python
T1 = [[0] * 5 for i in range(3)]
T2 = [[0] * 5] * 3
````

On pourra observer les résultats de l'affectation de ``tableau[0][1]=7`` pour les deux tableaux.

----------------------------------------------------------------------------

## :fontawesome-solid-computer: Exercice 3

1.	Créer un tableau en compréhension contenant toutes les lettres majuscules de l'alphabet.
2.	Créer en compréhension le tableau suivant : ``[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]``
3.	Créer en compréhension en utilisant le tableau précédent : ``[10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 2]``
4.	Créer en compréhension le tableau donnant les 6 premiers multiples de 16.
5.	Créer en compréhension le tableau : [1, 0.5, 0.25, 0.125, ..., $2^{-6}$].

-----------------------------------------------------------

## :octicons-pencil-16: Exercice 4

Le tableau suivant est le relevé de notes d'un élève par matières :

|Mathématiques|	16|	18|	14|	17|	20|
|:---|:---|:---|:---|:---|:---|
|Algorithmique|	11|	15|	13	|10|	14|
|Programmation|	12|	8	|13|	7|	16|

On le représente par le tableau suivant :

````python
Notes = [[16, 18, 14, 17, 20],
         [11, 15, 13, 10, 14],
         [12, 8, 13, 7, 16]]
```` 

Quelles valeurs vont être affichées en console ?

````pycon
>>> Notes[2][2]
>>> Notes[0][2]
>>> Notes[0]
````

--------------------------------------------------

## :octicons-pencil-16: Exercice 5

Quelles sont les valeurs contenues dans le tableau T à la suite de cette série d'instructions ?

````python
T = [[9, 20, 13, 4],
     [17, 15, 3, 7],
     [8, 6, 10, 21]]
T[2][1] = 22
T[1][2] = 27
T[0][3] = T[0][3] + 8
T[1][3] = T[2][0] + 5
````

--------------------------------------

## :fontawesome-solid-computer: Exercice 6

La matrice suivant donne les notes d'un élève dans différentes matières. 

````python
NotesEleve = [[16, 7, 5, 8, 10],
              [11, 3, 4, 12, 7],
              [1, 9, 13, 2, 5]]
````

1.	Écrire une fonction qui remplace chaque note de la matrice inférieure à 10 par un 10.
2.	Écrire une fonction ``remplace(Tab)`` qui prend en paramètre une matrice (tableau de tableaux) contenant des nombres et qui renvoie une matrice dans laquelle les nombres inférieurs à 10 sont remplacés par 10 (il faudra créer dans la fonction une autre matrice qui sera renvoyée car il est bien utile de conserver la première en l'état !).

-------------------------------------------

## :octicons-pencil-16: QCM

1. On définit : ``L = [1, 2, 3, 4, 5, 6]``. Quelle est la valeur de ``L[3]`` ?

    * [ ] ``[1, 2, 3]``
    * [ ] ``3``
    * [ ] ``4``
    * [ ] ``[4, 5, 6]``

2. On définit : ``T = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]``

    Laquelle des expressions suivantes a pour valeur 7 ?

    * [ ] ``T[3, 1]``
    * [ ] ``T[3][1]``
    * [ ] ``T[2, 0]``
    * [ ] ``T[2][0]``

3. Quelle est l'expression qui a pour valeur le tableau ``[1, 4, 9, 16, 25, 36]`` ?

    * [ ] ``[n*n  for n in range(0, 6)]``
    * [ ] ``[n*n  for n in range(6)]``
    * [ ] ``[n*n  for n in range(1, 7)]``
    * [ ] ``[n*n  for n in range(1, 6)]``

4. Si la variable note est définie par  ``note = ["do", "ré", "mi", "fa", "sol", "la", "si"]`` alors :

    * [ ] l'index de "sol" est 5
    * [ ] l'index de note est 0
    * [ ] l'index de "si" est 7
    * [ ] l'index de "mi" est 2

5. On définit une grille G remplie de 0, sous la forme d'un tableau de tableaux, où tous les sous-tableaux ont le même nombre d'éléments.

    ````python
    G = [[0, 0, 0, ..., 0],
        [0, 0, 0, ..., 0],
        [0, 0, 0, ..., 0],
        ...
        [0, 0, 0, ..., 0]]
    ````

    On appelle hauteur de la grille le nombre de sous-tableaux contenus dans G et largeur de la grille le nombre d'éléments dans chacune de ces sous-tableaux. Comment peut-on les obtenir ?

    * [ ] ``hauteur = len(G[0])`` et ``largeur = len(G)``
    * [ ] ``hauteur = len(G)`` et ``largeur = len(G[0])``
    * [ ] ``hauteur = len(G[0])`` et ``largeur = len(G[1])``
    * [ ] ``hauteur = len(G[1])`` et ``largeur = len(G[0])``

6. Quelle est la valeur de l'expression ``[2 * k + 1 for k in range(4)]`` ?

    * [ ] ``[1, 3, 5, 7]``
    * [ ] ``[0, 1, 2, 3]``
    * [ ] ``[3, 5, 7, 9]``
    * [ ] ``[1, 2, 3, 4]``

7. De quelle expression le tableau suivante est-il la valeur : ``[[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2]]`` ?

    * [ ] ``[[i] * 4 for i in range(4)]``
    * [ ] ``[[i] * 3 for i in range(4)]``
    * [ ] ``[[i] * 4 for i in range(3)]``
    * [ ] ``[[i] * 3 for i in range(3)]``

8. Quelle est la valeur de l'expression : ``[(a, b) for a in range(3) for b in range(3) if a > b]`` ?

    * [ ] ``[(a, b), (a, b), (a, b), (a, b), (a, b), (a, b), (a, b), (a, b), (a, b)]``
    * [ ] ``[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]``
    * [ ] ``[(1, 0), (2, 0), (2, 1)]``
    * [ ] ``[(0 ,0), (0 ,1), (0, 2), (1, 0), (1, 1), (1, 2), (1, 0), (1, 1), (1, 2)]``
