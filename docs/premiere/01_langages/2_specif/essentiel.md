# L'essentiel : Spécification et mise au point

## 1. Prototyper une fonction

!!! note "Définition"
    Spécifier une fonction, c'est la documenter en :

    * décrivant ce qu'elle fait
    * énumérant les entrées attendues et leur type
    * précisant des conditions sur les entrées : on parle de **préconditions**
    * donnant le type de la valeur retournée
    * précisant des conditions sur la valeur retournée : on parle de **postconditions**

On peut préciser les types attendus pour les entrées et le type de la sortie avec des annotations simples, complétés par une docstring.

````py
def add_trois_nombres(m: int, n: int, p: int) -> int:
    """Renvoie la somme des trois entiers m, n et p"""
    return m + n + p
````

La chaîne de documentation (docstring) est accessible par la fonction ``help()``.

La programmation défensive permet de vérifier les préconditions : ``assert condition, message``.

## 2. Mise au point de programmes

Pour tester les postconditions, la commande ``assert`` est aussi utile et permet de créer un jeu de tests unitaires.

Le mode débogage de l'IDE utilisé est aussi utile pour vérifier les postconditions.