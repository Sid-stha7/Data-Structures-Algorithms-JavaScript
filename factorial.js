function fact(n) {
  let result = 1
  for (i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}
console.log(fact(0))//1
console.log(fact(1))//1
console.log(fact(3))//3*2*1

console.log(fact(5))//5*4*3*2*1=120


//Big 0 = O(n)