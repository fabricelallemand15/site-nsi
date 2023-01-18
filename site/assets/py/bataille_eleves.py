# -*- coding: utf-8 -*-

from random import shuffle

### Version POO simplifiée
### Fichier à compléter
### Volontairement, les signatures de certaines fonctions sont incomplètes, à vous de les compléter !


class Carte():
    """Objet représentant une carte d'un jeu de 52 cartes
    valeur entière de 2 à 14, 11 pour le Valet, 12 pour la Dame,
    13 pour le Roi et 14 pour l'As"""

    def __init__(...

    def __str__(self):
        ...

    def __repr__(self):
        return self.__str__()

    def __gt__(self, other):
        ...

    def __eq__(self, other):
        ...


class JeuDeCartes():
    """Objet représentant un jeu de 52 cartes"""

    def __init__(self):
        ...

    def melange(self):
        shuffle(self.paquet)


class Joueur():
    """Objet représentant un joueur de cartes"""

    def __init__(...

    def __str__(self):
        ...

    def __repr__(self):
        ...


class Partie():
    """Objet représentant une partie de Bataille"""

    def __init__(...

    def joue(self):
        ...

    def joue_bataille(self, carte_1, carte_2):
        print("Bataille !")
        ...

if __name__ == "__main__":
    p = Partie("Toto", "Titi")
    p.joue()
