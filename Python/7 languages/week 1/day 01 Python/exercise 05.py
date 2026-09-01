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
        if count_failed_attempts(login_attempts, user) >= threshold:
            suspicious_users.append(user)
    return suspicious_users


def count_failed_attempts(login_attempts, user):
    return sum(1 for attempt in login_attempts if attempt["user"] == user and not attempt["success"])



suspicious_users = find_suspicious_users(login_attempts, 3)
for user in suspicious_users:
    print(f"Warning: User '{user}' has multiple failed login attempts.")

print("Login attempt summary:")
for attempt in login_attempts:
    status = "SUCCESS" if attempt["success"] else "FAILED"
    print(f"User: {attempt['user']}, Status: {status}")