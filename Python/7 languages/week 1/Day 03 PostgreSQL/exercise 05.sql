CREATE TABLE login_attempts(
    id INTEGER PRIMARY KEY,
    username VARCHAR(50) NOT NULL, 
    attempt_success BOOLEAN NOT NULL, 
    from_new_location BOOLEAN NOT NULL
    );
    
INSERT INTO login_attempts VALUES 
    (1, 'alice', TRUE, FALSE),
    (2, 'alice', TRUE, FALSE),
    (3, 'alice', TRUE, FALSE),
    (4, 'alice', TRUE, FALSE),
    (5, 'alice', TRUE, FALSE),
    (6, 'bob', TRUE, FALSE),
    (7, 'bob', TRUE, FALSE),
    (8, 'bob', TRUE, FALSE),
    (9, 'bob', TRUE, FALSE),
    (10, 'bob', FALSE, FALSE),
    (11, 'bob', FALSE, FALSE),
    (12, 'bob', FALSE, FALSE),
    (13, 'charlie', FALSE, FALSE),
    (14, 'charlie', FALSE, FALSE),
    (15, 'charlie', FALSE, FALSE),
    (16, 'charlie', FALSE, FALSE),
    (17, 'charlie', FALSE, FALSE),
    (18, 'charlie', FALSE, FALSE),
    (19, 'charlie', TRUE, FALSE),
    (20, 'charlie', TRUE, FALSE),
    (21, 'dan', TRUE, FALSE),
    (22, 'dan', FALSE, TRUE),
    (23, 'dan', TRUE, FALSE),
    (24, 'dan', TRUE, FALSE);
    
WITH stats AS (
    SELECT
        username,
        COUNT(*) AS total_attempts,
        COUNT(*) FILTER (WHERE NOT attempt_success) AS failed_attempts,
        COUNT(*) FILTER (WHERE from_new_location) AS new_location_attempts
    FROM login_attempts
    GROUP BY username
    )
SELECT
    username,
    total_attempts,
    failed_attempts,
    new_location_attempts,
    CASE
        WHEN failed_attempts >= 5 THEN 'blocked'
        WHEN failed_attempts >= 3 OR new_location_attempts >= 1 THEN 'review'
        ELSE 'normal'
    END AS risk_level
FROM stats
ORDER BY username;

