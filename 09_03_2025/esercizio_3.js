
function fibonacci (n) {
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n-2) + fibonacci(n - 1);
  }
  return fibonacci[n];
}

// Initialize the cache to hold this base case.
fibonacci[1] = 1;  
fibonacci[2] = 1;	
