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

function findSuspiciousUsers(
    loginAttempts: LoginAttempt[],
    threshold: number
): string[] {
    // ...
}