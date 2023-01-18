###### CORRECTION DE L'EXERCICE : NOTATION POLONAISE INVERSE ET PILES

class EmptyStackError(Exception):
    pass


class InvalidExpressionError(Exception):
    pass


class Stack:

    def __init__(self):
        """elem : liste des éléments dans la pile. Haut de la pile = dernier élément de la liste"""
        self.elem = []

    def is_emty(self):
        return self.elem == []

    def pop(self):
        """retourne et supprime l'élément en haut de la pile"""
        try:
            item = self.elem.pop()
        except IndexError:
            raise EmptyStackError
        return item

    def push(self, item):
        """empile un élément en haut de la pile"""
        self.elem.append(item)

    def __repr__(self):
        s = ""
        for k in range(len(self.elem) - 1, -1, -1):
            s = s + str(self.elem[k])
            if k != 0:
                s = s + "\n"
        return s


def calcul(s: Stack, op: str):
    """ Effectue l'opération op sur les deux éléments en haut de la pile
    et empile le résultat """
    x = s.pop()
    y = s.pop()
    calc = str(y) + op + str(x)
    s.push(eval(calc))


def evaluation_lst(l: list) -> float:
    """l : liste de nombres et de symboles arithmétiques"""
    s = Stack()
    for item in l:
        if isinstance(item, str):  # item est une opération
            if item not in {"+", "*", "-", "/"}:
                raise InvalidExpressionError
            if len(s.elem) < 2:
                raise InvalidExpressionError
            calcul(s, item)
        else:  # item est un nombre
            if not is_float(item):
                raise InvalidExpressionError
            s.push(item)
    if len(s.elem) != 1:
        raise InvalidExpressionError
    return s.pop()


def is_float(chaine: str) -> bool:
    """Teste si la chaîne représente un nombre"""
    try:
        x = float(chaine)
        return True
    except ValueError:
        return False


def evaluation(chaine: str) -> float:
    """Evalue une chaîne selon la notation RPN"""
    liste = chaine.split(" ")
    liste_propre = []
    for item in liste:
        if item != "":
            if is_float(item):
                liste_propre.append(float(item))
            else:
                liste_propre.append(item)
    return evaluation_lst(liste_propre)


# tests

s = Stack()
s.push(1)
s.push(3)
s.push(4)
s.push(1)
calcul(s, "/")
print(s)

print(evaluation("1   1   +   "))
