DROP TABLE IF EXISTS rainbow_foods;
CREATE TABLE rainbow_foods (
  id SERIAL PRIMARY KEY,
  name TEXT CONSTRAINT name_unique UNIQUE,
  color TEXT,
  category TEXT,
  count INTEGER DEFAULT 0
);

COPY rainbow_foods (name, category,count,color) FROM '/Users/ziqianli/Documents/HackReactor/hr-rpp36-mvp/database/rainbow-food.csv' DELIMITER ',' CSV header;