from piles_POO import *

def verification(expr):
    P = Pile()
    for char in expr:
        if char == "(":
            P.empiler(char)
        elif char == ")":
            if P.est_vide():
                return False
            else:
                P.depiler()
    return P.est_vide()

def tests():
    assert verification("(2*x+1)+(3*(x+2)-3)") == True
    assert verification("2*x+1)+(3*(x+2)-3)") == False
    assert verification("(2*x+1)+(3*(x+2-3)") == False
    print("Tests réussis !")

# Pour les crochets, attention, il faut aussi que la disposition des crochets soit compatible avec celle des parenthèses.

def verification2(expr):
    P = Pile()
    for char in expr:
        if char == "(" or char == "[":
            P.empiler(char)
        elif char == ")":
            if P.est_vide():
                return False
            elif P.sommet() == "(":
                P.depiler()
            else:
                return False
        elif char == "]":
            if P.est_vide():
                return False
            elif P.sommet() == "[":
                P.depiler()
            else:
                return False
    return P.est_vide()

def tests2():
    assert verification2("[(2*x+1)]+(3*(x+2)-3)") == True
    assert verification2("(2*x+[1)+(3*(x]+2)-3)") == False
    assert verification2("(2*x+1)+(3*[(x+2)-3])") == True
    print("Tests réussis !")

tests()
tests2()