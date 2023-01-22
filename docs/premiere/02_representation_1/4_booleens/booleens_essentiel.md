# S2 - Représentation de données - Types et valeurs de base

# 4. Booléens : L'essentiel

En programmation informatique, un booléen est un type de variable à deux états (généralement notés vrai et faux)

En Python, les deux valeurs booléennes sont notées True et False.

De manière équivalents, on adopte souvent une notation numérique en associant 1 à True et 0 à False.

## Opérateurs booléens de base

Dans le cours sur les bases de Python, nous avons déjà vu les opérateurs `or`, ``and`` et ``not``.

### Opérateur OU

!!! info "Définition"
    Soit $a$ et $b$ deux expressions : 

    $$a\textrm{ OU }b\textrm{ est vrai }\iff a\textrm{ est vrai ou }b\textrm{ est vrai}$$

Table de vérité de l'opérateur OU (**inclusif**): 

| $a$ | $b$  | $a$  OU  $b$ |
| :---: | :---: | :---: |
| 1  | 1 | 1 |
| 1  | 0 | 1 |
| 0  | 1 | 1 |
| 0  | 0 | 0 |

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



## Le ou exclusif

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

En Python, le ou exclusif est note ``^``.