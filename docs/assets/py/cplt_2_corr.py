def dec_to_bin(n):
    chaine_bin = ''
    nombre = n
    while nombre > 0:
        r = nombre % 2
        nombre = nombre // 2
        chaine_bin = str(r) + chaine_bin
    return chaine_bin

def complement_deux(n:int, nbits:int)->str:
    """
    Renvoie la notation en compléments à 2 de l'entier relatif n
    sous la forme d'une chaîne de caractères
    
    Parameters
    ----------
    n : int Précondition -2**(nbits-1) <= n < 2**(nbits-1)
    nbits : int
    
    Returns
    -------
    type str de longueur nbits
    """
    assert n >= -2**(nbits-1), "Erreur : entier trop petit !"
    assert n < 2**(nbits-1), "Erreur : entier trop grand !"
    if n >= 0:
        chaine = dec_to_bin(n)
        while len(chaine) < 8:
            chaine = "0" + chaine
    else:
        cplt = 2**nbits - abs(n)
        chaine = dec_to_bin(cplt)
    return chaine


print(complement_deux(-12,8))
# Jeu de tests unitaires
assert complement_deux(0, 8) == "00000000"
assert complement_deux(5, 8) == "00000101"
assert complement_deux(2**7 - 1, 8) == "01111111"
assert complement_deux(-2**7, 8) == "10000000"
assert complement_deux(2**7 - 2, 8) == "01111110"
assert complement_deux(-2**7 + 1, 8) == "10000001"
assert complement_deux(-1, 8) == "11111111"
assert complement_deux(-2, 8) == "11111110"
print("Bravo ! Tous les tests sont réussis !")
