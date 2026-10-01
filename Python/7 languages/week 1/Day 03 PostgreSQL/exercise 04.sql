CREATE TABLE automation_events(
    id INTEGER PRIMARY KEY,
    event_name VARCHAR(50) NOT NULL, 
    success BOOLEAN NOT NULL);
    
INSERT INTO automation_events VALUES
    (1, 'backup', TRUE),
    (2, 'database_sync', FALSE),
    (3, 'email_report', TRUE),
    (4, 'security_scan', FALSE);
    
SELECT
    CASE WHEN success = FALSE THEN event_name
    END AS events_that_failed
FROM automation_events;

SELECT 
    COUNT(*) AS total_events, 
    SUM(success=TRUE) AS successful_events, 
    SUM(success=FALSE) AS failed_events
FROM automation_events;