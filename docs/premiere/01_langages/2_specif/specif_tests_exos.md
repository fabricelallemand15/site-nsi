_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

**Fiche d'exercices sur la spécification et la mise au point des fonctions.**

## :fontawesome-solid-computer: Exercice 1

1. Dans la console Python, importer toutes les fonctions du module `statistics` qui, comme son nom l'indique, permet de réaliser quelques calculs statistiques !
2. Taper ensuite les commandes permettant d'afficher les spécifications des fonctions `mean` (calcul de la moyenne), `median` (calcul de la médiane) et `quantiles` (calcul des quantiles).
3. Recopier ces spécifications.

------------------------------------------------

## :octicons-pencil-16: Exercice 2

La fonction `punition()` affiche une phrase de punition un certain nombre de fois donné en paramètre.

````py
def punition(nombrecopies) : 
    for compteur in range (1,nombrecopies+1,1) :
        print("Je ne dois pas bavarder en classe.")
````

1. Parmi les appels suivants, lesquels vont provoquer une erreur ?
    
    * `punition("Marcello")`
    * `punition(200)`
    * `punition( )`
    * `punition(3.5)`
    * `punition(-10)`

2. Ajouter dans la fonction un `assert` de précondition avec une phrase d’erreur et le tester.

----------------------------------------

## :fontawesome-solid-computer: Exercice 3

L’Indice de Masse Corporelle se calcule par la formule $IMC = \frac{masse}{taille^2}$, où la masse est en kilogrammes et la taille en mètres. Un IMC est considéré comme normal s’il est compris entre 18,5
et 25. En dessous de 18,5, la personne est en sous-poids et au-dessus de 25 elle est en sur-poids.

1. Écrire une fonction d’en-tête `imc(m, t)` qui renvoie la classification de l’IMC correspondant à
une masse de `m` kilogrammes et une taille de `t` mètres : classe 0 pour sous-poids, 1 pour normal et
2 pour surpoids.
2. Détailler précisément la spécification de cette fonction et proposer des préconditions pertinentes à tester.
3. Écrire une fonction `test_IMC()` mettant en oeuvre un jeu de tests unitaires pour la fonction `imc(m, t)`.

--------

## :fontawesome-solid-computer: Exercice 4

Écrire une fonction `mention(note)` et sa spécification qui prend en paramètre une note et renvoie la chaîne de caractères ’R’ si $note < 10$, ’A’ si $10 \leqslant note < 12$, ’AB’ si $12\leqslant note < 14$, ’B’ si $14 \leqslant note < 16$ et ’TB’ sinon.

On vérifiera d’abord que la note passée en paramètre est comprise entre 0 et 20.

Proposer un jeu de tests unitaires pour cette fonction.

-------------------------