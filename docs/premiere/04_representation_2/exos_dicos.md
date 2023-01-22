_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :octicons-pencil-16: Exercice 1

1. Le dictionnaire suivant donne des informations sur l'adresse d'une personne.

    ``adresse = {("numero", 13), ("rue", "rue des Lilas"), ("codepostal", 78340), ("ville", "Pétaouchnoc"){``

    Cette instruction ne respecte pas la syntaxe du langage Python, la corriger.

2. Le dictionnaire suivant donne des informations sur l'identité d'une personne.

    ``identite = {"nom":"Durand", "prenom":"Christophe", "prenom":"Jean", 52:"age"}``

    Expliquer ce qui n'est pas correct dans cette déclaration et corriger.

----------------------------------------

## :octicons-pencil-16: Exercice 2

Un film peut être défini par un certain nombre de caractéristiques : son titre, son réalisateur, sa durée, son année de sortie. On définit pour cela le dictionnaire suivant :

````python
film = {"titre":"Star Wars", "auteur":"G.Lucas", "duree":121, "annee":1977}
````

1. Corriger l'instruction suivante : ``print("Mon film préféré", film[0], "est sorti en", film("annee"), "!")``
2. Qu'est-ce qui est affiché par les instructions suivantes :

    ````python
    print(film["auteur"],"est mon dieu vivant.")
    print(film["titre"],"c'est",film["durée"],"minutes d'extase !")
    ````

3. Qu'est-ce qui est affiché par les instructions suivantes ?

    ````python
    print("Qui est l'",film["G.Lucas"],"de ce film ?")
    print(film["acteur"],"est trop beau dans de ce film !")
    ````

-------------------------------------------------------------------

## :octicons-pencil-16: Exercice 3

Le dictionnaire suivant donne les articles choisis par un visiteur sur un site internet, et la quantité de chaque article.

````python
panier = {"stylo": 10, "crayon": 15, "gomme": 3, "tube de colle": 2, "cahier": 5}
panier["gomme"] = panier["gomme"] + 2
panier["crayon"] = 12
del panier["tube de colle"]
panier["scoth"] = 1
````

Quels sont les éléments du dictionnaire après l'exécution de ces instructions ?

---------------------------------------

## :fontawesome-solid-computer: Exercice 4

À l'issue d'une élection à scrutin uninominal, on récupère un tableau contenant tous les noms inscrits sur les bulletins trouvés dans l'urne :

````python
urne = ["Maurice","Roger","Maurice","Marie","Marie","Jeanne","Roger",
             "Roger","Maurice","Roger","Maurice","Marie","Marie","Roger","Marie"]
````

Nous voulons créer un dictionnaire qui à chaque nom associera son nombre de voix : ``scorescandidats = {}``.

Par exemple, Maurice a obtenu 4 voix, un des couples du dictionnaire sera : ``"Maurice": 4``

L'avantage d'un dictionnaire est qu'il n'y a pas besoin de savoir à l'avance qui sont les candidats, ni même combien il y en a.

Copier ce tableau dans un fichier python. Créer un dictionnaire vide, et parcourir le tableau.

Pour chaque élément du tableau : 

* soit le nom n'est pas encore dans le dictionnaire, et dans ce cas on l'ajoute au dictionnaire en lui donnant 1 première voix ;
* soit le nom est déjà dans le dictionnaire, et dans ce cas on augmente son nombre de voix de 1.

Écrire et tester un programme réalisant ces opérations.

---------------------------------------------------

## :fontawesome-solid-computer: Exercice 5

Le dictionnaire suivant donne les noms et les nationalités des visiteurs d'un site.

````python
visiteurs = {"STARK": "usa", "TOR": "rus", "MACRON": "fr", "JOHNSON": "en",
             "DUBOIS": "fr", "MACARTHUR": "usa", "HOLMES": "en",
             "BERNARD": "fr", "DURAND": "fr", "HOLLANDE": "fr",
             "OBAMA": "usa", "POPOV": "rus"}
````

Écrire une fonction qui renvoie le nombre de clients français.

----------------------------------------------------

## :fontawesome-solid-computer: Exercice 6

Le dictionnaire suivant donne la liste des couples identifiant/mots de passe des adhérents d'un site.

````python
identifiants = {"joe.durand": "Joe-la-terreur",
                "dupond15": "Dd152017",
                "bfournier": "#14;P@gh",
                "bonnetjohn": "Kamikaze2038",
                "d.dubois": "15022001",
                "martin": "youhou",
                "Bernard.71": "bebertpower2001"}
````

Par exemple, le premier adhérent a pour identifiant "joe.durand" et son mot de passe est  "Joe-la-terreur".

Écrire un programme qui demande à l'utilisateur de saisir son identifiant et son mot de passe. On vérifie ensuite si ce couple identifiant/mot de passe est présent dans le dictionnaire. Si c'est le cas, on affiche le message "Identification réussie, bienvenue sur notre site", et sinon le message "Nous ne vous connaissons pas".

-------------------------------------------

## :fontawesome-solid-computer: Exercice 7

On donne ci-dessous un dictionnaire de conversion du binaire en hexadécimal, dont les couples sont composés d'un nombre binaire et de sa conversion en hexadécimal :

````python
Convbinaire = {"0000": "0", "0001": "1", "0010": "2", "0011": "3", "0100": "4", "0101": "5",
               "0110": "6", "0111": "7", "1000": "8", "1001": "9", "1010": "A", "1011": "B",
               "1100": "C", "1101": "D", "1110": "E", "1111": "F"}
````

Écrire une fonction qui crée le dictionnaire inversé ``Convhexa`` dont les couples sont composés d'un nombre hexadécimal et de sa conversion en binaire.

-----------------------------------------------------

## :fontawesome-solid-computer: Exercice 8

Voici un tableau qui répertorie des informations sur les adhérents d'un site internet, certaines informations n'étant pas complètes :

|Nom|	Sexe	|Avatar	|Age|	Année d'adhésion|	Mot de passe|
|:---|:---|:---|:---|:---|:---|
|	|F	|Bebert|	19|	2019|	Bibi2019*|
|	|	|Bonbon	|	|2017|	45trd ;*%GR|
|DUBET|	M|	Bud	|17	|2018|	Bud17|
|DURAND|	M|	|	|	2018|	OuahOuah|
|FOURNIER|	F|	|	|	2016|	12051995|
|	|	|Tinmar	|	|2017|	Titidu15|

On peut le représenter par un tableau de dictionnaires partageant les mêmes clés (un dictionnaire pour chaque adhérent) :

````python
ListeAdherents = [
    {"sexe": "F", "avat": "Bebert", "age": 19, "an": 2019, "pw": "Bibi2019*"},
    {"avat": "Bonbon", "an": 2017, "password": "45trd ;*%GR"},
    {"nom": "DUBET", "sexe": "M", "avat": "Bud", "age": 17, "an": 2018, "pw": "Bud17"},
    {"nom": "DURAND", "sexe": "M", "an": 2018, "pw": "OuahOuah"},
    {"nom": "FOURNIER", "sexe": "F", "an": 2016, "pw": "12051995"},
    {"avat": "Tinmar", "an": 2017, "password": "Titidu15"}]
````

1.	Sans utiliser l'ordinateur, prévoir ce qui est affiché par les instructions suivantes :

    * ``print(ListeAdherents[1])``
    * ``print(ListeAdherents["avat"][2])``
    * ``print(ListeAdherents[2]["age"])``
    * ``print(ListeAdherents["pw"])``
    * ``print(ListeAdherents[4]["avat"])``

2.	Écrire une fonction qui renvoie la liste des avatars de tous les adhérents **qui en ont un** (utiliser une boucle for).

---------------------------------------------

## :octicons-pencil-16: Exercice 9 : QCM

1. On définit :

    ````python
    T = [{'fruit': 'banane', 'nombre': 25}, {'fruit': 'orange', 'nombre': 124},
        {'fruit': 'pomme', 'nombre': 75}, {'fruit': 'kiwi', 'nombre': 51}] 
    ````

    Quelle expression a pour valeur le nombre de pommes ?

    * [ ] ``T[2]['nombre']``
    * [ ] ``T[2,'nombre']``
    * [ ] ``T[3]['nombre']``
    * [ ] ``T[3,'nombre']``

2. On exécute le script suivant :

    ````python
    inventaire = {'pommes': 430, 'bananes': 312,
                'oranges': 274, 'poires': 137}

    stock = 0
    for fruit in inventaire.keys():
        if fruit != 'bananes':
            stock = stock + inventaire[fruit]
    ````

    Que contient la variable ``stock`` à la fin de cette exécution ?

    * [ ] ``{430, 274, 137}``
    * [ ] ``312``
    * [ ] ``841``
    * [ ] ``{ 'pommes', 'oranges', 'poires' }``

3. On dispose du dictionnaire ``regions`` ci-dessous :

    ````python
    regions = {'Mayotte': 376, 'Pays de la Loire': 32082,
            'La Réunion': 2504, 'Grand Est': 57441,
            'Martinique': 1128, 'Corse': 8680,
            'Bretagne': 27208, 'Nouvelle-Aquitaine': 84036}
    ````

    Parmi les instructions suivantes, laquelle permet d'ajouter une nouvelle région ?

    * [ ] ``INSERT "'Hauts de France':31806" INTO regions``
    * [ ] ``regions = dict(['Hauts de France'] = 31806)``
    * [ ] ``regions('Hauts de France') = 31806``
    * [ ] ``regions['Hauts de France'] = 31806``

4. On définit :

    ````python
    contacts = {'Toto': 'toto@nsi.fr', 'Chloé': 'chloe@nsi.com',
                'Paul': 'paul@nsi.net', 'Clémence': 'clemence@nsi.org'}
    ````

    Parmi les propositions suivantes, laquelle est exacte ?

    * [ ] 'Chloé' est une valeur de la variable contacts
    * [ ] 'Chloé' est une clé de la variable contacts
    * [ ] 'Chloé' est un attribut de la variable contacts
    * [ ] 'Chloé' est un champ de la variable contacts

5. On considère le code suivant : 

    ````python
    D = {'a': '1', '2': 'a', 'b': 'a', 'c': '3'}
    ````

    Que vaut ``D['a']`` à la fin de son exécution ?

    * [ ] ``'1'``
    * [ ] ``2``
    * [ ] ``['2', 'b']``
    * [ ] ``['1', '3']``
