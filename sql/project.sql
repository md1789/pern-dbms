CREATE DATABASE magrathea;

CREATE TABLE events(
    event_name varchar(40),
    name varchar(40),
    category varchar(40),
    time varchar(255),
    description varchar(255),
    location varchar(255),
    phone varchar(10),
    email varchar(255),
    date varchar(255),
    PRIMARY KEY (event_name)
);

CREATE TABLE users(
username VARCHAR(40),
password VARCHAR(40),
PRIMARY KEY (username));

CREATE TABLE rates(
    username VARCHAR(40),
    event_name VARCHAR(40),
    rating_stars INTEGER,
    comment VARCHAR(40),
    PRIMARY KEY (username, event_name),
    FOREIGN KEY (username) REFERENCES users,
    FOREIGN KEY (event_name) REFERENCES events
);

CREATE TABLE location(
    location_name VARCHAR(40),
    latitude FLOAT(40),
    longitude FLOAT(40),
    PRIMARY KEY (location_name)
);

CREATE TABLE at(
    event_name VARCHAR(40),
    location_name VARCHAR(40),
    PRIMARY KEY (event_name, location_name),
    FOREIGN KEY (event_name) REFERENCES events,
    FOREIGN KEY (location_name) REFERENCES location
);

CREATE TABLE rso(
    rso_name VARCHAR(40),
    num_members INTEGER,
    PRIMARY KEY (rso_name)
);

CREATE TABLE university(
    university_name VARCHAR(40),
    address VARCHAR(40),
    PRIMARY KEY (university_name)
);

CREATE TABLE isIn(
    username VARCHAR(40),
    rso_name VARCHAR(40),
    PRIMARY KEY (username, rso_name),
    FOREIGN KEY (username) REFERENCES users,
    FOREIGN KEY (rso_name) REFERENCES rso
);

CREATE TABLE attends(
    username VARCHAR(40),
    university_name VARCHAR(40),
    PRIMARY KEY (username, university_name),
    FOREIGN KEY (username) REFERENCES users,
    FOREIGN KEY (university_name) REFERENCES university
);

CREATE TABLE isApartOf(
    rso_name VARCHAR(40),
    university_name VARCHAR(40),
    PRIMARY KEY (rso_name, university_name),
    FOREIGN KEY (rso_name) REFERENCES rso,
    FOREIGN KEY (university_name) REFERENCES university
);