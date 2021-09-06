let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const A = +input[0]
const B = +input[1]
const C = +input[2]

const product = (A * B * C).toString()

const H = new Array(10).fill(0)

for(let el of product)
    H[+el] += 1


H.forEach((el) => console.log(el))