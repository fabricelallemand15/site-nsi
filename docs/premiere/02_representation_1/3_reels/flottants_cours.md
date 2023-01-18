---
title: 3. Représentation des réels
---

Commençons tout de suite ce chapitre par une triste nouvelle : il est impossible de représenter en binaire **tous** les nombres réels. Certains d'entre eux, en effet, ont des caractéristiques problématiques, comme $\sqrt{2}$ ou $\pi$ par exemple : ce sont des nombres irrationnels, c'est-à-dire des nombres réels que l'on ne peut pas écrire sous la forme d'une fraction de deux entiers $\frac{a}{b}$. L'écriture décimale de ces nombres, avec une virgule, comporte une infinité de chiffres après la virgule, sans régularité ni schéma périodique. Une représentation en machine ne pouvant être infinie, ces nombres ne peuvent pas être codés dans un ordinateur.

Parmi les nombres rationnels, seuls les nombres **décimaux** peuvent être codés de manière exacte en binaire. Les nombres décimaux sont en effet ceux qui ont un nombre **fini** de chiffres après la virgule. Pour les autres nombres, on aura une représentation **approchée**.

Les _nombres à virgule_, sont ici appelés des **flottants**.

## 1. Conversion en base 2

Comment écrire un nombre décimal en base 2 ?

!!! success "Exemple"

    Prenons par exemple $x=10,125_{10}$. Tout comme pour les entiers, cette écriture peut se décomposer suivant les puissances de 10 : $x=10,125 = 1\times 10^1 + 0\times 10^0 + 1\times 10^{-1} + 2\times 10^{-2} + 5\times 10^{-3}$.

    L'écriture sous forme de flottant en base 2 repose sur le même type de décomposition, mais avec des puissances de 2.

    Pour la partie entière, nous savons faire : $10_{10}=1010_2$.

    Pour la partie décimale :

    * on multiplie $0,125$ par $2$ : $0,125\times 2 = 0,25$ : partie entière $0$.
    * on multiplie $0,25$ par $2$ : $0,25\times 2 = 0,5$ : partie entière $0$.
    * on multiplie $0,5$ par $2$ : $0,5\times 2 = 1$ : partie entière $1$.
    * on s'arrête car il n'y a plus de partir décimale.

    La suite des parties entières obtenues forme la partie décimale de l'écriture binaire : 

    $$10,125_{10} = 1010,001_2 = 1\times 2^3 + 0\times 2^2 + 1\times 2^1 + 0\times 2^0 + 0\times 2^{-1}+0\times 2^{-2}+1\times 2^{-3}$$

Il se peut que l'algorithme précédent aboutisse ne se termine jamais. Par exemple pour $x=0,35$ nous obtenons $0$ pour la partie entière, puis : 

* $0,35\times 2 = 0,7$ donc $0$ ;
* $0,7\times 2 = 1,4$ donc $1$ pour la partie entière ;
* $0,4\times 2 = 0,8$ donc $0$ ;
* $0,8\times 2 = 1,6$ donc $1$ ;
* $0,6\times 2 = 1,2$ donc $1$ ;
* $0,2\times 2 = 0,4$ donc $0$ : on retrouve donc le résultat de la troisième étape et donc l'algorithme va boucler indéfiniment : 

$$0,35_{10} =  0,0101100110110110110110...$$

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
    
## 2. Conversion de la base 2 à la base 10

Dans ce sens, il suffit d'appliquer la définition de la décomposition du nombre en fonction des puissances de 2.

Par exemple : 

$$\begin{array}{ccl}
    11,1011_2 & = & 1\times 2^1 + 1\times 2^0+1\times 2^{-1}+0\times 2^{-2}+1\times 2^{-3}+1\times 2^{-4}\\
              & = & 2 + 1 + 0,5 + 0,125 + 0,0625\\
              & = & 3,6875_{10}
\end{array}$$

## 3. Virgule flottante

Pour la représentation en machine, le principe s'inspire de l'idée de la **notation scientifique** d'un réel. En base 10 tout nombres réel peut s'écrire sous la forme $x=a\times 10^p$ où $a\in[1;10[$ et $p$ est un entier relatif.

Par exemple : $2022 = 2,022\times 10^3$.

L'exposant de 10 représente le nombre de décalages de la virgules à effectuer (vers la
droite pour un exposant positif, vers la gauche pour un exposant négatif) de la virgule qu'il faut affecter au nombre $2,022$ pour retrouver le nombre d'origine.

Le principe de la représentation binaire des décimaux est le même, mais tout est en base 2, les puissances de 10 sont donc remplacées par des puissances de 2.

C'est la norme internationale IEEE-754 définit les formats de représentation des nombres à virgule flottante.

Considérons un nombre binaire $x$. Nous l'écrivons sous la forme $\pm 1,XXXXXX\times 2^e$ : c'est la "notations scientifique binaire". Dans cet écriture, nous avons le signe, la suite des chiffres après la virgule qui s'appelle **la mantisse** $m=XXXXXX$ et l'exposant $e$.

!!! info "Représentation des flottants"
    Avant de pouvoir représenter un flottant, il faut choisir un format. Considérons une représentation sur 32 bits (usuellement on utilise 32 bits ou 64 bits).

    * Le bit de poids fort est le bit de signe : si ce bit est à 1, le nombre est négatif, et s'il est à 0, le nombre est positif.
    * Les 8 bits suivants représentent l'exposant.
    * Les 23 bits suivants (bits de poids faible) représentent la mantisse.

    ![](../../../assets/images/IEEE754_simple_precision.png){ width = 100% }

On a bien au total $1+8+23 = 32$ bits.

Reste à voir comment est codé l'exposant. Il faut en effet prévoir que celui-ci peut être négatif. La norme ne code pas l'exposant comme nous l'avons vu pour les entiers relatifs.

!!! info "Calcul de l'exposant"
    Pour un codage sur 32 bits, l'exposant est codé en **excès à 127** : cela signifie que l'on peut coder uniquement les exposants compris entre $-126$ et $+127$ et qu'un exposant $e$ est codé par la représentation binaire de $e+127$.

On peut coder 256 entiers sur 8 bits : on pourrait donc aller de $-127$ à $+128$ mais ces deux valeurs sont des valeurs réservées qui ne doivent donc pas être utilisées.

Le principe de l'excès à 127 permet de se ramener à un nombre positif pour l'exposant.

!!! success "Exemple"
    Considérons le nombre $10,125_{10} = 1010,001_2$ obtenu au début de ce chapitre. Cherchons quelle est sa représentation sur 32 bits (tout ce qui suit est écrit en base 2) :

    * Tout d'abord nous l'écrivons sous la forme "scientifique" : $1010,001=1,010001\times 2^3$.
    * Le signe est positif : le bit de poids fort sera donc 0.
    * L'exposant vaut 3, codé par $3+127=130$ sur 8 bits (1 octet), ce qui donne : $130_{10}=1000 0010_2$ codage auquel on ajoute des zéros **à gauche** pour obtenir 8 bits si le nombre de chiffres est inférieur à 8.
    * La mantisse est égale $010001$ : on complète par des zéros **à droite** pour arriver à 23 bits. On met cette fois-ci des zéros à droites : ils ne changent pas la valeur de la mantisse car il ne faut pas oublier qu'il s'agit de chiffres **après** la virgule ! Cela donne : $0100 0100 0000 0000 0000 000$.
    * On met tout ensemble : le nombre $10,125$ est codé par :

    $$0100\; 0001\; 0010\; 0010\; 0000\; 0000\; 0000\; 0000$$

Cette écriture est un peu longue. On peut la compacter en écrivant ce nombre en hexadécimal. On rappelle que chaque bloc de 4 bit donne un chiffre de l'écriture en base 16.

Cela donne : $41220000_{16}$.