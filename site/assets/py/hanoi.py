def hanoi(n: int = 3, depart: list = [3, 2, 1], intermediaire: list = [], arrivee: list = []):
    """Résout le problème des tours de Hanoï avec n disques
        et affiche les étapes successives"""
    if n == 0:
        pass
    else:
        hanoi(n-1, depart, arrivee, intermediaire)
        disque = depart.pop()
        arrivee.append(disque)
        print(A, "--", B, "--", C)
        hanoi(n-1, intermediaire, depart, arrivee)


A = [4, 3, 2, 1]
B = []
C = []
hanoi(4, A, B, C)
