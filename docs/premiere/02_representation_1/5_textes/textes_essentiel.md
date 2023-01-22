# S2 - Représentation de données - Types et valeurs de base

# 5. Représentation d'un texte en machine : L'essentiel

Pour représenter les caractères alphanumériques en machine, il faut définir une représentation numérique (un **point de code**) de chaque caractère (**table de codage**), puis une façon d'associer chacun de ces points de code à une suite d'octets (**encodage**).

## Le code ASCII

Codé sur 8 bits dont seulement 7 sont utilisés, la table ASCII permet de coder toutes les lettres et symboles utilisés par la langue anglaise, ainsi que des caractères spéciaux. Au total, 128 caractères sont codés.

## Le code ISO-8859-1

Aussi appelé ISO-Latin-1, il s'agit d'un code ASCII étendu. On utilise le bit de poids fort pout coder 128 caractères supplémentaires. Ce codage est ainsi suffisant pour toutes les langues d'Europe occidentale et permet de coder é, è, à, ç, ß, ...

## Le code Unicode et l'encodage UTF-8

Dans sa version 14.0 publiée en septembre 2021, la table Unicode compte 144 697 caractères couvrant plus de 150 écritures.

Unicode est une table qui regroupe tous les caractères existant au monde mais ne s'occupe pas de la façon dont les caractères sont codés dans la machine. Il existe pour cela plusieurs formats différents, le plus répandu étant l'encodage UTF-8.

UTF-8 est un code à taille variable dans lequel les caractères sont représentés sur 1, 2, 3 ou 4 octets.

Les caractères de la table ASCII sont codés de la même façon en ASCII et en UTF-8, mais ce n'est pas le cas des caractères supplémentaires codés par l'encodage ISO-8859-1.

Quand on utilise du texte dans un navigateur web ou dans un programme Python, il faut prendre garde à l'encodage utilisé pour être sûr d'obtenir l'affichage attendu.

**Fonctions Python à connaître** : 

* `chr(x)` : retourne le caractère codé par l'entier $x$ écrit en base 10 ;
* `ord(c)` : retourne l'entier correspondant au caractère c (de type str).

## Changer l'encodage d'un fichier texte

Pour changer l'encodage d'un fichier texte, le plus facile est d'utiliser l'éditeur Notepad++ et son menu "Encodage".

## Ouverture d'un fichier texte en Python

Pour assurer la portabilité d'un programme d'un système d'exploitation à un autre, il est préférable de toujours indiquer l'encodage à la fonction ``open``. 

````python
from io import open

f = open("texte_ascii.txt", encoding="ISO-8859-1")
for ligne in f.readlines():
    print(ligne)
f.close()

print("---------")

f = open("texte_utf-8.txt", encoding="UTF-8")
for ligne in f.readlines():
    print(ligne)
f.close()
````
