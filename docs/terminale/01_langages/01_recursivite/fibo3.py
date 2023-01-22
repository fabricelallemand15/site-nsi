def fibo_dyn(n: int, suite: dict = {0: 0, 1: 1}) -> int:
    """Suite de Fibonacci version dynamique"""
    # Cas de base
    if n == 0 or n == 1:
        return n
    # Récursion
    else:
        # Si Fn est déjà calculé, on le retourne
        if n in suite.keys():
            return suite[n]
        else:
            # Sinon, on le calcule et on le garde en mémoire
            f = fibo_dyn(n-2, suite) + fibo_dyn(n-1, suite)
            suite[n] = f
            return f


for k in range(10):
    print(fibo_dyn(k))
