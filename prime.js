function prime(n) {
  if (n < 2) { //1
    return false
  }
  for (let i = 2; i <=Math.sqrt(n); i++) {//n
    if (n % i === 0) {
      return false
    }

  }
  return true//1
}
//Big -O : O(sqrt(n))
console.log(prime(3))

