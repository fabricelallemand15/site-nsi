# S2 - Représentation de données - Types et valeurs de base

# 1. Représentation des entiers naturels : L'essentiel

En base $b\geqslant 2$, on utilise les chiffres $0, 1, 2, \ldots , b-1$.

Le nombre ${d_n\cdots d_0}_b$ représente la valeur : $N = d_n\times b^n + d_{n-1}\times b^{n-1}+\cdots+d_0\times b^0$ où tous les $d_i$ sont des chiffres dans $\{0,\ldots b-1\}$.

### Passage de la base $b$ à la base 10

Pour passer de la base $b$ à la base 10, c'est facile, ils suffit d'utiliser la définition : 

$${d_n\cdots d_0}_b = (d_n\times b^n + d_{n-1}\times b^{n-1}+\cdots+d_0\times b^0)_{10}$$

### Passage de la base 10 à la base $b$

On procède par divisions euclidiennes successives.

![image50](../../../assets/images/chgt_base.svg)

On continue les divisions successives jusqu'à obtenir un quotient nul.

Les restes successifs (sur fond bleu) forment le nombre en base 5, **en les lisant de la droite vers la gauche** : $64_{10}=224_5$.

## La base 2

En base 2, nous ne disposons donc que des deux chiffres 0 et 1. On parle de système **binaire**.

Un chiffre binaire, _binary digit_ en anglais est appelé en abrégé un **bit**.

Vocabulaire : bit de poids fot, bit de poids faible.

!!! note "À retenir"
    En base $2$, il y a $2^n$ nombres (entiers positifs) représentables sur
    $n$ bits: les nombres de $0$ à $2^n-1$.

### Conversion de la base 2 à la base 10

$1101\; 0011_2 = 1\times 2^7 + 1\times 2^6 + 0\times 2^5 + 1\times 2^4 + 0\times 2^3 + 0\times 2^2 + 1\times 2^1 + 1\times 2^1 = 211_{10}$.

### Conversion de la base 10 à la base 2


![image80](../../../assets/images/chgt_base2.svg)

On a donc $47_{10}=10\;1111_2$.

## La base 16

Dans le système hexadécimal, on utilise les chiffres $0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F$.

## Addition posée en binaire

On applique la même technique avec retenues qu'en base 10.