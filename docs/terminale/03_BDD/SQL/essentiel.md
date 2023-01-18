# S3 - Bases de données - SQL - L'essentiel

Base de donnée utilisée dans les exemples : [Cantal.db](../../../assets/BDD/Cantal.db) contenant les deux tables "etablissements" et "communes".

![](../../../assets/images/BDD11.png)

## 2.1. Requêtes d'interrogation

### Requêtes simples

````SQL
SELECT *
FROM communes
````

````SQL
SELECT Nomdelacommune, Populationtotale
FROM communes
````

### Requêtes conditionnelles

````SQL
SELECT Nomdelacommune
FROM communes
WHERE Populationtotale > 2500
````

````SQL
SELECT Nomdelacommune
FROM communes
WHERE Populationtotale > 5000 OR Nomdelacommune LIKE "%Z%"
````

### Ordonner les résultats

````SQL
SELECT Nomdelacommune, Populationtotale
FROM communes
WHERE Populationtotale > 5000 ORDER BY Populationtotale
````

Pour ordonner les résultats dans l'ordre décroissant, on ajoute **DESC**.

### Éviter les doublons

````SQL
SELECT DISTINCT codepostal
FROM communes
ORDER BY codepostal
````

### Les jointures

Une requête dans une base de donnée peut nécessiter de regrouper des données provenant de différentes tables.

!!! info "Définition"
    Une requête combinant les données de plusieurs relations (tables) est appelée une **jointure**.

````sql
SELECT etablissements.nom, communes.Nomdelacommune 
FROM etablissements JOIN communes 
ON etablissements.id_commune = communes.Codecommune
````

````sql
SELECT etablissements.nom, communes.Nomdelacommune 
FROM etablissements JOIN communes 
ON etablissements.id_commune = communes.Codecommune
WHERE etablissements.nom LIKE "Collège%"
````

## 2.2. Requêtes de mise à jour

### Ajouter une entrée

````sql
INSERT INTO etablissements
(code, nom, statut, id_commune, latitude, longitude)
VALUES
("0159999Z", "Lycée hôtelier du Cantal", "Public", 85, 44.8572222, 2.5427778)
````

### Modifier une entrée existante

````sql
UPDATE etablissements
SET code="0158888Z", statut="Privé"
WHERE code="0159999Z"
````

### Supprimer une entrée

````sql
DELETE FROM etablissements
WHERE code="0158888Z"
````

## 2.3. Quelques compléments

### Calculer une somme

````sql
SELECT SUM(Populationtotale)
FROM communes
````

### Calculer une moyenne

````sql
SELECT AVG(Populationtotale)
FROM communes
where Codepostal=15250
````

### Calculer un minimum ou un maximum

````sql
SELECT Nomdelacommune, Populationtotale
FROM communes
WHERE Populationtotale = (SELECT MIN(Populationtotale) FROM communes)
````

### Compter des données

````sql
SELECT COUNT(*)
FROM etablissements
````

````sql
SELECT COUNT(*)
FROM communes
WHERE Codepostal=15250
````

````sql
SELECT COUNT(DISTINCT nom)
FROM etablissements
````

````sql
SELECT COUNT(*)
FROM etablissements JOIN communes 
ON etablissements.id_commune=communes.Codecommune
WHERE (etablissements.nom LIKE "Collège%") AND communes.Nomdelacommune="AURILLAC"
````
