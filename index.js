// Your code here
function greet() {
    var name = prompt("What is your name?");
    alert(`Hello, ${name}`);
    var age = prompt("How old are you?");
    var ageNumber= parseInt(age);
    var birthday = confirm("Have you had a birthday yet this year?");
    var currentYear = new Date().getFullYear();
    var birthdayThisYear = currentYear-ageNumber;
    var birthdayNot = currentYear-(ageNumber+1);
    if (birthday){
        alert(`You were born in ${birthdayThisYear}`)
    } else {
        alert(`You were born in ${birthdayNot}`)
    }
}