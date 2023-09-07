'use strict';

const euclid = (...args) => {
  if (args.length === 0) {
    return null;
  }
  
  let gcd = args[0];
  
  args.slice(1).forEach((num) => {
    gcd = calculateGCD(gcd, num);
  });
  
  return Math.abs(gcd);
}
  
const calculateGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  
  return a;
}