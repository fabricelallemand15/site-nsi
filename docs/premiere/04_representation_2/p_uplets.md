## 1 Introduction : Les séquences en Python

Nous connaissons les types de données simples en Python. Ce sont les type ``int`` (nombres entiers), ``float`` (nombres flottants), ``bool`` (booléens). Le type ``str`` est aussi utilisé. Il est un peu moins simple. Un objet de type ``str`` est une chaîne de caractères qui s'écrit entre des guillemets ou des apostrophes. Un caractère est, pour simplifier, ce que l'on obtient par exemple avec les touches d'un clavier. Dans une chaîne, chaque caractère est repéré par un indice qui commence à 0. Avec la chaîne ``ch ="exemple"``, ``ch[0]`` est le caractère "e", ``ch[1]`` est le caractère "x", et ainsi de suite.

Ces types simples ne sont plus suffisants si nous avons besoin de garder en mémoire un grand nombre de valeurs comme dans le cas d'un traitement de données statistiques. Il en est de même si l'on souhaite regrouper des valeurs, par exemple afin d'avoir une variable représentant les coordonnées d'un point.

L'objectif est donc de **construire un type de variable** capable de contenir plusieurs valeurs. Nous pouvons nous inspirer du type ``str`` et utiliser des indices pour repérer les éléments. Ceci amène à la construction des **p-uplets**, type ``tuple``, et des **tableaux**, type ``list``. Comme pour le type ``str``, un objet ``t`` de type ``tuple`` n'est pas modifiable par une affectation ``t[i]=valeur``. Un objet de type ``list`` est lui modifiable par une affectation ce qui autorise de nombreuses méthodes applicables à ces objets mais en contrepartie une grande vigilance sur leur utilisation. Un troisième type est présenté, le type ``dict`` pour les dictionnaires. La principale différence avec les listes est qu'un dictionnaire n'est pas ordonné. Un élément n'est pas repéré par un indice entier mais par une "clé".

##  2. Les p-uplets en Python

!!! info "Définition"
    Un objet de type tuple, un p-uplet, est une suite ordonnée d'éléments qui peuvent être chacun de n'importe quel type. On parlera indifféremment de **p-uplet** ou de **tuple**.

### 2.1 Création d'un p-uplet

Pour créer un p-uplet non vide, on écrit n valeurs séparées par des virgules et placées entre des **parenthèses**. Par exemple :

* ``t = ("a", "b", "c", 3)`` pour un tuple à 4 éléments ;
* ``t = ("a", )``pour un tuple à 1 éléments (attention à la virgule) ;
* ``t = ()`` pour un tuple à 0 éléments (ici, pas de virgule, mais des parenthèses).

On peut aussi, quand il n'y a pas d'ambiguïté, ne pas écrire les parenthèses : ``t = 1, 2, 3, 4``. Mais les parenthèses peuvent améliorer la lisibilité et on les utilisera de préférence.

On dit aussi qu'on **empaquette** les valeurs 1, 2, 3 et 4 dans le quadruplet ``t``.

### 2.2. Opérations

Nous avons deux opérateurs de concaténation qui s'utilisent comme avec les chaînes de caractères, ce sont les opérateurs + et *.

De nouveaux p-uplets sont créés.

````pycon
>>> t1 = ("a", "b")
>>> t2 = ("c", "d")
>>> t1 + t2
('a', 'b', 'c', 'd')
>>> 3 * t1
('a', 'b', 'a', 'b', 'a', 'b')
````

### 2.3. Appartenance

Pour tester l'appartenance d'un élément à un tuple, on utilise l'opérateur ``in`` :

````pycon
>>> t = ("a", "b", "c")
>>> "a" in t
True
>>> "d" in t
False
````

### 2.4. Utilisation des indices

Les indices permettent d'accéder aux différents éléments d'un tuple. Pour accéder à un élément d'indice ``i`` d'un tuple ``t``, la syntaxe est ``t[i]``. L'indice ``i`` peut prendre les valeurs entières de 0 à $n − 1$ où $n$ est la longueur du tuple. Cette longueur s'obtient avec la fonction ``len``. Exemple :

````pycon
>>> t = ("a", 1, "b", 2, "c", 3)
>>> len(t)
6
>>> t[2]
'b'
````

Les indices commencent toujours à 0 et par exemple le troisième élément a pour indice 2. Le dernier élément d'un tuple ``t`` a pour indice ``len(t)-1``. On accède ainsi au dernier élément avec ``t[len(t)-1]`` qui peut s'abréger en ``t[-1]``. Les indices négatifs permettent donc d'accéder aux éléments du tuple "en partant de la fin".

````pycon
>>> t = ("a", 1, "b", 2, "c", 3)
>>> t[-1]
3
>>> t[-2]
'c'
````

Exemple avec des tuples emboîtés (un tuple contenant des tuples) :

````pycon
>>> t = (("a", "b"), ("c", "d"))
>>> t[1][0]
'c'
````

Explication : ``t[1]`` est le tuple ``("c", "d")`` et ``'c'`` est l'élément d'indice 0 de ce tuple.

Rappelons ce qui a été annoncé plus haut : les éléments d'un tuple ne sont pas modifiables par une affectation de la forme ``t[i]=valeur`` qui provoque une erreur et arrête le programme.

### 2.5. Affectation multiple

Prenons pour exemple l'affectation ``a, b, c = 1, 2, 3``. Ceci signifie que le tuple ``(a, b, c)`` prend pour valeur le tuple ``(1, 2, 3)``, autrement dit, les valeurs respectives des variables ``a``, ``b`` et ``c`` sont 1, 2 et 3.

En particulier, l'instruction ``a, b = b, a`` permet d'échanger les valeurs des deux variables ``a`` et ``b``.

Les valeurs des éléments d'un tuple peuvent ainsi être stockées dans des variables.

````pycon
>>> t = (1, 2, 3)
>>> a, b, c = t
>>> b
2
````

Cette syntaxe s'utilise souvent avec une fonction qui renvoie un tuple.

Voici un exemple avec une fonction qui calcule et renvoie les longueurs des trois côtés d'un triangle ABC. La fonction prend en paramètres trois p-uplets représentant les coordonnées des trois points. On importe au préalable la fonction racine carrée ``sqrt`` du module ``math``.

````python linenums="1"
from math import sqrt

def longueurs(A, B, C):
    xA, yA = A
    xB, yB = B
    xC, yC = C
    dAB = sqrt((xB - xA) ** 2 + (yB - yA) ** 2)
    dBC = sqrt((xC - xB) ** 2 + (yC - yB) ** 2)
    dAC = sqrt((xC - xA) ** 2 + (yC - yA) ** 2)
    return dAB, dBC, dAC
````

Dans cette fonction, les variables ``A``, ``B`` et ``C`` sont des 2-uplets représentant les coordonnées des points A, B et C. Aux lignes 4, 5, 6, on **dépaquette** ces 2-uplets pour procéder à une affectation multiple.

La fonction étant définie, nous l'utilisons dans l'interpréteur :

````pycon
>>> M = (3.4, 7.8)
>>> N = (5, 1.6)
>>> P = (-3.8, 4.3)
>>> dMN, dNP, dMP = longueurs(M, N, P)
>>> dMN
6.403124237432848
````

### 2.6. Parcours d'un tuple avec une boucle for

Une boucle ``for`` permet de parcourir chacun des éléments d'un tuple, comme le montre la suite d'instruction suivante, entrée dans la console Python :

````pycon
>>> t = (1,2,3,4)
>>> for k in t: 
        print(k)
1
2
3
4
````

!!! bug "À retenir"
    * Un p-uplet, ou tuple, est une structure ordonnée qui permet de contenir plusieurs éléments qui sont tous accessibles.
    * Un même p-uplet peut contenir des éléments de types différents. Un p-uplet peut contenir d'autres p-uplets.
    * Un p-uplet est **immuable**, c'est-à-dire non modifiable : on ne peut pas procéder à une affectation de la forme ``t[i]=valeur``

**Remarque** : en français, un objet non modifiable élément par élément après sa création est dit **immuable**. En anglais, on dit **immutable**.

!!! note "Remarque : p-uplets nommés"
    Dans le programme, il est fait mention de p-uplets nommés. Ce type de variable est semblable aux p-uplets, avec toutes leurs propriétés, mais les éléments ne sont pas indexés par un entier 0, 1, 2 ..., mais par un descripteur qui peut par exemple être une chaîne de caractères :

    ````pycon
    >>> monsieurX = {"nom": "X", "́prenom": "Monsieur", "age": 47}
    >>> monsieurX["age"]
    47
    ````

    Le type p-uplet nommé n'existe pas en Python (ou alors il faut utiliser une bibliothèque supplémentaire). Nous utiliserons à la place des dictionnaires ([voir le cours sur les dictionnaires](dicos.md)).