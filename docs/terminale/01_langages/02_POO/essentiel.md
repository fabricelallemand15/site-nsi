La POO consiste à définir de nouveaux objets pour découper un programme en briques indépendantes (ou non) qui peuvent facilement resservir.

## Classe, initialiseur, attributs

En Python, la définition d'une classe se fait avec le mot-clef `class` suivi du nom de la classe.

L'initialiseur ``__init__`` permet de définir les attributs d'instance.

````py
class Rectangle:
    """Représente un rectangle"""
    
    def __init__(self, largeur = 2, hauteur = 3):
        self.largeur = largeur
        self.hauteur = hauteur
````

## Méthodes

Une **méthode**, c'est ce qui permet à une instance de réaliser des actions. Techniquement se sont des fonctions définies **dans le corps de la classe**, et qui prennent toujours au moins un premier paramètre qui est `self`.

On accède aux méthodes par la notation pointée : ``mon_rectangle.aire()``.

**Encapsulation** : les méthodes et les attributs sont définis à l'intérieur de la classe. Les attributs ne devraient pas être directement accessible en dehors de la classe. On y accède par des méthodes (voir les compléments). L'ensemble des méthodes et attributs publics est l'interface de l'objet.

## Représentation simplifiée d'une classe

```` mermaid
classDiagram
    class Rectangle{
        -float hauteur
        -float largeur
        +perimetre() float
        +aire() float
        +double_largeur()
    }
````