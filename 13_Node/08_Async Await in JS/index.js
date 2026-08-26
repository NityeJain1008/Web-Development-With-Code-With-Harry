function waitTwoSeconds() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Waited for 2 seconds");
        }, 2000);
    });
}

async function runTask() {
    console.log("Start");
    const result = await waitTwoSeconds();
    console.log(result);
    console.log("End");
}

runTask();