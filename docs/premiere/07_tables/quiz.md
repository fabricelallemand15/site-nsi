# Quiz : Données en tables


1. Dans la plupart des fichiers CSV, que contient la première ligne ?

      * [ ] **Réponse A :** des notes concernant la table de données
      * [ ] **Réponse B :** les sources des données
      * [ ] **Réponse C :** les descripteurs des champs de la table de données
      * [ ] **Réponse D :** l'auteur de la table de données

2. Laquelle de ces affirmations est vraie ?

      * [ ] **Réponse A :** on ne peut accéder au contenu d'un fichier CSV que par
      l'intermédiaire d'un programme Python
      * [ ] **Réponse B :** CSV est un format de chiffrement des données
      * [ ] **Réponse C :** le format CSV a été conçu pour assurer la confidentialité d'une
      partie du code d'un programme
      * [ ] **Réponse D :** les fichiers CSV sont composés de données séparées par des caractères
      comme des virgules

3. Qu'est-ce que le format de fichier CSV ?

      * [ ] **Réponse A :** un format de fichier mis au point par Microsoft pour Excel
      * [ ] **Réponse B :** un format de fichier pour décrire une base de données
      * [ ] **Réponse C :** un format de fichier où les données sont séparées par un caractère tel
      qu'une virgule
      * [ ] **Réponse D :** un format de fichier décrivant une page Web

1. On considère l'extraction suivante d'une base de données des
départements français. Cette extraction a ensuite été sauvegardée dans
un fichier texte.

    ~~~ title="CSV"
    "1","01","Ain","AIN","ain","A500"
    "2","02","Aisne","AISNE","aisne","A250"
    "3","03","Allier","ALLIER","allier","A460"
    "4","04","Alpes-de-Haute-Provence","ALPES-DE-HAUTE-PROVENCE","alpes-de-haute-provence","A412316152"
    "5","05","Hautes-Alpes","HAUTES-ALPES","hautes-alpes","H32412"
    ~~~

    On considère le code suivant :

    ~~~python
    import csv

    f = open('departements.csv', mode='r', encoding='UTF-8', newline='')
    lesLignes = csv.reader(f)
    for uneLigne in lesLignes:
        print(uneLigne[3])
    f.close()
    ~~~

    Que va produire l'exécution de ce code ?

    * [ ] **Réponse A :**  L'affichage de la troisième colonne à savoir le nom du département
    avec une majuscule initiale
    * [ ] **Réponse B :** L'affichage de tout le contenu du fichier
    * [ ] **Réponse C :** L'affichage du nombre total de départements figurant dans le fichier
    * [ ] **Réponse D :** L'affichage de la quatrième colonne, à savoir le nom du département
    tout en majuscules

2. On dispose du fichier `'info.csv'` donné ci-dessous :

    ``` title="CSV"
    nom, prenom, naissance, deces
    lovelace, ada, 1815, 1852
    von neumann, john, 1903, 1957
    turing, alan, 1912, 1954
    mccarthy, john, 1927, 2011
    floyd, robert, 1936, 2001
    ```

    Le programme ci-dessous nous permet de créer un tableau à partir de ce
    fichier.

    ~~~python
    file = open("info.csv", "r")
    firstLine = file.readline()  # chargement de la ligne d'entête
    tableau = [line.split(',') for line in file]  # chargement des données
    ~~~

    Les index des lignes de ce tableau vont :

    * [ ] **Réponse A :**  de 0 à 3
    * [ ] **Réponse B :** de 1 à 4
    * [ ] **Réponse C :**  de 0 à 4
    * [ ] **Réponse D :** de 0 à 5

3. Quelle expression Python permet d'accéder au numéro de téléphone de Tournesol, sachant que le répertoire a été défini par l'affectation suivante :

    ~~~python
    repertoire = [{'nom': 'Dupont', 'tel': '5234'},
              {'nom': 'Tournesol', 'tel': '5248'},
              {'nom': 'Dupond', 'tel': '3452'}]
    ~~~

    * [ ] **Réponse A :**  `repertoire['Tournesol']`
    * [ ] **Réponse B :**  `repertoire['tel'][1]`
    * [ ] **Réponse C :**  `repertoire[1]['tel']`
    * [ ] **Réponse D :**   `repertoire['Tournesol'][tel]`
