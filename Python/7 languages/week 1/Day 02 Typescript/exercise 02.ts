function classifyLogin(
    failedAttempts: number,
    fromNewLocation: boolean
): string {
    if (failedAttempts >= 5) {
        return "Blocked login";
    }
    if (failedAttempts >= 3 || fromNewLocation) {
        return "Review login";
    }
    return "Normal login";
}

function testClassifyLogin() {
    console.log(classifyLogin(0, false)); // Expected: "Normal login"
    console.log(classifyLogin(3, false)); // Expected: "Review login"
    console.log(classifyLogin(0, true));  // Expected: "Review login"
    console.log(classifyLogin(3, true));  // Expected: "Review login"
    console.log(classifyLogin(2, true));  // Expected: "Review login"
    console.log(classifyLogin(2, false)); // Expected: "Normal login"
    console.log(classifyLogin(5, false)); // Expected: "Blocked login"
    console.log(classifyLogin(5, true));  // Expected: "Blocked login"
}

testClassifyLogin();