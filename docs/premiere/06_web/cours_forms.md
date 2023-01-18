---
title: "Formulaires : Explications et compléments"
niveau: Première NSI
année: 2022-2023
---

Les formulaires Web sont l'un des principaux points d'interaction entre un utilisateur et un site Web. Les formulaires permettent aux utilisateurs de saisir des données, qui sont généralement envoyées à un serveur Web pour traitement et stockage, ou utilisées côté client pour mettre à jour immédiatement l'interface d'une manière ou d'une autre (par exemple, ajouter un autre élément à une liste, ou afficher ou masquer une fonctionnalité de l'interface utilisateur).

## 1. De nouveaux éléments HTML

La création de formulaire repose sur l'utilisation de nouveaux éléments HTML, parmi lesquels :

* **`<form>`** : élément qui contient tous les autres éléments de formulaire.
* **`<input>`** : zone de texte où l'utilisateur peut écrire un texte court. Cet élément possède un attribut particulier nommé **type** qui modifie beaucoup son comportement. Par exemple, `type = "email"` obligera l'utilisateur à entrer une adresse mail bien formatée. Voir [cette page](https://developer.mozilla.org/fr/docs/Learn/Forms/HTML5_input_types){target="_blank"} pour découvrir d'autres valeurs possibles de l'attribut **type**.
* **`<button>`** : bouton cliquable qui, dans le cadre des formulaires, peuvent avoir l'attribut `type="submit"` pour servir à envoyer les données du formulaire, ou `type="reset"` pour servir à vider tous les champs du formulaire.

Il existe bien d'autres éléments de formulaire, il n'est pas question d'en faire une liste complète ici. Voir les ressources supplémentaires en bas de page pour en savoir plus.

## 2. Fonctionnement d'un formulaire

Pour comprendre le fonctionnement d'un formulaire, il faut se souvenir de l'architecture client/serveur déjà évoquée.

![image client serveur](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mod%C3%A8le-client-serveur.svg/1920px-Mod%C3%A8le-client-serveur.svg.png){width="50%"}

Le formulaire, permet de transmettre des informations à un **serveur**. Ces informations sont envoyées par le **client** (le navigateur) lorsque le bouton de type `submit` est cliqué.

Comme nous l'avons vu dans [l'activité](acti4_forms.md){target="_blank"}, les attributs **action** et **method** de l'élément **`<form>`** définissent le fonctionnement du formulaire :

* **action** a pour valeur l'URL du fichier auquel sera envoyé le formulaire. Ce fichier est un programme écrit dans un langage de script comme PHP ou Python, qui va prendre en entrée les paramètres du formulaire transmis par le client, les traiter et générer la page Web en HTML qui lui sera renvoyée.
* **method** peut prendre deux valeurs GET ou POST (en minuscule ou majuscule), ce sont les deux modes de transmission des paramètres du formulaire qui sont deux méthodes distinctes du protocole HTTP :

    * avec la méthode GET , les données du formulaire sont assemblées dans une chaîne de paires nom/valeur séparées par le symbole `&` qui est ajoutée à la fin de l'URL après le délimiteur `?`.
    * avec la méthode POST les données du formulaire sont toujours transmises dans le corps de la requête. Les données n'apparaissent donc pas dans l'URL.

![image PHP](../../assets/images/fonctionnement-php-client-serveur.png)

!!! danger "Différences entre les méthodes GET et POST"

    **Caractéristiques de la méthode GET :**

    * Toutes les informations transmises, le sont en clair dans l'URL. Celle-ci est limitée en taille donc la méthode GET ne peut pas être utilisée pour transmettre des informations **trop longues**.
    * Une requête GET est constituée uniquement d'un entête, elle n'a pas de corps.
    * Elle ne modifie pas l'état du serveur, elle est utilisée uniquement pour demander une ressource. Un exemple classique d'utilisation est la formulation d'une requête à l'aide du formulaire d'un moteur de recherche. L'URL générée peut être utilisée plusieurs fois et conservée comme marque-page.

    **Caractéristiques de la méthode POST :**

    * Les données sont transmises dans le corps de la requête, il n'y a pas de restriction de taille. Elles peuvent être de tout type : textes, binaires...
    * Les données n'apparaissent pas dans l'URL, néanmoins, si le protocole HTTP est employé sans chiffrement, il suffit d'intercepter la requête pour accéder aux données en clair.
    * Les données envoyées peuvent modifier l'état du serveur. Par exemple, les requêtes POST sont utilisées pour les modifications de bases de données sur le serveur (achats, réservation, transfert de fichiers ...). Par conséquent si on veut renvoyer les données d'un formulaire, un message en popup avertit que ce nouvel envoi peut modifier l'état du serveur.

## 3. Pour aller plus loin

* [W3Schools](https://www.w3schools.com/html/html_form_elements.asp){target="_blank"} : référence de tous les éléments HTML de formulaire avec des exemples interactifs.
* Le site [MDN web docs](https://developer.mozilla.org/fr/docs/Learn/Forms){target="_blank"} de Mozilla est une fois de plus une très bonne référence.
