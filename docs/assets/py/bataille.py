# -*- coding: utf-8 -*-

from random import shuffle

### Bataille version POO avec compléments

class Carte():
    """Objet représentant une carte d'un jeu de 52 cartes
    valeur entière de 2 à 14, 11 pour le Valet, 12 pour la Dame,
    13 pour le Roi et 14 pour l'As"""

    def __init__(self, val: int, coul: str):
        assert (type(val) == int), "ERREUR ! La valeur de la carte doit être un entier"
        assert (val >= 2) and (val <= 14), "ERREUR ! Valeur de carte invalide"
        assert coul in ["Pique", "Coeur", "Carreau",
                        "Trèfle"], "ERREUR ! Couleur de carte invalide"
        self._valeur = val
        self._couleur = coul

    def __str__(self):
        val = self._valeur
        if val == 11:
            chaine = "Valet"
        elif val == 12:
            chaine = "Dame"
        elif val == 13:
            chaine = "Roi"
        elif val == 14:
            chaine = "As"
        else:
            chaine = str(self._valeur)
        return f"{chaine} de {self._couleur}"

    def __repr__(self):
        return self.__str__()

    def __gt__(self, other):
        return self.valeur > other.valeur

    def __eq__(self, other):
        return self.valeur == other.valeur

    @property
    def valeur(self):
        return self._valeur

    @valeur.setter
    def valeur(self, val):
        assert (type(val) == int), "ERREUR ! La valeur de la carte doit être un entier"
        assert (val >= 2) and (val <= 14), "ERREUR ! Valeur de carte invalide"
        self._valeur = val

    @property
    def couleur(self):
        return self._couleur

    @couleur.setter
    def couleur(self, coul):
        assert coul in ["Pique", "Coeur", "Carreau",
                        "Trèfle"], "ERREUR ! Couleur de carte invalide"
        self._couleur = coul


class JeuDeCartes():
    """Objet représentant un jeu de 52 cartes"""

    def __init__(self):
        self.__paquet = []
        for couleur in ["Pique", "Coeur", "Carreau",
                        "Trèfle"]:
            for valeur in range(2, 15):
                self.__paquet.append(Carte(valeur, couleur))

    def melange(self):
        shuffle(self.__paquet)

    @property
    def paquet(self):
        return self.__paquet


class Joueur():
    """Objet représentant un joueur de cartes"""

    def __init__(self, prenom: str):
        assert type(
            prenom) == str, "ERREUR ! Identifiant de joueur doit être une chaine"
        self.__id = prenom
        self.__jeu = []
        self.__gain = []

    def __str__(self):
        return self.__id.capitalize()

    def __repr__(self):
        return self.__id.capitalize()

    @property
    def id(self):
        return self.__id

    @property
    def jeu(self):
        return self.__jeu

    @jeu.setter
    def jeu(self, liste):
        self.__jeu = liste

    @property
    def gain(self):
        return self.__gain

    @gain.setter
    def gain(self, liste):
        self.__gain = liste


class Partie():
    """Objet représentant une partie de Bataille"""

    def __init__(self, joueur1: str, joueur2: str):
        # Création des joueurs
        self.__joueurs = (Joueur(joueur1), Joueur(joueur2))
        # Création et mélange du jeu de carte
        le_jeu = JeuDeCartes()
        le_jeu.melange()
        # Distribution
        self.__joueurs[0].jeu = le_jeu.paquet[:26]
        print(len(self.__joueurs[0].jeu))
        self.__joueurs[1].jeu = le_jeu.paquet[26:]
        print(len(self.__joueurs[1].jeu))
        # Statistiques
        self.__nb_batailles = 0
        self.__nb_tours = 0

    @property
    def joueurs(self):
        return self.__joueurs

    @property
    def nb_batailles(self):
        return self.__nb_batailles

    @nb_batailles.setter
    def nb_batailles(self, n: int):
        self.__nb_batailles = n

    @property
    def nb_tours(self):
        return self.__nb_tours

    @nb_tours.setter
    def nb_tours(self, n: int):
        self.__nb_tours = n

    def joue(self):
        print("Début de la partie...")
        print(f"{self.joueurs[0]} ---------- {self.joueurs[1]}")
        while 0 not in [len(self.joueurs[0].jeu), len(self.joueurs[1].jeu)]:
            carte_1 = self.joueurs[0].jeu.pop()
            carte_2 = self.joueurs[1].jeu.pop()
            print(f"{carte_1} ---------- {carte_2}")
            self.nb_tours += 1
            if carte_1 == carte_2:
                self.joue_bataille(carte_1, carte_2)
            elif carte_1 > carte_2:
                self.joueurs[0].gain += [carte_1, carte_2]
                print(f"{self.joueurs[0]} l'emporte !")
            else:
                self.joueurs[1].gain += [carte_1, carte_2]
                print(f"{self.joueurs[1]} l'emporte !")
        print(
            f"Partie terminée en {self.nb_tours} tours et {self.nb_batailles} batailles.")
        if len(self.joueurs[0].gain) > len(self.joueurs[1].gain):
            print(f"Victoire de {self.joueurs[0].id}")
        else:
            print(f"Victoire de {self.joueurs[1].id}")

    def joue_bataille(self, carte_1, carte_2):
        print("Bataille !")
        self.nb_batailles += 1
        if (len(self.joueurs[0].jeu) >= 2) and (len(self.joueurs[1].jeu) >= 2):
            carte_retournee_1 = self.joueurs[0].jeu.pop()
            carte_retournee_2 = self.joueurs[1].jeu.pop()
            print("Carte cachée ---------- Carte cachée")
            carte_b1 = self.joueurs[0].jeu.pop()
            carte_b2 = self.joueurs[1].jeu.pop()
            print(f"{carte_b1} ---------- {carte_b2}")
            if carte_b1 == carte_b2:
                self.joue_bataille(carte_b1, carte_b2)
            elif carte_b1 > carte_b2:
                self.joueurs[0].gain += [carte_1, carte_2, carte_retournee_1,
                                         carte_retournee_2, carte_b1, carte_b2]
                print(f"{self.joueurs[0]} gagne la bataille !")
                print(
                    f"Les cartes retournées étaient : {carte_retournee_1} et {carte_retournee_2}")
            else:
                self.joueurs[1].gain += [carte_1, carte_2, carte_retournee_1,
                                         carte_retournee_2, carte_b1, carte_b2]
                print(f"{self.joueurs[1]} gagne la bataille !")
                print(
                    f"Les cartes retournées étaient : {carte_retournee_1} et {carte_retournee_2}")
        else:
            print("Bataille impossible : plus assez de cartes !")

if __name__ == "__main__":
    p = Partie("Mathilde", "Fabrice")
    p.joue()
