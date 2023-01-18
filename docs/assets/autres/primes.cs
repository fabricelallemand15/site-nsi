using static System.Math;

static bool is_Prime(int n)
        {
            if (n == 2) return true;
            if (n < 2 || n % 2 == 0) return false;
            for (int k = 3; k <= Math.Sqrt(n) + 1; k += 2)            
                if (n % k == 0) return false;            
            return true;
        }

Console.WriteLine(is_Prime(131));
Console.WriteLine(is_Prime(25));