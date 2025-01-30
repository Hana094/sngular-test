export const calculateNFibonacci = (n) => {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

export const calculateTriangularNumber = (n) => {
  return (n * (n + 1)) / 2;
};

export const calculateNPrime = (n) => {
  function isPrime(number) {
    if (number <= 1) return false;
    if (number > 2 && number % 2 === 0) return false;
    //Divisor Check
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
};
