CREATE TABLE login_attempts(
    id INTEGER PRIMARY KEY,
    username VARCHAR(50) NOT NULL, 
    failed_attempts INTEGER NOT NULL,
    from_new_location BOOLEAN NOT NULL);
    
INSERT INTO login_attempts VALUES
    (1, 'Andrew',0, FALSE),
    (2, 'Amy',0, TRUE),
    (3, 'Benjamin',3, FALSE),
    (4, 'Beatrice',3, TRUE),
    (5, 'Caleb', 5, FALSE),
    (6, 'Christine', 5, TRUE);
    
    
SELECT 
    username,
    CASE
        WHEN failed_attempts >= 5 THEN 'blocked'
        WHEN failed_attempts >= 3 OR from_new_location THEN 'review'
        ELSE 'normal'
    END AS risk_level
FROM login_attempts;