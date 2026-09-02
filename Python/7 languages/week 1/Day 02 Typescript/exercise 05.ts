interface LoginAttempt {
    user: string;
    success: boolean;
}

const loginAttempts: LoginAttempt[] = [
    { user: "alice", success: true },
    { user: "bob", success: false },
    { user: "bob", success: false },
    { user: "bob", success: false },
    { user: "alice", success: true },
    { user: "charlie", success: false }
];

const failedAttemptsThreshold: number = 3;

function findSuspiciousUsers(
    loginAttempts: LoginAttempt[],
    threshold: number
): string[] {
    const failedAttempts: { [user: string]: number } = {};
    loginAttempts.forEach((attempt) => {
        if (!attempt.success) {
            failedAttempts[attempt.user] = (failedAttempts[attempt.user] || 0) + 1;
        }
    });

    return Object.keys(failedAttempts).filter((user) => failedAttempts[user] >= threshold);
}

console.log("    Security Summary");
console.log("-------------------------");
console.log("    Total attempts: " + loginAttempts.length);
console.log("    Failed attempts: " + loginAttempts.filter(attempt => !attempt.success).length + "\n");

const suspiciousUsers: string[] = findSuspiciousUsers(loginAttempts, failedAttemptsThreshold);

suspiciousUsers.forEach((user) => {
    console.log("    ALERT: " + user + " has " + loginAttempts.filter(attempt => attempt.user === user && !attempt.success).length + " failed attempts"); // expected: "bob has 3 failed attempts"
});