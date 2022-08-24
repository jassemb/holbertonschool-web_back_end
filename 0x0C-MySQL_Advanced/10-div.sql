-- function SafeDiv that divides (and returns)
-- the first by the second number or 0
DELIMITER //
CREATE FUNCTION SafeDiv (a INT, b INT)
RETURNS FLOAT DETERMINISTIC
    BEGIN
        IF b != 0 THEN
            RETURN a / b;
        ELSE
            RETURN 0;
        END IF;
END; //
DELIMITER;