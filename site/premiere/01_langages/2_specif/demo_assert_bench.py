def add_trois_nombres(m: int, n: int, p: int) -> int:
    """Renvoie la somme des trois entiers n, m et p"""
    assert type(m) == int, 'm doit être un entier'
    assert type(n) == int, 'n doit être un entier'
    assert type(p) == int, 'p doit être un entier'
    return m + n + p


def test_add():
    """Jeu de tests unitaires pour la fonction add_trois_nombres"""
    assert add_trois_nombres(1, 2, 3) == 6
    assert add_trois_nombres(4, 5, 6) == 15
    assert add_trois_nombres(7, 8, 9) == 24
    print("Tests unitaires réussis")


test_add()
