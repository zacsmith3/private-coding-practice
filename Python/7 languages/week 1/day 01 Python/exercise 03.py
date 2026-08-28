scores = [1250, 850, 2100, 450, 1750, 3000]
total = 0
count=0
average = 0
high_scores_count = 0

def add_points(total, score):
    return total+score

def get_average(total, count):
    return total/count

def is_high_score(score):
    if score >= 1500:
        return 1
    return 0


for score in scores:
    print(score)
    total = add_points(total, score)
    count += 1
    average = get_average(total, count) 
    high_scores_count += is_high_score(score) 
print(f"Total: {total}")
print(f"Average: {average}")
print(f"Scores of at least 1,500: {high_scores_count}")

