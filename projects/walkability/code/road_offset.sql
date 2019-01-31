drop table test_sides;
CREATE TABLE test_sides AS 
SELECT ogc_fid, sdwlk_code, road_type,sw_left,sw_right, ST_LineMerge(geometry) as geom
FROM zone_roads_lr;
drop table both_sides_local;
CREATE TABLE both_sides_local AS
SELECT rd.ogc_fid, ST_OffsetCurve(rd.geom, rd.sw_right) as geom
FROM test_sides as rd
WHERE rd.sw_left IS NOT NULL;
INSERT INTO both_sides_local SELECT rd.ogc_fid, ST_LineMerge(ST_Snap(ST_OffsetCurve(rd.geom, rd.sw_left* -1 ),4 ))as geom
FROM test_sides as rd;