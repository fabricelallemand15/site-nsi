_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

**Fiche d'exercices sur les variables, les affectations et les chaînes de caractères.**

## :fontawesome-solid-computer: Exercice 1

Dans la console interactive Python, taper successivement les commandes suivantes :

```py linenums='1'
a, b, c = 3, 2.5, "toto"
print(a)
print(b)
print(c)
print(type(a))
print(type(b))
print(type(c))
```

Expliquer les résultats obtenus.

--------

## :octicons-pencil-16: Exercice 2

On considère le script suivant :

```python linenums="1"
a = 50
b = 30
a = b + 10
b = a * 2
a = b
b = b - 5
```

Compléter le tableau d'état ci-dessous par les valeurs prises par les variables `a` et `b` à chaque étape.

| Etape | `a` | `b` |
| --- | --- | --- |
|1| | |
|2| | |
|3| | |
|4| | |
|5| | |
|6| | |

!!! note "Remarque"
    Les logiciels EduPython et Spyder permettent d'exécuter un programme pas à pas en observant l'évolution des variables.

------------------------------------------

## :octicons-pencil-16: Exercice 3
Parmi les 8 noms de variables suivants, quels sont ceux qui ne sont pas acceptés par un programme Python (expliquer pourquoi) ?

| | |
| --- | --- |
|prix.de.ma.voiture | un-prix|
|prix_de_ma_voiture|1prix|
|prix de ma voiture|prixen€|
|prixdemavoiture|prix1|

-------------------------------------------

## :octicons-pencil-16: Exercice 4
Que va produire l'exécution du programme suivant ?

```py
a = 100
b = 50
a = b
b = a + 10
print(a)
print(b)
```

----------------------------------------------

## :octicons-pencil-16: Exercice 5
Que va produire l'exécution du programme suivant ?

```py
a = 100
a = a - 10
a = a * 2
a = a + 50
print(a)
print("a")
```

----------------------------------------------------------

## :octicons-pencil-16: Exercice 6
Après les affectations suivantes, quelles sont les valeurs des variables `a` et `b` ?

```py
a = 1
b = a + 5
a = 2 * b + 3
b = 3 * a + 2
a = 2 * b + 3
```

------------------------------------------

## :octicons-pencil-16: Exercice 7
Corriger le programme ci-dessous pour qu'il effectue l'action indiquée en commentaires. Deux solutions différentes sont attendues.

```python
# ce programme affiche la somme de a et de b

a = "4"
b="5"
print("La somme de", a, "et de",b,"est égale à", a + b)
```

<!-- idée : faire à chaque fois des fiches de 10 exos environ; sachant qu'on ne les fera pas tous; mais la correction de tous sera disponible. Ainsi les plus rapides seront toujours occupés. Exercices papier crayon (symbole spécial) et exercices sur ordi (symbole spécial) + référence à des exos du manuel -->