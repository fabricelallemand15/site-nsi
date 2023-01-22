# S2 - Représentation de données - Types et valeurs de base

# 3. Représentation des réels : L'essentiel

## Passage de la base 10 à la base 2

Exemple avec $x=10,125_{10}$.

Pour la partie entière, nous savons faire : $10_{10}=1010_2$.

Pour la partie décimale :

* on multiplie $0,125$ par $2$ : $0,125\times 2 = 0,25$ : partie entière $0$.
* on multiplie $0,25$ par $2$ : $0,25\times 2 = 0,5$ : partie entière $0$.
* on multiplie $0,5$ par $2$ : $0,5\times 2 = 1$ : partie entière $1$.
* on s'arrête car il n'y a plus de partir décimale.

La suite des parties entières obtenues forme la partie décimale de l'écriture binaire : 

$$10,125_{10} = 1010,001_2 = 1\times 2^3 + 0\times 2^2 + 1\times 2^1 + 0\times 2^0 + 0\times 2^{-1}+0\times 2^{-2}+1\times 2^{-3}$$

Quand ce processus ne s'arrête pas (on obtient un cycle), on ne peut obtenir qu'une approximation binaire du nombre $x$.

!!! danger "À retenir"
    La représentation binaire est parfois infinie. En machine, elle est donc forcément tronquée et limitée à un certain nombre de bits. La représentation est alors **approximative** !

    Exemple pour vous en convaincre : 

    ````pycon
    >>> x = 0.1 + 0.2
    >>> y = 0.3
    >>> x == y
    False
    ````

    Morale : :warning::warning::warning: **on évitera toujours de comparer des flottants en Python.** :warning::warning::warning:

## Conversion de la base 2 à la base 10

Dans ce sens, il suffit d'appliquer la définition de la décomposition du nombre en fonction des puissances de 2.

## Représentation en machine : virgule flottante

C'est la norme internationale IEEE-754 définit les formats de représentation des nombres à virgule flottante.

Considérons un nombre binaire $x$. Nous l'écrivons sous la forme $\pm 1,XXXXXX\times 2^e$ : c'est la "notations scientifique binaire". Dans cet écriture, nous avons le signe, la suite des chiffres après la virgule qui s'appelle **la mantisse** $m=XXXXXX$ et l'exposant $e$.

!!! info "Représentation des flottants"
    Avant de pouvoir représenter un flottant, il faut choisir un format. Considérons une représentation sur 32 bits (usuellement on utilise 32 bits ou 64 bits).

    * Le bit de poids fort est le bit de signe : si ce bit est à 1, le nombre est négatif, et s'il est à 0, le nombre est positif.
    * Les 8 bits suivants représentent l'exposant.
    * Les 23 bits suivants (bits de poids faible) représentent la mantisse.

    ![](../../../assets/images/IEEE754_simple_precision.png){ width = 100% }

!!! info "Calcul de l'exposant"
    Pour un codage sur 32 bits, l'exposant est codé en **excès à 127** : cela signifie que l'on peut coder uniquement les exposants compris entre $-126$ et $+127$ et qu'un exposant $e$ est codé par la représentation binaire de $e+127$.
