---
title: "Exercices : le protocole HTTP"
niveau: Première NSI
année: 2022-2023
---

## :fontawesome-solid-computer: Exercice 1 : Utilisation des outils de développement du navigateur

Avec un navigateur Web, demander la page  d'adresse [https://nsi.flallemand.fr/divers/mapageweb.html](https://nsi.flallemand.fr/divers/mapageweb.html). Ouvrir la fenêtre d'outils de développement en appuyant sur la touche de fonction `F12` et sélectionner l'onglet Réseau. On peut voir les entêtes de la requête et de la réponse HTTP. On s'intéresse ici à la requête concernant la page HTML elle-même.

1. La requête a-t-elle abouti ? Justifier.
1. La communication est-elle sécurisée ?
1.  Quelles informations **sur le client** sont transmises au serveur dans l'entête de la requête ?
1.  Quelles informations **sur le serveur** sont transmises au client dans l'entête de la réponse ?
1.  Effectuer une nouvelle requête avec l'URL [https://nsi.flallemand.fr/Divers/mapageweb.html](https://nsi.flallemand.fr/Divers/mapageweb.html). Quel est le code d'état de la réponse ? Explication ?
1.  Effectuer une nouvelle requête avec l'URL [https://nsi.flallemand.fr/divers/interdit/](https://nsi.flallemand.fr/divers/interdit/). Quel est le code d'état de la réponse ? Explication ?

## :fontawesome-solid-computer: Exercice 2 : HTTP et python

!!! abstract "Le module python `requests`"

    Il est possible d'utiliser Python pour établir une connexion avec un serveur web. On peut pour cela utiliser le module `requests` (requêtes en anglais). On travaille ci-dessous dans la console Python.

    ```pycon
    >>> import requests
    >>> reponse = requests.get("http://www.delafond.org/survielinux/") # envoi d'un requête GET
    >>> reponse  # la connexion est établie correctement (200 signifie OK)
    <Response [200]>
    >>> reponse.request.headers # entête de la requête
    {'User-Agent': 'python-requests/2.28.1', 'Accept-Encoding': 'gzip, deflate, br', 'Accept': '*/*', 'Connection': 'keep-alive'}
    >>> reponse.headers # l'entête de la réponse du serveur
    {'Date': 'Thu, 03 Nov 2022 21:31:47 GMT', 'Content-Type': 'text/html', 'Transfer-Encoding': 'chunked',
     'Connection': 'keep-alive', 'Last-Modified': 'Sun, 28 Mar 2010 21:22:16 GMT', 'ETag': '"681c5-482e2fd9d3200-gzip"',
     'Accept-Ranges': 'bytes', 'Vary': 'Accept-Encoding', 'Content-Encoding': 'gzip', 'server': 'nginx'}
    >>> reponse.content
    b'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">\n<html>\n<head>\n  
    <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">\n  
    <title>Guide de Survie du D\xc3\xa9butant sous Linux</title>\n  <meta name="CREATED" content="19981217;15162800">\n  
    <meta name="CHANGEDBY" content="G\xc3\xa9rard Delafond">\n  <meta name="CHANGED" content="20050528;7341900">\n  
    <style>\n  <!--\n@page { size: 21cm 29.7cm }\n-->\n\n  </style>\n</head>\n\n<body lang="fr-FR" 
    background="pics/backdrop.png" dir="ltr">\n<p><br>\n<br>\n</p>\n\n<h1><img src="pics/Survie330.jpg" name="Image1" 
    alt="Logo_survie"\nalign="left" width="799" height="280" border="0"><br clear="left">\nGuide de survie sous Linux:</h1>
    ... # réponse tronquée ...
    ```

    On peut voir que la connexion est bien établie (code 200) entre le client (Python lui même : User-Agent python) et le serveur (nommé ici nginx) qui héberge le site.

    Le contenu est en html, comme on s'y attend

    La page a été modifiée pour la dernière fois en mars 2010.

    Et tout un tas d'information moins pertinentes.

    Le contenu de la réponse est le code HTML lui-même.
<!--  -->

1. Reproduire les commandes présentées ci-dessus pour joindre successivement : https://google.com et https://google.com/azeaze.
2. Comparer les codes réponses obtenus dans les deux cas. Que signifient-ils ? Que peut-on en déduire concernant la page https://google.com/azeaze ?
4. Mesurez la longueur du contenu de la réponse dans les deux cas. Comment expliquer cette différence ?