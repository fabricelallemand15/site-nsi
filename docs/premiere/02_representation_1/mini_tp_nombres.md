# TP : Bases 2, 10 et 16 en Python

[Corrigé](https://flallemand.fr/notebook/?from=https://flallemand.fr/nsi/premiere/02_representation_1/TP_Bases_CORR.ipynb){ .md-button .md-button--primary }

Python met à disposition des fonctions permettant de convertir des entiers dans différentes bases.

!!! info "À savoir"
    En Python,

    * un entier en base 10 est représenté de façon naturel par un objet de type `int` ;
    * un entier en base 2 est représenté par une chaîne de caractères préfixée par `0b` ;
    * un entier en base 16 est représenté par une chaîne de caractères préfixée par `0x` ;

## :fontawesome-solid-computer: Exercice 1

1. Lire la documentation des fonctions Python `bin()`, `hex()` et `int()`.
2. Prévoir ce qui s'affichera après chacune des instructions ci-dessous, puis tester en console :

````pycon
>>> bin(123)
>>> int(b"1111")
>>> int(b"10101", 2)
>>> bin(0)
>>> int(b"101211", 2)
>>> hex(2022)
>>> int("0xABC", 16)
````

## :fontawesome-solid-computer: Exercice 2

Le but de cet exercice est d'étudier une fonction permettant de convertir en base 2 un nombre entier naturel donné en base 10.

On donne ci-dessous le code de la fonction `dec_to_bin` :

````python
def dec_to_bin(n):
    chaine_bin = ''
    nombre = n
    while nombre > 0:
        r = nombre % 2
        nombre = nombre // 2
        chaine_bin = str(r) + chaine_bin
    return chaine_bin
````

1. Tester cette fonction avec quelques valeurs de $n$ et vérifier qu'elle effectue bien la conversion attendue.
2. Quel est la méthode utilisée ? Faire le lien avec un des exemples du cours.
3. On souhaite convertir le nombre $n=105$ en binaire. Recopier et compléter le tableau d'état des variables lors de l'appel `dec_to_bin(105)`. L'étape zéro correspond à l'initialisation, l'étape 1 à l'état des variables **après** le premier passage dans la boucle `while`.

    | Etape | `chaine_bin` | `nombre` | `r` |
    | :---: | :---: | :---: | :---: |
    |0|""|102| / |
    |1| ... | ... | ... |

4. Modifier la fonction afin que le préfixe `0b` soit présent dans la chaîne retournée.

## :fontawesome-solid-computer: Exercice 3

1. Écrire une fonction qui respecte les spécifications indiquées : 
    
    ````python
    def add_2_bits(a: int, b: int) -> str
        """a et b sont des bits égaux à 0 ou 1
        retourne une chaine représentant en base 2
        la somme de a et de b"""
    ````

2. Écrire une fonction analogue `add_3_bits(a, b, c)` qui retourne la somme de trois bits.

## :fontawesome-solid-computer: Exercice 4

Coder la fonction `complement_deux` spécifiée ci-dessous. Vous pourrez utiliser la fonction `dec_to_bin` définie à l'exercice 2 (sans le préfixe `0b`). Votre code devra tester les préconditions indiquées sur l'entier $n$.

Un jeu de tests unitaires est proposé ci-dessous : il permet de vérifier que votre fonction retourne bien ce qui est attendu.

````python
def complement_deux(n:int, nbits:int)->str:
    """
    Renvoie la notation en compléments à 2 de l'entier relatif n
    sous la forme d'une chaîne de caractères
    
    Parameters
    ----------
    n : int Précondition -2**(nbits-1) <= n < 2**(nbits-1)
    nbits : int
    
    Returns
    -------
    type str de longueur nbits
    """
    pass

print(complement_deux(-12,8))
# Jeu de tests unitaires
assert complement_deux(0, 8) == "00000000"
assert complement_deux(5, 8) == "00000101"
assert complement_deux(2**7 - 1, 8) == "01111111"
assert complement_deux(-2**7, 8) == "10000000"
assert complement_deux(2**7 - 2, 8) == "01111110"
assert complement_deux(-2**7 + 1, 8) == "10000001"
assert complement_deux(-1, 8) == "11111111"
assert complement_deux(-2, 8) == "11111110"
print("Bravo ! Tous les tests sont réussis !")
````

Sortie attendue à l'exécution : 

````pycon
11110100
Bravo ! Tous les tests sont réussis !
````


## :fontawesome-solid-computer: Problème

Écrire une fonction `ieee_754(x)` qui prend en entrée un flottant x (en base 10) et qui retourne une chaine de caractères correspondant à la représentation de $x$ selon la norme IEEE-754 sur 32 bits.

_Conseils : vous pourrez décomposer le problème en plusieurs fonctions séparées pour traiter les étapes une par une._