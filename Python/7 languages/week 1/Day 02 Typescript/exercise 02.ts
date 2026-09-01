function classifyLogin(
    failedAttempts: number,
    fromNewLocation: boolean
): string {
    // ...
}

function testClassifyLogin() {
    console.log(classifyLogin(0, false)); // Expected: "Normal login"
    console.log(classifyLogin(3, false)); // Expected: "Suspicious login"
    console.log(classifyLogin(0, true));  // Expected: "Suspicious login"
    console.log(classifyLogin(3, true));  // Expected: "Blocked login"
    console.log(classifyLogin(2, true));  // Expected: "Suspicious login"
    console.log(classifyLogin(2, false)); // Expected: "Normal login"
    console.log(classifyLogin(5, false)); // Expected: "Blocked login"
    console.log(classifyLogin(5, true));  // Expected: "Blocked login"
}