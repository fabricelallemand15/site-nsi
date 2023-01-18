public class primes
{

    public static boolean is_prime(long n){
        if(n == 2){
           return true;
        }
        else if(n < 2 || n % 2 == 0){
           return false;
        }
        for(long k= 3; k <= Math.sqrt(n) + 1; k+= 2){
           if(n % k == 0){ return false; }
        }
        return true;
     }

	public static void main(String[] args)
	{
		System.out.println("test avec 131 : "+is_prime(131));
        System.out.println("test avec 25 : "+is_prime(25));
	}
}

