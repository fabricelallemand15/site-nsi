# S7-Traitement de données en tables - L'essentiel


* Les __tables de données__ sont très courantes : les données sont organisées en __enregistrements__ (ligne du tableau) qui sont des __p-uplets nommés__ (en pratique des dictionnaires) partageant les mêmes __attributs__ (entêtes de colonnes dans un tableau).
* Les  __tables de données__ sont souvent stockées sous forme de fichiers [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) : ce sont des fichiers textes où les  enregistrements sont des lignes dont les attributs sont séparés par un caractère __délimiteur__. 
* En Python, une table contenue dans  un fichier  [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) peut être représentée dans un __tableau de tableaux__ ou plutôt un __tableau de dictionnaires__. Le [module csv](https://docs.python.org/fr/3/library/csv.html) facilite les opérations d'importation et d'exportation de tables à partir ou   vers des fichiers [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values).

* Pour accéder aux données, il faut les rechercher et les regrouper suivant différents critères.

    * Lorsqu'on souhaite accéder à un ou plusieurs enregistrements vérifiant un critère, on réalise une **sélection**.
    * Lorsqu'on souhaite accéder à toutes les données d'une colonne on réalise une **projection**.
    * Ces opérations peuvent être effectuées en faisant une boucle sur l'ensemble des enregistrements ou en définissant un tableau en compréhension.

* Pour trier les données, on utilise la fonction intégrée ``sorted`` en précisant éventuellement l'ordre inversé (``reverse=True``) et la fonction critère de classement (``key=...``).

* On peut fusionner deux tables pour en créer une troisième. Cette opération est appelée **jointure**. Elle est effectuée en Python en réalisant deux boucles imbriquées.

!!! success "Ce qu'il faut savoir faire"

    * [ ] Importer une table depuis un fichier texte tabulé ou un fichier CSV.
    * [ ] Rechercher les lignes d'une table vérifiant des critères exprimés par une condition logique.
    * [ ] Trier une table suivant une colonne.
    * [ ] Construire une nouvelle table en combinant les données de deux tables.

