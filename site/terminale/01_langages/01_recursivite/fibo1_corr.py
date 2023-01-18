def fibo_iter(n: int) -> int:
    """Suite de Fibonacci, version itérative"""
    if n == 0:
        return 0
    else:
        f0, f1 = 0, 1
        for k in range(1, n):
            f0, f1 = f1, f0 + f1
        return f1


for k in range(10):
    print(fibo_iter(k))
