---
title: S4-Représentation de données - types construits
---

## Programme

À partir des types de base se constituent des types construits, qui sont introduits au fur et à mesure qu'ils sont nécessaires.

Il s'agit de présenter tour à tour les p-uplets (tuples), les enregistrements qui collectent des valeurs de types différents dans des champs nommés et les tableaux qui permettent un accès calculé direct aux éléments. En pratique, on utilise les appellations de Python, qui peuvent être différentes de celles d'autres langages de programmation.

| **Contenus** | **Capacités attendues** | **Commentaires** |
|------- |--------- |------ |
|p-uplets. p-uplets nommés| Écrire une fonction renvoyant un p-uplet de valeurs.| |
| Tableau indexé, tableau donné en compréhension| Lire et modifier les éléments d'un tableau grâce à leurs index. Construire un tableau par compréhension. Utiliser des tableaux de tableaux pour représenter des matrices : notation a [i] [j]. Itérer sur les éléments d'un tableau.| Seuls les tableaux dont les éléments sont du même type sont présentés. Aucune connaissance des tranches (slices) n'est exigible. L'aspect dynamique des tableaux de Python n'est pas évoqué. Python identifie listes et tableaux. Il n'est pas fait référence aux tableaux de la bibliothèque NumPy.|
|Dictionnaires par clés et valeurs| Construire une entrée de dictionnaire. Itérer sur les éléments d'un dictionnaire.| Il est possible de présenter les données EXIF d'une image sous la forme d'un enregistrement. En Python, les p-uplets nommés sont implémentés par des dictionnaires. Utiliser les méthodes keys(), values () et items ().|
