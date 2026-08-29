events = [
        {"name": "backup", "success": True},
        {"name": "database_sync", "success": False},
        {"name": "email_report", "success": True},
        {"name": "security_scan", "success": False}
]

def get_failed_events(events):
    failed_events = []
    for event in events:
        if not event["success"]:
            failed_events.append(event["name"])
    return failed_events

failed = get_failed_events(events)
for event in failed:
    print(f"Failed event: {event}")