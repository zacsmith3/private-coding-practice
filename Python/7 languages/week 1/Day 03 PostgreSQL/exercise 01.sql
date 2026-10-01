CREATE TABLE players (
    id INTEGER PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    level INTEGER NOT NULL,
    banned BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO players (id, username, level, banned)
VALUES
    (1, 'Morgan', 42, FALSE),
    (2, 'Taylor', 17, FALSE),
    (3, 'Jordan', 55, TRUE),
    (4, 'Alex', 31, FALSE),
    (5, 'James',10, TRUE);


SELECT 
    username, 
    level,
    CASE 
        WHEN banned THEN 'Banned'
        WHEN level < 20 THEN 'Too low level'
        ELSE 'Can enter'
    END AS access_status
FROM players;
    