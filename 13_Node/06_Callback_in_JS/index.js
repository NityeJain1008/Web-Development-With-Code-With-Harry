function greet(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    const userName = "Harry";
    callback(userName);
}

processUser(greet) ;
