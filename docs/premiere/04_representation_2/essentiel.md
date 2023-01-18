# S4-Représentation de données - Types construits

Les trois structures de données présentées dans ce chapitre permettent de regrouper des valeurs dans une seule structure.

# 1. p-uplets

Les p_uplets sont :

* délimités par des parenthèses ;
* ordonnés : chaque élément est associé à son indice entier (on commence par zéro) ;
* immuables : ils ne peuvent être modifiés après avoir été créés ;
* composés d'éléments qui ne sont pas obligatoirement tous du même type ;
* implémentés par le type ``tuple`` en Python.

# 2. Tableaux

Les tableaux sont :

* délimités par des crochets ;
* ordonnés : chaque élément est associé à son indice entier (on commence par zéro) ;
* variables : leurs éléments peuvent être modifiés au cours d'un programme. Pour palier à d'éventuelles surprises, on utilise la fonction ``deepcopy`` du module ``copy`` pour créer une copie d'un tableau complètement indépendante de l'original ;
* composés d'éléments qui sont tous du même type ;
* implémentés par le type ``list`` en Python.

# 3. Dictionnaires

Les dictionnaires sont :

* délimités par des accolades ;
* non ordonnées : les couples (clé, valeur) ne sont pas ordonnés a priori ;
* variables : leurs éléments peuvent être modifiés au cours d'un programme. Pour palier à d'éventuelles surprises, on utilise la fonction ``deepcopy`` du module ``copy`` pour créer une copie d'un dictionnaire complètement indépendante de l'original ;
* composés de valeurs et de clés qui ne sont pas forcément du même type. Cependant, les clefs doivent toujours être dans un type immuable (``int``, ``float``, ``str``, ``tuple``) ;
* implémentés par le type ``dict`` en Python.

!!! success "Ce n'est pas tout !"
    Je vous renvoie au cours pour le détail des instructions relatives à chacune de ces structures.

    Vous devez savoir :

    * [X] Définir un p-uplet.
    * [X] Écrire une fonction renvoyant un p-uplet de valeurs.
    * [X] Lire et modifier les éléments d'un tableau grâce à leurs index.
    * [X] Construire un tableau en compréhension.
    * [X] Utiliser des tableaux à deux dimensions (matrices).
    * [X] Itérer sur les éléments d'un tableau.
    * [X] Définir un dictionnaire. Ajouter une entrée.
    * [X] Itérer sur les éléments d'un dictionnaire.