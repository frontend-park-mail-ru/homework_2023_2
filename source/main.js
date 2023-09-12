let obj = "Hello";
let obj2 = new String("World");
let path = "some/path";
let obj4 = {foo: 'bar'}
// `if (typeof obj !== 'object' || !(path instanceof String || typeof path !== 'string')) {
//     console.log("fdsfda")
// }

if (!(obj4 instanceof String) && typeof obj4 !== 'string') {
    console.log("fdsaf")
}

console.log(typeof null)
console.lof