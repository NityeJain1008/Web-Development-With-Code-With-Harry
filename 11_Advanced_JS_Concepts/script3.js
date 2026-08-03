try {
    let result = 10 / x; // x is not defined
} catch (error) {
    console.log('An error occurred:', error.message);
}

try {
    // Risky code
} catch (error) {
    // Handle error
} finally {
    // Always runs
    console.log('Cleanup complete');
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
try {
    divide(5, 0);
} catch (error) {
    console.error(error.message); // Output: Cannot divide by zero
}