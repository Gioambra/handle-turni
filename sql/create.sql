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