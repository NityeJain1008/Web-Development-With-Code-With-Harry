let person = {
    name: "John Doe",
    age: 30,
    salary: "50K",
    isAdmin: false,
    "fathers name": "Kane Doe"
};

console.log(person);
console.log(person["fathers name"]);

console.log(person.name);
console.log(person["name"]);

person.friend = "Nitye";

delete person.salary;
console.log("age" in person);

for (let key in person) {
    console.log(key + ": " + person[key]);
}


let student = {
    name: "John",
    address: {
        city: "Mumbai",
        pin: 400001
    }
};
console.log(student.address.city); // "Mumbai"