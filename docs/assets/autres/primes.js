function is_prime(n) {
  if (n == 2) {
    return true;
  } else if ((n < 2) || (n % 2 == 0)) {
    return false;
  } else {
    for (var k = 3; k <= Math.sqrt(n); k += 2) {
      if (n % k == 0)
        return false;
    }
    return true;
  }
}

console.log(is_prime(131))
console.log(is_prime(25))