interface AutomationEvent {
    name: string;
    success: boolean;
}

const events: AutomationEvent[] = [
    { name: "backup", success: true },
    { name: "databaseSync", success: false },
    { name: "emailReport", success: true },
    { name: "securityScan", success: false }
];

function getFailedEvents(
    events: AutomationEvent[]
): string[] {
    // ...
}