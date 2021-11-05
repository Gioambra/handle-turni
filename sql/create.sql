--TODO for future create 1 mounth of date a node-cron that insert date every week

CREATE TABLE currentWeek (
    id text, -- year-month-day
    current_Day DATE,
    user integer ,
    FOREIGN KEY (user) REFERENCES users(user_id)
);

-- users that will be drag/drop in a specific day
CREATE TABLE users (
    user_id primary key serial,
    user_name text,
    email text,
    phoneNumber integer,
);

-- initial data 
INSERT INTO currentWeek (ID,current_Day, user) VALUES ('06-11-2021','2021-11-06',1);
INSERT INTO currentWeek (ID,current_Day, user) VALUES ('06-11-2021','2021-11-06',2);
INSERT INTO currentWeek (ID,current_Day, user) VALUES ('06-11-2021','2021-11-06',3);
INSERT INTO users (user_id,user_name, email,phoneNumber) VALUES (1,'John','john@email',12132);
INSERT INTO users (user_id,user_name, email,phoneNumber) VALUES (2,'Luke','luke@email',02132);
INSERT INTO users (user_id,user_name, email,phoneNumber) VALUES (3,'bernard','bernard@email',12132);
