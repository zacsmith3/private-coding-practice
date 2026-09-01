const playerLevel: number = 10;
const hasAccount: boolean = true;

function canAccessGame(playerLevel: number, hasAccount: boolean): boolean {
    return playerLevel >= 10 && hasAccount;
}

if (canAccessGame(playerLevel, hasAccount)) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
