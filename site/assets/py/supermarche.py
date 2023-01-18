""""Implémentation du type abstrait file en POO"""


class Chainon:
    def __init__(self, element=None, precedent=None):
        """element est la valeur du chainon et precedent est le chainon qui suit"""
        self.element = element
        self.precedent = precedent


class Panier():
    def __init__(self):
        self.front = None
        self.back = None

    def taille(self) -> int:
        """Retourne le nombre d'éléments dans la file"""
        long = 0
        chainon = self.front
        while chainon is not None:
            chainon = chainon.precedent
            long = long + 1
        return long

    def est_vide(self) -> bool:
        """Retourne True si la file est vide et False sinon"""
        return self.front is None

    def enfiler(self, element):
        """Ajoute un nouvel élément à l'arrière de la file"""
        new_back = Chainon(element, None)   # Création d'un nouveau chaînon
        if self.taille() == 0:
            # dans ce cas la file est vide et la tête est la queue
            self.front = new_back
        else:
            self.back.precedent = new_back    # On relie l'ancien dernier élément au nouveau
        self.back = new_back    # On définit le nouveau dernier élément

    def defiler(self):
        """Retourne l'élément situé en tête de la file et le supprime de la file"""
        item = self.front.element
        self.front = self.front.precedent
        return item

    def remplir(self, panier_temp):
        while not panier_temp.est_vide():
            article = panier_temp.defiler()
            self.enfiler(article)

    def prix_total(self):
        prix = 0
        temp = Panier()
        while not self.est_vide():
            elem = self.defiler()
            prix += elem[2]
            temp.enfiler(elem)
        while not temp.est_vide():
            self.enfiler(temp.defiler)
        return prix

    def duree_courses(self):
        if self.est_vide():
            return 0
        temp = Panier()
        tete = self.defiler()
        temp.enfiler(tete)
        dernier = None
        while not self.est_vide():
            article = self.defiler()
            if self.est_vide():
                dernier = article
            temp.enfiler(article)
        while not temp.est_vide():
            self.enfiler(temp.defiler())
        return dernier[3] - tete[3]

if __name__ == "__main__":
    panier = Panier()
    panier.enfiler((30156, "thé vert", 1.5, 50000))
    panier.enfiler((31002, "café noir", 1.5, 50252))
    print(panier.duree_courses())