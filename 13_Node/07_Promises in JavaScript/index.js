function waitTwoSeconds() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Done waiting");
        }, 2000);
    });
}

console.log("Start");

waitTwoSeconds()
    .then(function (message) {
        console.log(message); // "Done waiting"
    })
    .catch(function (error) {
        console.log("Something went wrong");
    });

console.log("End");

doTask1()
    .then(function (result1) {
        return doTask2(result1);
    })
    .then(function (result2) {
        return doTask3(result2);
    })
    .then(function (result3) {
        console.log("All tasks done");
    })
    .catch(function (error) {
        console.log("Something failed", error);
    });