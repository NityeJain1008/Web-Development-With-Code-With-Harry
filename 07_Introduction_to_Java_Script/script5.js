console.log("IF ELSE");

let ag = 45;

if (ag >= 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

let age = 25;
let hasID = true;

if (age >= 18) 
{
    if (hasID) {
        console.log("Access granted.");
    } 
    else {
        console.log("ID required.");
    }
} 
else 
{
    console.log("Access denied. You must be at least 18.");
}