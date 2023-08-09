import dessy from 'prompt-sync'

const prompt = dessy()


let first_name = prompt("what is your first name?")
let last_name = prompt("what is your last name")
let age =parseInt(prompt("how old are you"))
let current_year =parseInt(prompt("what is the current year"))
let earthly_appearence = current_year - age

console.log(
first_name + " " +
last_name + "you are" +
age + "years old and you came to the earth in the year" +
earthly_appearence

)