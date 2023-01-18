// ConsoleApplication1.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.
//

#include <iostream>

#include <math.h>

bool is_prime(unsigned int n)
{
    unsigned int k;
    if (n == 2) return true;
    if (n < 2 || n % 2 == 0) return false;
    for (k = 3; k <= sqrt(n) + 1; k += 2)
        if (n % k == 0) return false;
    return true;
}

int main()
{
    std::cout << "Test avec 131 : ";
    std::cout << is_prime(131);
    std::cout << "\nTest 25 : ";
    std::cout << is_prime(25);
}