login_attempts = [
    {"user": "alice", "success": True},
    {"user": "bob", "success": False},
    {"user": "bob", "success": False},
    {"user": "bob", "success": False},
    {"user": "alice", "success": True},
    {"user": "charlie", "success": False},
]



def find_suspicious_users(login_attempts, threshold):
    suspicious_users = []
    for attempt in login_attempts:
        user = attempt["user"]
        count = user_failed_attempts(login_attempts, user)
        if count >= threshold and user not in [u["user"] for u in suspicious_users]:
            suspicious_users.append({"user": user, "failed_attempts": count})
    return suspicious_users


def user_failed_attempts(login_attempts, user):
    return sum(1 for attempt in login_attempts if attempt["user"] == user and not attempt["success"])


def warning(login_attempts, threshold):
    suspicious_users = find_suspicious_users(login_attempts, threshold)
    if suspicious_users:
        for user in suspicious_users:
            print(f"    ALERT {user['user']} has {user['failed_attempts']} failed attempts")


def total_failed_attempts(login_attempts):
    return sum(1 for attempt in login_attempts if not attempt["success"])


def log_summary(login_attempts, threshold):
    print("    Security Summary")
    print("-------------------------")
    print(f"    Total attempts: {len(login_attempts)}")
    print(f"    Total failed attempts: {total_failed_attempts(login_attempts)}\n")
    warning(login_attempts, threshold)

threshold = 3
log_summary(login_attempts, threshold)
