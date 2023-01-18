---
title: S3-Bases de données
---

## Programme

Le développement des traitements informatiques nécessite la manipulation de données de
plus en plus nombreuses. Leur organisation et leur stockage constituent un enjeu essentiel
de performance.

Le recours aux bases de données relationnelles est aujourd’hui une solution très répandue.
Ces bases de données permettent d'organiser, de stocker, de mettre à jour et d'interroger
des données structurées volumineuses utilisées simultanément par différents programmes
ou différents utilisateurs. Cela est impossible avec les représentations tabulaires étudiées en
classe de première.

Des systèmes de gestion de bases de données (SGBD) de très grande taille (de l'ordre du
pétaoctet) sont au centre de nombreux dispositifs de collecte, de stockage et de production
d'informations.

L'accès aux données d'une base de données relationnelle s'effectue grâce à des requêtes
d'interrogation et de mise à jour qui peuvent par exemple être rédigées dans le langage SQL
(Structured Query Language). Les traitements peuvent conjuguer le recours au langage SQL
et à un langage de programmation.

Il convient de sensibiliser les élèves à un usage critique et responsable des données.

|**Contenus** |**Capacités attendues** |**Commentaires**|
|---|---|---|
|Modèle relationnel : relation, attribut, domaine, clef primaire, clef étrangère, schéma relationnel.|Identifier les concepts définissant le modèle relationnel.|Ces concepts permettent d'exprimer les contraintes d'intégrité (domaine, relation et référence).|
|Base de données relationnelle.|Savoir distinguer la structure d'une base de données de son contenu. Repérer des anomalies dans le schéma d'une base de données.| La structure est un ensemble de schémas relationnels qui respecte les contraintes du modèle relationnel. Les anomalies peuvent être des redondances de données ou des anomalies d'insertion, de suppression, de mise à jour. On privilégie la manipulation de données nombreuses et réalistes.|
|Système de gestion de bases de données relationnelles.| Identifier les services rendus par un système de gestion de bases de données relationnelles : persistance des données, gestion des accès concurrents, efficacité de traitement des requêtes, sécurisation des accès.| Il s'agit de comprendre le rôle et les enjeux des différents services sans en détailler le fonctionnement.\
|Langage SQL : requêtes d'interrogation et de mise à jour d'une base de données.|Identifier les composants d'une requête. Construire des requêtes d'interrogation à l'aide des clauses du langage SQL : SELECT, FROM, WHERE, JOIN. Construire des requêtes d'insertion et de mise à jour à l'aide de : UPDATE, INSERT, DELETE.| On peut utiliser DISTINCT, ORDER BY ou les fonctions d'agrégation sans utiliser les clauses GROUP BY et HAVING.|
