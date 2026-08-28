


def classify_login(failed_attempts, from_new_location):
    if failed_attempts >= 5:
            return "blocked"
    elif failed_attempts >= 3 or from_new_location:
            return "review"
    return "normal"

result = classify_login(1,0)
print(result)