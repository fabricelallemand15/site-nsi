_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

**Fiche d'exercices sur les instructions conditionnelles.**

## :fontawesome-solid-computer: Exercice 1
Écrire un programme qui demande le poids, en grammes, d’une **lettre prioritaire destinée à la France** et qui retourne le prix du timbre adéquat. Vous pourrez consulter les tarifs postaux sur [le site de la Poste](https://www.laposte.fr/tarifs-postaux-courrier-lettres-timbres).

---------------------------------------------

## :octicons-pencil-16: Exercice 2
On considère la fonction suivante écrite dans un script qui a été exécuté.

```python
def ma_fct(a,b):
    if a < 5 or b > 2 :
        return 42
    else :
        return 24
```

1. Dans la console interactive, on tape `ma_fct(6,3)`. Quel résultat obtient-on ?
2. Quels valeurs de `b` peut-on choisir pour que l'appel `ma_fct(6,b)` retourne `24` ?

---------------------------------------------------------

## :octicons-pencil-16: Exercice 3
On considère la fonction suivante écrite dans un script qui a été exécuté.

```python
def ma_fct(a,b):
    if a < 5 and b > 2 :
        return 42
    else :
        return 24
```

1. Dans la console interactive, on tape `ma_fct(6,3)`. Quel résultat obtient-on ?
2. Quels valeurs de `b` peut-on choisir pour que l'appel `ma_fct(6,b)` retourne `42` ?

-------------------------------------------------

## :octicons-pencil-16: Exercice 4
On considère le script suivant :

```python
a = 10
b = int(input())
if b < 10 :
    if b >= 5 :
        a = a + 2
    else :
        a = a - 2
    a = a * 2
a = a - 1
```

1. Quelle est la valeur finale de `a` avec `b=12` ?
2. Quelle est la valeur finale de `a` avec `b=6` ?

_On trouvera d'autres exercices dans la fiche n°4_