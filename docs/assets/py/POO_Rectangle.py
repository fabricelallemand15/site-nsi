# -*- coding: utf-8 -*-

class Rectangle:
    """Représente un rectangle"""

    def __init__(self, largeur=2, hauteur=3):
        self._largeur = largeur
        self._hauteur = hauteur

    @property
    def largeur(self):
        return self._largeur

    @largeur.setter
    def largeur(self, largeur):
        if isinstance(largeur, (int, float)) and largeur >= 0:
            self._largeur = largeur
        else:
            print("Argument invalide, largeur inchangée !")

    @property
    def hauteur(self):
        return self._hauteur

    @hauteur.setter
    def hauteur(self, hauteur):
        if isinstance(hauteur, (int, float)) and hauteur >= 0:
            self._hauteur = hauteur
        else:
            print("Argument invalide, hauteur inchangée !")

    def perimetre(self):
        """Retourne le périmètre"""
        return 2 * (self._largeur + self._hauteur)

    def aire(self):
        """Retourne l'aire"""
        return self._largeur * self._hauteur

    def __str__(self):
        return f"Rectangle de largeur {self._largeur} et de hauteur {self._hauteur}."


class Carre(Rectangle):

    def __init__(self, cote=2):
        Rectangle.__init__(self, cote, cote)


rec = Rectangle(10, 25)
print(rec.largeur)
rec.largeur = -15
print(rec.largeur)
car = Carre(5)
print(car.perimetre())
