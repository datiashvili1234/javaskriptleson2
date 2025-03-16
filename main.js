console.log("hello")
const num1 = 100
let num2 = 10
console.log(num1)
console.log(num2)

num2 = 20
console.log(num2)
const x1 = 20 + 20
const x2 = 40 * 10
const x3 = 50 - 10 
const x4 = 20 / 2

console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

const name1 = "mike"
let name2 = "david"

console.log(name1)
console.log(name2)

const myname = "Davit"
const mylastname = "datiashvili"

console.log(myname)
console.log(mylastname)

console.log(name1.length)

const h1 = document.querySelector(".hello")
console.log(h1)
const p = document.querySelector(".p1")
console.log(p)

h1.style.color = "red"
h1.style.border = "2px solid black"
h1.style.borderRadius = "20px"

p.style.color = "green"
p.style.backgroundColor = "yellow"
p.style.border = "5px solid blue"
p.style.borderRadius = "40px"
h1.textContent = "ეს არის ახალი ტექსტი"
p.textContent = "aaaaaaaaaaaaa"

const div1 = document.querySelector(".div1")
console.log (div1)

div1.style.color = "green"
div1.style.backgroundColor = "yelow"
div1.style.border = "20px solid green"
div1.style.borderRadius = "90px"

const btn = document.querySelector(".btn")
console.log(btn)

btn.addEventListener("click",() => {
    console.log("hello")
})

