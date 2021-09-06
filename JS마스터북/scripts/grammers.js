let s = "hello"
console.log(s.indexOf("he",0))
console.log(s.slice(0,3))
console.log(s.split("e"))
console.log(s.concat("e"))

console.log(s.charCodeAt(1))
console.log(String.fromCharCode(101))
console.log(s.slice(2,-1))

let s2 = "10.5"
console.log(parseFloat(s2).toFixed(0))
// console.log(toFixed(10.1))

console.log('14159' - 0)

console.log(!!'111')

const MONDAY = Symbol();

let str = "MONDAY"

console.log(str === MONDAY)
console.log(+'1')
// let arr = [0,0,0]
// arr[+'1'] += 1
// console.log(arr)

let arr = [0, 0, 0, 0, 0, 0]
str = 12345
console.log(str.toString())
for(let el of str.toString()){
    console.log(el)
    arr[+el] += 1
}

console.log(arr)