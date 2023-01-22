!!! danger "Tableaux et listes"

    Dans ce cours, conformément au programme, nous allons employer le terme "tableau". Ce termer désigne une structure de données abstraite en informatique. Dans le langage Python, on utilise des objets du type ``list`` pour cette structure. Cependant, les objets de type ``list`` en Python sont bien plus que des tableaux au sens du cours. Pour éviter toute confusion, notamment par rapport à d'autres structures de données qui seront abordées en terminale, nous nous efforcerons d'employer "tableau" à la place de "liste".

!!! info "Définition"
    Un tableau est une suite ordonnée d'éléments qui sont **tous du même type**.

## 1. Création d'un tableau

Pour créer un tableau en Python, nous utilisons un objet de type ``list``. Un tel objet ressemble à un p-uplet : un ensemble ordonné d'éléments avec des indices pour les repérer. Les éléments d'un tableau sont séparés par des virgules et **entourés de crochets**.

````pycon
>>> tab1 = ["a", "b", "c"] # un tableau à 3 éléments
>>> tab2 = [1] # un tableau contenant un seul élément
>>> tab3 = [[1, 2], [3, 4]] # un tableau de tableaux
>>> tab_vide = [] # un tableau vide
````

Pour créer rapidement un tableau d'entiers, nous pouvons utiliser les fonctions ``list`` et ``range``.

````pycon
>>> tab = list(range(2, 10, 3)) # [2, 5, 8]
````

Pour ajouter les éléments un par un en fin de tableau, nous pouvons utiliser la méthode ``append`` :

````python
multiples_de_3 = [0, 3]
multiples_de_3.append(6) # [0, 3, 6]
````

## 2. Construction par compréhension

Il est aussi possible de créer un tableau **par compréhension**. Il s'agit de décrire les éléments du tableaux par une boucle, des conditions, ...

L'instruction de base s'écrit sous la forme ``[expression(i) for i in objet]``. Ce type de construction est très spécifique au langage Python. En voici deux exemples :

````python
multiples_de_3 = [3 * i for i in range(100)]
multiples_de_6 = [2 * n for n in multiples_de_3]
````

Si on dispose d'une fonction ``f`` et d'un tableau d'abscisses ``x`` :

````python
images = [f(x) for x in abscisses]
````

On peut aussi ajouter des conditions. Par exemple l'instruction ci-dessous est une autre façon de définir le tableau des multiples de 3 :

````python
multiples_de_3 = [n for n in range(301) if n % 3 == 0]
````

## 3. Utilisation des tableaux

La fonction ``len`` renvoie la longueur d'un tableau, le nombre d'éléments du tableau.

On accède aux différents éléments d'un tableau avec les indices comme pour les p-uplets. Dans le cas d'un tableau de tableaux, on utilise des doubles crochets : ``tab[1][0]``.

````pycon
>>> tab = ["a", "b", "c"]
>>> tab[1]
'b'
>>> tab = [["a", "b"], ["c", "d"]]
>>> tab[1][0]
'c'
````

À la différence des tuples, un tableau est un objet **modifiable** (on dit **mutable** en anglais). On peut donc réaffecter un élément d'un tableau déjà créé.

````pycon
>>> tab = [1, 2, 3, 4]
>>> tab[0] = 17
>>> tab
[17, 2, 3, 4]
````

## 4. Opérations sur les tableaux

Le type d'une variable définit les valeurs qui peuvent être affectées à cette variable ainsi que les opérateurs et les fonctions utilisables. Les fonctions propres à un type donné sont appelées des **méthodes**. La fonction ``len`` par exemple, s'applique aux chaînes de caractères, aux p-uplets, aux tableaux. La méthode ``append``, présentée plus haut, est par contre propre aux tableaux.

**Attention à la syntaxe** : on écrit ``len(tab)``, mais ``tab.append(...)``. Le nom de la variable est suivi d'un point puis du nom de la méthode. Cette notation est issue de la **programmation orientée objets** qui sera abordée en terminale.

Voici quelques méthodes pour le tableaux :

````pycon
>>> tab = ["a", "b", "c"]
>>> tab.insert(1, "d") # insertion à l'indice 1 de l'élément "d"
>>> tab
['a', 'd', 'b', 'c']
>>> tab.remove("b") # suppression de la première occurrence de l'élément "b"
>>> tab
['a', 'd', 'c']
>>> x = tab.pop() # supprime et retourne le dernier élément
>>> x
'c'
>>> tab
['a', 'd']
>>> tab.reverse() # renverse l'ordre des éléments
>>> tab
['d', 'a']
>>> tab.sort() # trie les éléments dans l'ordre croissant ou alphabétique
>>> tab
['a', 'd']
````

Toutes ces méthodes modifient la liste initiale contrairement aux opérateurs de concaténation + et * avec lesquels une nouvelle liste est créée. Ces deux opérateurs s'utilisent comme avec les p-uplets.

Notons qu'il est aussi possible de trier une liste sans la modifier avec la fonction sorted qui crée une nouvelle liste.

````pycon
>>> tab = [5, 2, 7, 4]
>>> tri = sorted(tab)
>>> tab
[5, 2, 7, 4]
>>> tri
[2, 4, 5, 7]
````

## 5. Copie d'un tableau

Un tableau peut donc être modifié par une méthode. On peut aussi modifier l'un de ses éléments par affectation.

````pycon
>>> tab = ["a", "b", "c"]
>>> tab[1] = "d"
>>> tab
["a", "d", "c"]
````

Ceci oblige à une grande attention en particulier dans la création de copie de tableau. Observons le code suivant :

````pycon
>>> tab1 = ["a", "b", "c"]
>>> tab2 = tab1
>>> tab1[1] = "d"
>>> tab2
["a", "d", "c"]
````

Dans cet exemple, un même tableau a deux noms et ``tab2`` n'est pas une copie de ``tab1`` : il s'agit juste d'une nouvelle étiquette qui pointe vers le même contenu de la mémoire.

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=tab1%20%3D%20%5B%22a%22,%20%22b%22,%20%22c%22%5D%0Atab2%20%3D%20tab1%0Atab1%5B1%5D%20%3D%20%22d%22&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=3&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Pour obtenir une vraie copie, il faut créer un nouveau tableau.

Pour effectuer une vraie copie d'une liste simple, on peut entrer : 

````pycon
>>> tab2 = list(tab1)
````

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=tab1%20%3D%20%5B%22a%22,%20%22b%22,%20%22c%22%5D%0Atab2%20%3D%20list%28tab1%29%0Atab1%5B1%5D%20%3D%20%22d%22&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=3&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Pour des tableaux de tableaux, cependant, cette copie simple ne suffira pas car les éléments du tableau, qui sont eux-mêmes des tableaux, ne seront pas vraiment copiés. Pour y parvenir, si nécessaire, on utilise la fonction ``deepcopy`` de la bibliothèque ``copy``.

````pycon
>>> from copy import deepcopy
>>> tab1 = [["a", "b"], ["c", "d"]]
>>> tab2 = deepcopy(liste1)
>>> tab2[1][0] = "e"
>>> tab2
[["a", "b"], ["e", "d"]]
>>> tab1
[["a", "b"], ["c", "d"]
````

## 6. Parcours d'un tableau avec une boucle for

Une boucle ``for`` permet de parcourir chacun des éléments d'un tableau. On peut soit boucler sur les indices des éléments du tableau, soit sur les éléments eux-mêmes.

````pycon
>>> t = [1,2,3,4]
>>> for k in t:  # boucle sur les éléments
        print(k)
1
2
3
4
>>> for i in range(len(t)): # boucle sur les indices
        print(t[i])
1
2
3
4
````

!!! bug "À retenir"
    * Un **tableau** une structure ordonnée qui permet de contenir plusieurs éléments qui sont tous accessibles.
    * Tous les éléments d'un tableau sont du même type. Un tableau peut contenir d'autres tableaux.
    * Un tableau est **modifiable** : on peut procéder à une affectation de la forme ``t[i]=valeur``

## 7. Remarques sur les tableaux de tableaux

Voici un exemple de tableau de tableaux :

```python
m = [[1, 3, 4], [5 ,6 ,8], [2, 1, 3], [7, 8, 15]]
```

Le premier élément du tableau ci-dessus est bien un tableau (``[1, 3, 4]``), le deuxième élément est aussi un tableau (``[5, 6, 8]``)...

Il est souvent plus pratique de présenter ces "tableaux de tableaux" comme ci-dessous :

```python
m = [[1, 3, 4],
     [5, 6, 8],
     [2, 1, 3],
     [7, 8, 15]]
```

Nous obtenons ainsi quelque chose qui ressemble beaucoup à un "objet mathématique" très utilisé : **une matrice**, tableau de nombres composé de lignes et de colonnes.

L'instruction ``m[1]`` retourne le deuxième élément du tableau ``m``, c'est-à-dire le tableau ``[5, 6, 8]``.

Pour accéder au troisième élément de ce dernier tableau, il faut donc entrer l'instruction ``m[1][2]`` qui va renvoyer 8.

On accède donc aux éléments du tableau de nombres en indexant ``m`` avec le numéro de la ligne puis le numéro de la colonne (comptés à partir de zéro).

Il est possible de parcourir l'ensemble des éléments d'une matrice à l'aide d'une "double boucle for" :

```python
m = [[1, 3, 4],
     [5, 6, 8],
     [2, 1, 3],
     [7, 8, 15]]
nb_colonne = 3
nb_ligne = 4
for i in range(0, nb_ligne):
	for j in range(0, nb_colonne):
		a = m[i][j]
		print(a)
```
L'exécution de ce programme donnera le résultat suivant :

``` title="Sortie"
1
3
4
5
6
8
2
1
3
7
8
15
```
Nous avons bien parcouru l'ensemble des éléments du tableau ``m``.

Cette double boucle ``for`` est une structure complexe, mais pourtant assez répandue. N'hésitez pas à consacrer quelques minutes à son analyse.

Ce type de tableau à deux dimensions est utilisé pour coder les images sous forme d'**images matricielles**. Les curieux peuvent en apprendre plus à ce sujet en étudiant [la vidéo suivante proposée sur Lumni](http://www.lumni.fr/video/notion-de-listes-en-informatique-et-application-aux-images-numeriques){ target=_blank } (dans laquelle le narrateur dit "liste" au lieu de "tableau").