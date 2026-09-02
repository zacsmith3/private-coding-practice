const playerLevel: number = 9;
const hasAccount: boolean = true;

function canAccessGame(playerLevel: number, hasAccount: boolean): boolean {
    return playerLevel >= 10 && hasAccount;
}

if (canAccessGame(playerLevel, hasAccount)) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
