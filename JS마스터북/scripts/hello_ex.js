let data = [1, 4, 1, 5, 9, 2, 6, 5]
var [_, _, a, _, _, b, ...other] = data;

console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

let book = { title: "Oliver Twist", price: 8499};
let {price, title, c} = book;
console.log(price, title, c);