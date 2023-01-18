def fibo_rec(n: int) -> int:
    """Suite de Fibonacci version récursive"""
    # Cas de base
    if n == 0 or n == 1:
        return n
    # Récursion
    else:
        return fibo_rec(n-2) + fibo_rec(n-1)


for k in range(10):
    print(fibo_rec(k))
