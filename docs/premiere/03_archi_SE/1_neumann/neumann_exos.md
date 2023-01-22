_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## Architecture

## :octicons-pencil-16: Exercice 1 (QCM)

<iframe src="https://www.flallemand.fr/wp/wp-admin/admin-ajax.php?action=h5p_embed&id=22" width="959" height="340" frameborder="0" allowfullscreen="allowfullscreen" title="von Neumann 1"></iframe><script src="https://www.flallemand.fr/wp/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

<iframe src="https://www.flallemand.fr/wp/wp-admin/admin-ajax.php?action=h5p_embed&id=23" width="959" height="340" frameborder="0" allowfullscreen="allowfullscreen" title="von Neumann 2"></iframe><script src="https://www.flallemand.fr/wp/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

<iframe src="https://www.flallemand.fr/wp/wp-admin/admin-ajax.php?action=h5p_embed&id=24" width="959" height="340" frameborder="0" allowfullscreen="allowfullscreen" title="von Neumann 3"></iframe><script src="https://www.flallemand.fr/wp/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

<iframe src="https://www.flallemand.fr/wp/wp-admin/admin-ajax.php?action=h5p_embed&id=25" width="959" height="340" frameborder="0" allowfullscreen="allowfullscreen" title="von Neumann 4"></iframe><script src="https://www.flallemand.fr/wp/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

<iframe src="https://www.flallemand.fr/wp/wp-admin/admin-ajax.php?action=h5p_embed&id=26" width="959" height="340" frameborder="0" allowfullscreen="allowfullscreen" title="von Neumann 5"></iframe><script src="https://www.flallemand.fr/wp/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

<iframe src="https://www.flallemand.fr/wp/wp-admin/admin-ajax.php?action=h5p_embed&id=27" width="959" height="340" frameborder="0" allowfullscreen="allowfullscreen" title="von Neumann 6"></iframe><script src="https://www.flallemand.fr/wp/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

--------------------------------------------

## Assembleur

## :octicons-pencil-16: Exercice 2

1. Expliquez brièvement par une phrase, les instructions suivantes :

    * ADD R0, R1, #42
    * LDR R5,98
    * CMP R4, #18
    * BGT 77
    * STR R0,15
    * B 100

2. Écrire les instructions en assembleur correspondant aux phrases suivantes : 

    * « Additionne la valeur stockée dans le registre R0 et la valeur stockée dans le registre R1, le résultat est stocké dans le registre R5 »
    * « Place la valeur stockée à l'adresse mémoire 878 dans le registre R0 »
    * « Place le contenu du registre R0 en mémoire vive à l'adresse 124 »
    * « La prochaine instruction à exécuter se situe en mémoire vive à l'adresse 478 »
    * « Si la valeur stockée dans le registre R0 est égale 42 alors la prochaine instruction à exécuter se situe à l'adresse mémoire 85 »

-----------------------------

## :octicons-pencil-16: Exercice 3

On considère le programme Python donné à la fin du cours et sa traduction en Python.


```py
x = 4
y = 8
if x == 10:
	y = 9
else :
	x=x+1
z=6
```

et voici maintenant voici son équivalent en assembleur :

```DASM16 title="Assembleur"
MOV R0, #4
STR R0,30
MOV R0, #8
STR R0,75
LDR R0,30
CMP R0, #10
BNE else
MOV R0, #9
STR R0,75
B endif
else:
LDR R0,30
ADD R0, R0, #1
STR R0,30
endif:
MOV R0, #6
STR R0,23
HALT
```

1. À quoi sert la ligne B endif  ?
2. À quoi correspondent les adresses mémoires 23, 75 et 30 ?

-----------------------------------------------------

## :fontawesome-solid-computer: Exercice 4

Le module `dis` de Python permet de "désassembler" du code Python, c'est-à-dire d'afficher les instructions machines correspondant à des instructions Python.

1. En console interactive, entrer les lignes suivantes et interpréter le résultat.

    ````pycon
    >>> import dis
    >>> code = """
    a = 5
    a = a + 3
    """
    >>> dis.dis(code)
    ````

2. Recommencer en remplaçant le code analysé par le code de l'exercice précédent. Expliquer les différences entre l'assembleur Python et l'assembleur utilisé dans l'exercice précédent.

