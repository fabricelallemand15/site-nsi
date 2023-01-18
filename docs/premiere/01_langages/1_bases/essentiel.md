Python est un langage de programmation créé en 1989.

## Variables et affectation

On affecte une valeur à une variable avec le signe `=`. Les noms de variables doivent être bien choisis, auto descriptifs. Ils ne doivent pas commencer par un chiffre.

Le typage est dynamique : inutile de déclarer le type d'une variable avant de l'affecter.

Types standard : entiers : `int` ; flottants : `float` ; chaînes de caractères : ``str``.

Pour suivre l'évolution de l'état des variables, il est souvent utile de dresser un tableau d'état des variables. On peut aussi utiliser le mode de débogage pas à pas de l'IDE utilisé.

## Opérations sur les chaînes de caractères

Le signe ``+`` entre deux chaînes correspond à l'opération de concaténation (mise bout à bout).

Les ``fstrings`` sont pratiquent pour insérer la valeur d'une variable dans une chaîne de caractère : ``f"Bonjour {nom}"``.

La fonction ``input`` permet une entrée de l'utilisateur : elle renvoie toujours un résultat du type ``str``.

## Booléens

Deux valeurs : ``True`` ou ``False`` ; des opérateurs logiques ``<``, ``>``, ``<=``, ``>=``, ``==`` et ``!=`` auxquels s'ajoutent ``and``, ``or`` et ``not``.

## Instructions conditionnelles

````py
if test1:
    instruction1
elif test2:
    instruction2
elif tes3:
    instruction3
else:
    instruction4
````

## Boucle conditionnelle

````py
while expression:
    instruction1
    instruction2
suite programme
````

## Boucle bornée

````py
for truc in machin:
    instruction1
    instruction2
suite programme
````

!!! note "Utilisation de la fonction `range()`"
	* `range(n)` génère une séquence de nombres entiers en commençant par 0 et jusqu'à $n$ **exclu** ;
	* `range(k, n)` génère une séquence de nombres entiers en commençant par $k$ et jusqu'à $n$ **exclu** ;
	* `range(k, n, p)`génère une séquence de nombres entiers en commençant par $k$ et jusqu'à $n$ **exclu**, avec un pas de $p$ ;

## Fonctions

````py
def ma_fonction(liste des arguments de la fonction) :
    ...
    # groupe d'instructions
    ...
````

La première ligne, introduite par `def` est l'**entête** ou la **signature** de la fonction.

## Utilisation de bibliothèques

Importation en début de programme : 

* ``import math`` nécessite ensuite un appel avec la notation pointée ``math.pi``
* ``import turtle as tt`` : même chose avec un alias ``tt.penup()``
* import de tout un module (pas besoin de notation pointée) : ``from random import *``, utilisation : ``a = randint(1,6)``
* import d'une fonction particulière : ``from math import sqrt``, utilisation : ``a = sqrt(2)``

## Variables locales et variables globales

!!! note "À retenir"
	Lorsqu'on écrit un programme, python crée un **espace de noms** ( _namespace_ ) dans lequel les noms des variables et des fonctions définies dans ce programme sont stockés.

	À l'intérieur de chaque fonction, il est possible de définir aussi des variables. Un nouvel espace de noms, **complètement indépendant** de l'espace de noms principal est crée pour chaque fonction.

	Par conséquent, une variable définie à l'intérieur d'une fonction n'est pas accessible depuis le programme principal et elle n'existe plus lorsque l'exécution de la fonction est terminée (même si elle porte le même nom qu'une variable du programme principal). On dit qu'il s'agit d'une variable **locale**.
