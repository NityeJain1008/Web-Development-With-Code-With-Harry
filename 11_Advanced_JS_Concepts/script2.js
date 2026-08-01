const jsonString = '{"name": "Harry", "age":25}' ; 

console.log(jsonString) ; 

const jsObj = JSON.parse(jsonString) ; 
console.log(jsObj) ; 

const user = '{"name": "Nitye", "age": 34}' ;

// const json = JSON.stringify(user) ; 

console.log(user) ; 

// Store object
localStorage.setItem('Auser', JSON.stringify(user));
// Retrieve and parse object
const storedUser = JSON.parse(localStorage.getItem('Auser'));

