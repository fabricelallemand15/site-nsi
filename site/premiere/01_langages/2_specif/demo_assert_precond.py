def add_trois_nombres(m: int, n: int, p: int) -> int:
    """Renvoie la somme des trois entiers n, m et p"""
    assert type(m) == int, 'm doit être un entier'
    assert type(n) == int, 'n doit être un entier'
    assert type(p) == int, 'p doit être un entier'
    return m + n + p