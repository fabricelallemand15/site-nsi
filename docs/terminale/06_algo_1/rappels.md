---
title: S6 - Rappels d'algorithmique
niveau: Terminale
année: 2022/2023
---

Cette page regroupe quelques rappels importants. Revoir le cours de première pour les détails.

## 1. Terminaison et Correction

* Prouver la **terminaison** d'un algorithme, c'est prouver que l'algorithme se termine dans tous les cas. C'est notamment très important lorsque l'algorithme comporte des boucles conditionnelles ou des appels récursifs.
* Prouver la **correction** d'un algorithme, c'est prouver que l'algorithme résout bien le problème demandé.

Par exemple, dans le cas d'une boucle, on utilise un **invariant de boucle** : c'est une affirmation qui porte sur les valeurs des variables à l'intérieur de la boucle et qui reste vraie à la fin de chaque tour de la boucle.

**Il faut démontrer** :

1. **Initialisation** : l'affirmation est vraie avant le premier passage dans la boucle
2. **Conservation** : si l'affirmation est vraie avant une itération, alors elle sera aussi vraie après cette itération.
3. **Conclusion** : une fois la boucle terminée, l'affirmation est vraie.

!!! example "Exemple"
    Considérons l'algorithme suivant qui calcule la puissance entière d'un nombre :
    
    <div style="width: 50%; display: block; margin: 0 auto; border-left: solid; border-color: gray; padding-left: 5px;">
    **fonction** puissance(x : flottant, n : entier) : flottant<br>
        <span style="margin-left: 20px;">p $\leftarrow$ 1</span><br>
        <span style="margin-left: 20px;">compteur $\leftarrow$ 0</span><br>
        <span style="margin-left: 20px;">**tant que** compteur < n **faire**</span><br>
            <span style="margin-left: 40px;">compteur $\leftarrow$ compteur + 1</span><br>
            <span style="margin-left: 40px;">p $\leftarrow$ p * x</span><br>
        <span style="margin-left: 20px;">**fin tant que**</span><br>
        <span style="margin-left: 20px;">**retourner** p</span><br>
    </div>

    **Terminaison** : Au départ la variable $compteur$ est initialisée à 0. À chaque passage dans la boucle, sa valeur augmente d'une unité. La condition de sortie de boucle : $compteur\geqslant n$ sera donc réalisée en un nombre fini d'étapes (ici $n$ étapes) et donc l'algorithme se termine.

    **Correction** : Considérons la propriété $p=x^{compteur}$ et montrons qu'il s'agit d'un **invariant de boucle**. 
    
    * **Initialisation** : Cette propriété est vraie avec les valeurs initiales des variables car $x^0=1$ et $p=1$.
    * **Conservation** : Si nous avons $p=x^{compteur}$ avant une itération, alors nous avons $x^{compteur+1}=x^{compteur}\times x = p\times x$. le passage dans la boucle augmente $compteur$ de 1 et remplace $p$ par $p\times x$. Après l'itération, la propriété $p=x^{compteur}$ est donc encore vraie.
    * **Conclusion** : En sortie de boucle, on a donc $p=x^{compteur}$. Or on a aussi l'égalité $compteur = n$ qui a provoqué la sortie de boucle. Finalement, nous avons donc $p=x^n$, ce qui prouve que l'algorithme effectue bien l'opération attendue.
<!--  -->

## 2. Complexité

La durée d'exécution d'un programme traduisant un algorithme donné va dépendre des performances de la machine sur laquelle le programme est exécuté, mais aussi du **nombre d'instructions élémentaires** mobilisées lors de son exécution. Une partie de ce temps d'exécution provient donc de la façon dont l'algorithme est écrit et non de la façon dont il est programmé. 

On parle de **complexité temporelle** d'un algorithme (et non d'un programme) pour mesurer l'efficacité **intrinsèque** de l'algorithme. Dans la pratique, il s'agit de compter le nombre d'opérations élémentaires (affectations, comparaisons, calculs arithmétiques, ...) effectuées par l'algorithme.

La complexité en temps d'un algorithme dépend :

* de la taille des données passées en paramètres : plus ces données seront volumineuses, plus il faudra d'opérations élémentaires pour les traiter. On notera $n$ le nombre de données à traiter.
* de la donnée en elle-même, de la façon dont sont réparties les différentes valeurs qui la constituent. Par exemple, si on effectue une recherche séquentielle d'un élément dans une liste non triée, on parcourt un par un les éléments jusqu'à trouver, ou pas, celui recherché. Ce parcours peut s'arrêter dès le début si le premier élément est "le bon". Mais on peut également être amené à parcourir la liste en entier si l'élément cherché est en dernière position, ou même n'y figure pas.

Cette remarque conduit à préciser la définition de la complexité en temps. On peut en effet distinguer deux formes de complexité en temps :

* **la complexité dans le meilleur des cas** : c'est la situation la plus favorable, par exemple : recherche d'un élément situé à la première position d'une liste ;
* **la complexité dans le pire des cas** : c'est la situation la plus défavorable, par exemple : recherche d'un élément dans une liste alors qu'il n'y figure pas.

On calculera le plus souvent la complexité dans le pire des cas, car elle est la plus pertinente. Il vaut mieux en effet toujours envisager le pire.

### Ordres de grandeurs

Pour comparer des algorithmes, il n'est pas nécessaire de calculer la valeur exacte de la complexité, mais seulement un **ordre de grandeur asymptotique**, noté en mathématiques $\mathcal{O}$ (notation "grand O"). La définition rigoureuse de cette notation n'est pas au programme de NSI. Il faut cependant en avoir une idée intuitive : dire que la complexité d'un algorithme est en $\mathcal{O}(n^2)$, par exemple, signifie que cette complexité croît, lorsque $n$ devient grand, de la même façon que la fonction carré. Plus précisément, elle est majorée par une fonction du type $c\times n^2$, où $c$ est un réel positif.

Les classes de complexité les plus courantes sont les suivantes, de la meilleure à la pire :

|$\mathcal{O}$ | Type de complexité |Exemple|
| :----: | :----: | |
|$\mathcal{O}(1)$ | constante | Accès à une cellule de tableau|
|$\mathcal{O}(\log n)$ | logarithmique |Recherche dichotomique|
|$\mathcal{O}(n)$ | linéaire | Recherche du maximum dans un tableau non trié|
|$\mathcal{O}(n\log n)$ | quasi-linéaire | Tri fusion|
|$\mathcal{O}(n^2)$ | quadratique |Parcours d'un tableau à deux dimensions|
|$\mathcal{O}(n^3)$ | cubique |Parcours d'un tableau à trois dimensions|
|$\mathcal{O}(2^n)$ | exponentielle |Calcul des termes de la suite de Fibonacci de façon naïve récursive |
|$\mathcal{O}(n!)$ | factorielle |[Problème du voyageur de commerce](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_voyageur_de_commerce){target="_blank"} |

!!! example "Exemple"
    Reprenons l'algorithme du calcul de la puissance d'un nombre.

    <div style="width: 50%; display: block; margin: 0 auto; border-left: solid; border-color: gray; padding-left: 5px;">
    **fonction** puissance(x : flottant, n : entier) : flottant<br>
        <span style="margin-left: 20px;">p $\leftarrow$ 1</span><br>
        <span style="margin-left: 20px;">compteur $\leftarrow$ 0</span><br>
        <span style="margin-left: 20px;">**tant que** compteur < n **faire**</span><br>
            <span style="margin-left: 40px;">compteur $\leftarrow$ compteur + 1</span><br>
            <span style="margin-left: 40px;">p $\leftarrow$ p * x</span><br>
        <span style="margin-left: 20px;">**fin tant que**</span><br>
        <span style="margin-left: 20px;">**retourner** p</span><br>
    </div>

    Nous comptons la complexité en termes d'opérations arithmétiques : additions et multiplications. À chaque passage dans la boucle, nous avons deux opérations et la boucle est parcourue $n$ fois . Nous avons donc au total une complexité de $2n$ opérations arithmétiques, donc une complexité en $\mathcal{O}(n)$, linéaire.
<!--  -->