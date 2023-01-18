_Les exercices précédés du symbole :fontawesome-solid-computer: sont à faire sur machine, en sauvegardant le fichier si nécessaire._

_Les exercices précédés du symbole :octicons-pencil-16: doivent être résolus par écrit._

## :fontawesome-solid-computer: Exercice 1

Dans cet exercice, on utilise le fichier [CSV listant les établissements scolaires du Cantal](../../assets/CSV/educ_cantal.csv) déjà rencontré dans le cours (Source : https://www.data.gouv.fr/fr/). Ce fichier utilise l'encodage UTF-8.

**:warning: Avertissement :warning:** : Dans cet exercice, certaines questions nécessitent la comparaison de valeurs **numériques** alors que les données sont toutes au format chaîne de caractères. Il faut donc pense, si besoin, à convertir les données au format numérique adéquat.

1. Importer ce fichier dans un programme Python et indexer les données sous la forme d'un tableau de dictionnaires nommé ``table_educ``.
2. Combien d'enregistrements contient cette table ?
3. Opérations de **sélection** :

    3. En utilisant une boucle, écrire des instructions permettant de définir le tableau ``etab_AURILLAC`` contenant les enregistrements qui correspondent à des établissement situés à Aurillac.
    4. En utilisant une définition de tableau en compréhension, écrire une instruction permettant d'obtenir le tableau contenant les enregistrements de tous les établissements privés du Cantal.

4. Opérations de **projection** :

    5. En utilisant une boucle, écrire des instructions permettant d'obtenir le tableau de tous les codes UAI des établissements du Cantal.
    6. En utilisant une définition de tableau en compréhension, écrire une instruction permettant d'obtenir le tableau de tous les noms d'établissements utilisés dans le Cantal.
    7. On souhaite obtenir le tableau des noms de communes dans lesquelles existe au moins un établissement scolaire, sans répétition (une commune dans laquelle existent trois établissements ne doit apparaître qu'une fois). Trouver une solution pour ce faire.

4. Opérations de **tri** :

    1. Trier les données par ordre croissant de code postaux.
    2. Trier les données d'Ouest en Est, puis du Nord au Sud.
    3. Trier les données suivant deux critères : d'abord la commune, puis à l'intérieur de chaque commmune, selin le statut : public en premier, privé en dernier.

5. Opération de **jointure** :

    1. Importer le fichier CSV [``population_Cantal.csv``](../../assets/CSV/population_Cantal.csv) et indexer les données sous la forme d'un tableau de dictionnaires nommé ``population`` (Source des données : Insee, Recensement de la population 2019). Ce fichier utilise l'encodage UTF-8. 
    
        :warning: Ouvrir d'abord le fichier dans Notepad ++ et observer le délimiteur utilisé, le nom des attributs, ...
    
    2. Combien d'enregistrements contient cette table ?
    3. Écrire les instructions permettant d'effectuer la jointure entre les tables ``table_educ`` et ``population`` sous la forme d'une table nommée ``new_table`` qui reprend tous les attributs de la table ``table_educ`` en ajoutant à chaque enregistrement la population de la commune considérée sous la forme d'un champ nommé "population".
    4. Enregistrer les données de la table ``new_table`` dans un nouveau fichier CSV nommé ``exo1_jointure.csv``.
    5. Ouvrir ce fichier dans un tableur. Certains enregistrements n'ont pas de valeur pour le champ "population". Chercher la cause de cette anomalie et essayer de la corriger.

!!! bug "À retenir"
    Lorsqu'on rapproche deux tables, il faut toujours veiller à la cohérence des noms des attributs, des formats des données (domaines de valeurs), aux doublons, ...

    Cela implique souvent un travail préliminaire de **formatage** des données avant de passer à leur exploitation proprement dite. Ce formatage a été fait pour vous dans cet exercice, sauf pour le petit problème restant qui est apparu dans la dernière question.

---------------------------------------

## :fontawesome-solid-computer: Exercice 2

Pour s'entraîner, on reprend le fichier [``population_Cantal.csv``](../../assets/CSV/population_Cantal.csv). Pour chaque question, écrire des instructions Python permettant d'y répondre. Vous pourrez dans certains cas proposer plusieurs solutions.

1. Construire la table des mêmes données, mais triées par population décroissante.
2. Faire le tableau des noms de communes dont le nom **complet** se termine par "AC". Combien y en a-t-il ?
3. Construire la table des enregistrements correspondant aux communes dont la population est comprise au sens large entre 1000 et 2000 habitants.
4. Question ouverte : construire le tableau des noms de communes qui sont composés de plusieurs mots.

