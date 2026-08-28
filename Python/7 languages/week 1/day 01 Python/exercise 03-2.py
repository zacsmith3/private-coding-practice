    #this file solves the same problem as exercise 03-1.py but uses pythons built-ins like sum() and len()

scores = [1250, 850, 2100, 450, 1750, 3000]
total = sum(scores)
count = len(scores)
average = total / count
high_scores_count = sum(1 for score in scores if score >= 1500)
for score in scores:
    print(score)
print(f"Total: {total}")
print(f"Average: {average}")
print(f"Scores of at least 1,500: {high_scores_count}")
