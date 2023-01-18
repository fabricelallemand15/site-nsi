_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :fontawesome-solid-computer: Exercice 1

Écrire une procédure qui affiche à l'écran la table des 128 caractères ASCII sur 8 lignes de 16 colonnes, avec deux boucles ``for`` imbriquées et la fonction ``chr()``.

-----------------------------------------------------

## :fontawesome-solid-computer: Exercice 2

L'encodage consiste à coder un caractère par un nombre. Il ne faut pas confondre cette opération de **numérisation** avec le **chiffrement**, ou **cryptage**, qui consiste aussi à remplacer des caractères par des nombres, mais de telle façon que le décodage ne puisse se faire que par le destinataire du message. La numérisation est cependant le plus souvent la première étape du chiffrement.

Considérons le procédé **rot-13** qui consiste à remplacer une lettre codée par l'entier $n$ par la lettre codée par l'entier $n+13$ (on se limite aux caractères de la table ASCII).

Comme l'alphabet latin compte 26 lettres, le déchiffrement se fait exactement par la même opération.

Pour trouver l'image par rot13 du caractère 'R' est 'E' : 

* on calcule d'abord le rang alphabétique du caractère :
    ````pycon
    >>> ord('R') - ord('A')
    17
    ````
* puis on ajoute 13 à ce rang et on prend le reste dans la division euclidienne par 26 :
    ````pycon
    >>> (ord('R') - ord('A') + 13) % 26
    4
    ````
* enfin on retrouve le rang du caractère associé au rang alphabétique calculé :
    ````pycon
    >>> chr(ord('A') + 4)
    'E'
    ````

Écrire une fonction ``rot13(chaine)`` qui chiffre ou déchiffre la chaîne (en majuscules ou convertie en majuscules avec ``chaine.upper())`` passée en paramètre, avec l'algorithme rot13.

-----------------------------------

## :octicons-pencil-16: Exercice 3

1. Sur une page web qui s'affiche sur notre navigateur on peut lire :

    « En consÃ©quence, l'AssemblÃ©e Nationale reconnaÃ®t et dÃ©clare, en prÃ©sence »

    Quelle peut être la cause des affichages étranges de cette page ?

    * [ ] l'encodage des caractères n'est pas celui attendu par le navigateur
    * [ ] le texte original est en japonais
    * [ ] la taille des caractères n'est pas celle attendue par le navigateur
    * [ ] la connexion à Internet présente des coupures

2. Le code ASCII permet de représenter en binaire les caractères alphanumériques. Quel est son principal inconvénient ?

    * [ ] Il utilise beaucoup de bits.
    * [ ] Il ne différencie pas les majuscules des minuscules.
    * [ ] Il ne représente pas les caractères accentués.
    * [ ] Il n'est passer compatible avec la plupart des systèmes informatiques

---------------------------------------------------

## :octicons-pencil-16: Exercice 4

1. Parmi les caractères ci-dessous, lequel ne fait pas partie du code ASCII ?
    * [ ] a
    * [ ] B
    * [ ] @
    * [ ] é
2. Laquelle de ces affirmations concernant le codage UTF-8 des caractères est vraie ?
    * [ ] le codage UTF-8 est sur 7 bits
    * [ ] le codage UTF-8 est sur 8 bits
    * [ ] le codage UTF-8 est sur 1 à 4 octets
    * [ ] le codage UTF-8 est sur 8 octets
3. Quel est un avantage du codage UTF-8 par rapport au codage ASCII ?
    * [ ] il permet de coder un caractère sur un octet au lieu de deux
    * [ ] il permet de coder les majuscules
    * [ ] il permet de coder tous les caractères
    * [ ] il permet de coder différentes polices de caractères

-----------------------------------------------------

## :fontawesome-solid-computer: Exercice 5

En Python, pour saisir directement un caractère à partir de son point de code Unicode, on peut utiliser des séquences d'échappement spéciales : '\uxxxx' si le point de code peut s'écrire avec 4 chiffres hexadécimaux, ou '\Uxxxxxxxx' s'il faut plus de quatre chiffres, en remplissant par des 0 à gauche les positions vides sur les huit possibles.

1. Tester l'instruction ci-dessous dans une console Python : 
    ````py
    print("\U0001f600")
    ````
2. Écrire un code Python qui affiche tous les caractères dont le point de code est compris entre ``U+1F600`` et ``U+1F64F`` sur des lignes de 16 caractères par colonne.
