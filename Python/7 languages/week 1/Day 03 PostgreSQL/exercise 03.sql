CREATE TABLE game_scores(
    id INTEGER PRIMARY KEY, 
    player_name VARCHAR(50),
    score INTEGER NOT NULL);
    
INSERT INTO game_scores VALUES
    (1,'',1250),
    (2,'',850),
    (3,'',2100),
    (4,'',450),
    (5,'',1750),
    (6,'',3000);
    
SELECT
    SUM(score) as total_score,
    AVG(score) as average,
    MAX(score) AS highest_score,
    MIN(score) AS lowest_score, 
    SUM(score >= 1500) AS high_score_count
FROM game_scores;