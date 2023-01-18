---
title: 4. Booléens
---

Nous avons déjà rencontré les booléens dans la première séquence.

En programmation informatique, un booléen est un type de variable à deux états (généralement notés vrai et faux), destiné à représenter les valeurs de vérité de la logique et l'algèbre booléenne. Il est nommé ainsi d'après George Boole (1815-1864), fondateur dans le milieu du XIXe siècle de l'algèbre portant son nom.

Nous avons vu qu'en Python, les deux valeurs booléennes sont notées `True` et `False`.

De manière équivalents, on adopte souvent une notation numérique en associant 1 à `True` et 0 à `False`.

## 1. Opérateurs booléens de base

Dans le cours sur les bases de Python, nous avons déjà vu les opérateurs `or`, ``and`` et ``not``.

### Opérateur OU

!!! info "Définition"
    Soit $a$ et $b$ deux expressions : 

    $$a\textrm{ OU }b\textrm{ est vrai }\iff a\textrm{ est vrai ou }b\textrm{ est vrai}$$

Table de vérité de l'opérateur OU : 

| $a$ | $b$  | $a$  OU  $b$ |
| :---: | :---: | :---: |
| 1  | 1 | 1 |
| 1  | 0 | 1 |
| 0  | 1 | 1 |
| 0  | 0 | 0 |

!!! warning "Remarque"
    En logique l'opérateur OU est **inclusif** : cela signifie que $a$ OU $b$ est vrai aussi lorsque $a$ est vrai et $b$ est vrai. Dans la langue courant, le mot _ou_ est le plus souvent **exclusif** : dans un menu, par exemple "fromage ou dessert" ne permet pas de prendre les deux.

### Opérateur ET

!!! info "Définition"
    Soit $a$ et $b$ deux expressions : 

    $$a\textrm{ ET }b\textrm{ est vrai }\iff a\textrm{ est vrai et }b\textrm{ est vrai}$$

Table de vérité de l'opérateur ET : 

| $a$ | $b$  | $a$  ET  $b$ |
| :---: | :---: | :---: |
| 1  | 1 | 1 |
| 1  | 0 | 0 |
| 0  | 1 | 0 |
| 0  | 0 | 0 |

### Opérateur NON

!!! info "Définition"
    Soit $a$ une expression : 

    $$(\textrm{NON }a)\textrm{ est vrai }\iff a\textrm{ est faux}$$

Table de vérité de l'opérateur NON : 

| $a$ | NON $a$ |
| :---: | :---: |
| 1 | 0 |
| 0 | 1 |

## 2. Expressions booléennes

Les opérateurs de base peuvent être combinés pour formuler des expressions booléennes plus complexes. Pour éviter des problèmes d'interprétation, il est préférable d'utiliser des parenthèses pour marquer les priorités.

!!! question "Exercice"

    Recopier et compléter la table de vérité ci-dessous :

    | $a$ | $b$  | NON $a$ | NON $b$ | (NON $a$) ET (NON $b$)| NON((NON $a$) ET (NON $b$)) | $a$ OU $b$ |
    | :---: | :---: | :---: | :---: |  :---: | :---: | :---: |
    | 1  | 1 | | | | | |
    | 1  | 0 | | | | | |
    | 0  | 1 | | | | | |
    | 0  | 0 | | | | | |

    Que peut-on constater ?

## 3. Le ou exclusif

Le OU logique étant inclusif, on définit un opérateur spécifique pour le ou exclusif, appelé opérateur XOR.

!!! info "Définition"
    Soit $a$ et $b$ deux expressions : 

    $$a\textrm{ XOR }b\textrm{ est vrai }\iff (a\textrm{ est vrai et }b\textrm{ est faux})\textrm{ ou }(a\textrm{ est faux et }b\textrm{ est vrai})$$

Table de vérité de l'opérateur XOR : 

| $a$ | $b$  | $a$  XOR  $b$ |
| :---: | :---: | :---: |
| 1  | 1 | 0 |
| 1  | 0 | 1 |
| 0  | 1 | 1 |
| 0  | 0 | 0 |

En Python, l'opérateur `xor` n'existe pas. Le ou exclusif est note ``^``.

````pycon
>>> True ^ False
True
````

## 4. L'addition binaire en mode booléen

Lorsque nous posons l'addition de deux entiers écrits en base 2, nous avons besoin d'additionner des groupes de 3 bits (un pour chaque nombre et un pour la retenue).

Voyons ce que donne l'addition de trois bits :

| $a$ | $b$ | $c$ | $a+b+c$ |
| :---: | :---: | :---: | :---: |
|0|0|0|0|
|1|0|0|1|
|0|1|0|1|
|0|0|1|1|
|1|1|0|10|
|1|0|1|10|
|0|1|1|10|
|1|1|1|11|

!!! question "Exercice"
    En assimilant 0 à ``False`` et 1 à ``True`` écrire une fonction ``add_trois_bits(a, b, c)`` qui retourne la somme $a+b+c$ en utilisant uniquement les opérateurs ET, OU et NON. On retournera la somme sous la forme d'une chaîne de deux caractères (`"01"` par exemple).

    ````python
    def add_3_bits(a, b, c) :
        unite = int(...)
        deuzaine = int(...)
        return str(deuzaine)+str(unite)

    assert add_3_bits(0,0,0)=="00"
    assert add_3_bits(1,0,0)=="01"
    assert add_3_bits(0,1,0)=="01"
    assert add_3_bits(0,0,1)=="01"
    assert add_3_bits(1,1,0)=="10"
    assert add_3_bits(1,0,1)=="10"
    assert add_3_bits(0,1,1)=="10"
    assert add_3_bits(1,1,1)=="11"
    print("C'est parfait !")
    ````