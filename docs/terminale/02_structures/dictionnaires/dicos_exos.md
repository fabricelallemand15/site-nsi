_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :octicons-pencil-16: Exercice 1

Soit le programme Python suivant :

````python
inventaire = {'pommes': 430, 'bananes': 312,'oranges' : 274, 'poires' : 137}

stock = 0
for fruit in inventaire.keys():
  if fruit != 'bananes':
    stock = stock + inventaire[fruit]
````

Quelle est la valeur de la variable stock après l'exécution de ce programme ?

-----------------------------------------------------

## :octicons-pencil-16: Exercice 2

Soit le programme Python suivant :

````python
P = [{"nom":"Turing","prenom":"Alan","age":28},{"nom":"Lovelace","prenom":"Ada","age":27}]
````

Qu'obtient-on si on tape ``P[1]['age']`` dans une console Python ?

---------------------------------------------------------------

## :octicons-pencil-16: Exercice 3

Soit le programme Python suivant :

````python
def ajoute(stock,element,quantite):
  if element in stock:
    stock[element] = stock[element] + quantite
  else:
    stock[element] = quantite

stock = { 'clous': 14, 'vis': 27, 'boulons': 8, 'écrous': 24 }
ajoute(stock,'vis',5)
ajoute(stock,'chevilles',3)
````

Quelle est la valeur de la variable stock à la fin de cette exécution ?

---------------------------------------

## :fontawesome-solid-computer: Exercice 4

Écrire une fonction ``occurrences(texte)`` répondant aux spécifications ci-dessous :

````Python
def occurrences(texte: str) -> dict:
    """
    Retourne un dictionnaire indiquant le nombre d'apparitions de chaque mot dans le texte

    Parameters
    ----------
    texte : str
        chaîne de caractère à étudier

    Returns
    -------
    occurrences : dict
        dictionnaire, clés : str, valeurs = int
    """
````

_Indication_ : la méthode ``split`` des chaînes de caractères sera fort utile.

Exemple d'exécution en console :

````pycon
>>> phrase = "coucou les gars coucou les filles"
>>> occurrences(phrase)
{'coucou': 2, 'les': 2, 'gars': 1, 'filles': 1}
````

------------------------------------

## :octicons-pencil-16: Exercices tombés au bac

* [2022 Centres étrangers Jour 1 : exo 1 et exo 3](../../../assets/pdf/2022_CentresEtrangers_1.pdf){ target=_blank }.
* [2022 Centres étrangers Jour 2 : exo 2](../../../assets/pdf/2022_CentresEtrangers_2.pdf){ target=_blank }.
* [2021 Centres étrangers Jour 1 : exo 2](../../../assets/pdf/2021_CentresEtrangers_1.pdf){ target=_blank }.
* [2021 Métropole Septembre Jour 2 : exo 2](../../../assets/pdf/2021_Metropole_Septembre_2.pdf){ target=_blank }.