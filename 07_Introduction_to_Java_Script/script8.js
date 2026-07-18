for (let i = 0; i < 7; i++) {
    console.log(i);
    if (i == 4) {
        break
    }
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skips even numbers
    }
    console.log(i);
}
