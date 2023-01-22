Tout comme les p-uplets et les tableaux, les dictionnaires sont un type construit de données pouvant contenir plusieurs éléments. Mais à la différence des deux autres structures étudiées, les éléments contenus dans un dictionnaire ne sont pas **ordonnés** et ils ne sont pas indexés par un entier, mais par une **clé** qui peut être de différents types.

## 1. Définition et création d'un dictionnaire

!!! info "Définition"
    Un dictionnaire est une collection de paires de la forme ``clé:valeur``.

    En Python, ils sont implémentés par le type ``dict`` et sont délimités par des accolades.

On peut définir un dictionnaire de différentes façons :

* en écrivant les couples les uns à la suite des autres, séparés par des virgules, le tout entre accolades.

    ````pycon
    >>> capitales = {"France":"Paris", "Allemagne":"Berlin", "Italie":"Rome", "Espagne":"Madrid", "Suisse":"Berne",
                     "Luxembourg":"Luxembourg", "Belgique":"Bruxelles", "Pays-Bas":"Amsterdam", "Royaume-Uni":"Londres"}
    >>> type(capitales)
    <class 'dict'>  
    ````

* en compréhension, comme avec les tableaux.

    ````pycon
    >>> d = {chr(65+i): i for i in range(26)}
    >>> d
    {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25}
    ````

* élément par élément après avoir défini un dictionnaire vide.

    ````pycon
    >>> superficie = {}
    >>> superficie["France"] = 543940
    >>> superficie["Allemagne"] = 357588
    >>> superficie["Espagne"] = 505992
    >>> superficie
    {'France': 543940, 'Allemagne': 357588, 'Espagne': 505992}
    ````

!!! warning "Attention !"
    Les clés et les valeurs peuvent être de différents types, mais avec des restrictions concernant les clés. Celles-ci ne peuvent prendre que des types **immuables**, c'est-à-dire non modifiables. Un tableau ne pourra par exemple pas servir de clé. Par contre, un tuple le peut s'il ne contient que des éléments eux-mêmes immuables.

    On utilisera comme clés des éléments du type : ``str``, ``int``, ``float``, ``tuple``.

    Un dictionnaire est un objet variable, il ne peut donc pas servir de clé.

    Les valeurs, par contre, peuvent être de n'importe quel type, y compris des dictionnaires. Dans un même dictionnaire, les différentes clés peuvent être de types différents et les différentes valeurs également.

    Une clé donnée ne peut apparaître qu'une fois dans un dictionnaire. Si une clé existante est à nouveau spécifiée, la nouvelle valeur écrase la précédente.

    Par contre, une même valeur peut apparaître plusieurs fois, associée à des clés différentes.

## 2. Manipulation des dictionnaires

### Accès aux éléments

On accède à une **valeur** en utilisant sa **clé** comme indice :

````pycon
>>> capitales["Espagne"]
'Madrid'
````

L'utilisation d'une clé inexistante renvoie une erreur. Pour éviter cela, on peut aussi utiliser la méthode ``get()`` qui va renvoyer ``None`` si la clé n'existe pas.

````pycon
>>> capitales["Autriche"]
Traceback (most recent call last):
  File "C:\Users\fabri\AppData\Local\Programs\Python\Python310\lib\code.py", line 90, in runcode
    exec(code, self.locals)
  File "<input>", line 1, in <module>
KeyError: 'Autriche'
>>> capitales.get("Autriche")
>>> print(capitales.get("Autriche"))
None
````

Les **méthodes** ``keys()``, ``values()`` et ``items()`` permettent respectivement d'accéder à la liste des clés, à la liste des valeurs et à la liste des couples (clés, valeurs).

````pycon
>>> capitales.keys()
dict_keys(['France', 'Allemagne', 'Italie', 'Espagne', 'Suisse', 'Luxembourg', 'Belgique', 'Pays-Bas', 'Royaume-Uni'])
>>> capitales.values()
dict_values(['Paris', 'Berlin', 'Rome', 'Madrid', 'Berne', 'Luxembourg', 'Bruxelles', 'Amsterdam', 'Londres'])
>>> capitales.items()
dict_items([('France', 'Paris'), ('Allemagne', 'Berlin'), ('Italie', 'Rome'), ('Espagne', 'Madrid'), ('Suisse', 'Berne'), ('Luxembourg', 'Luxembourg'), ('Belgique', 'Bruxelles'), ('Pays-Bas', 'Amsterdam'), ('Royaume-Uni', 'Londres')])
````

On peut tester l'appartenance à un dictionnaire avec le mot clé ``in`` : 

````pycon
>>> "Uruguay" in capitales.keys()
False
>>> "Berlin" in capitales.values()
True
````

### Autres opérations

!!! bug "Remarque"
    * Comme dit plus haut, les dictionnaires sont des structures **modifiables** : on peut changer la valeur associée à une clé donnée dans un programme.
    * Par contre, on ne peut pas modifier une clé.

L'instruction ``del`` permet de supprimer une valeur désignée par sa clé.

````pycon
>>> superficie
{'France': 543940, 'Allemagne': 357588, 'Espagne': 505992}
>>> del superficie["France"]
>>> superficie
{'Allemagne': 357588, 'Espagne': 505992}
````

La fonction ``len`` renvoie le nombre de valeurs contenues dans le dictionnaire.

````pycon
>>> len(capitales)
9
````

Copie d'un dictionnaire : Les comportements sont similaires à ceux rencontrés avec les tableaux en particulier si les valeurs sont des tableaux. Il est donc conseillé d'utiliser la fonction ``deepcopy`` du module ``copy`` pour être certain d'obtenir une "vraie" copie.

## 3. Itérer sur les éléments d'un dictionnaire

On peut parcourir un dictionnaire à partir de ses clés :

````pycon
>>> superficie = {}
>>> superficie["France"] = 543940
>>> superficie["Allemagne"] = 357588
>>> superficie["Espagne"] = 505992
>>> for pays in superficie.keys():
        print(pays)
    
France
Allemagne
Espagne
````

On peut parcourir un dictionnaire à partir de ses valeurs :

````pycon
>>> for valeur in superficie.values():
        print(valeur)
    
543940
357588
505992
````

On peut parcourir un dictionnaire à partir des couples (clé, valeur) :

````pycon
>>> for pays, valeur in superficie.items():
        print(f"La superficie du pays {pays} est de {valeur} km²")
    
La superficie du pays France est de 543940 km²
La superficie du pays Allemagne est de 357588 km²
La superficie du pays Espagne est de 505992 km²
````

!!! bug "Remarque importante"
    Un gros avantage des dictionnaires est que leur implémentation optimise la recherche d'un élément. Il est beaucoup plus rapide de recherche une valeur dans un dictionnaire que dans un tableau, surtout si ceux-ci contiennent un grand nombre d'éléments. La raison de cette différence sera évoquée en terminale.

Pour les curieux, [la vidéo proposée par Lumni en lien ici](http://www.lumni.fr/video/les-dictionnaires){ target=_blank } permet d'approfondir la notion de dictionnaire.