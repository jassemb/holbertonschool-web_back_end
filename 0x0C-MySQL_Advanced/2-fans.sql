-- SQL script that ranks country origins of bands
-- ordered by the number of (non-unique) fans
-- and then by the number of fans in descending order

SELECT `origin`, SUM(fans) as nb_fans
FROM `metal_bands` GROUP BY `origin` ORDER BY `nb_fans` DESC;