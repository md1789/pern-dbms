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
    rating_stars INTEGER,
    PRIMARY KEY (event_name),
    FOREIGN KEY (rating_stars) REFERENCES rates
);

CREATE TABLE users(
    username VARCHAR(40),
    password VARCHAR(40),
    university_name VARCHAR(40),
    PRIMARY KEY (username),
    FOREIGN KEY (university_name) REFERENCES university
);

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

INSERT INTO events(
	event_name, name, category, "time", description, location, phone, email, date)
	VALUES ('choir_concert', 'UCF Choir Concert', 'public',
		   '07:30', 'The UCF Chamber Singers, SoAl and TeBa choruses, and the University Singers, along with the new UCF Community Choir and Children’s Choir, sing songs of unity, joy and friendship.',
		   (28.53840582664925, -81.376897), '14078390119', 'boxoffice@ucf.edu', '4/15/22');

INSERT INTO events(
	event_name, name, category, "time", description, location, phone, email, date)
	VALUES ('health', 'SoberKnights: All Recovery', 'public',
		   '05:45', 'Join us as we network with UCF alumni professionals in-person, on one evening, in multiple cities across the nation!',
		   (28.60308620405601, -81.19842906755956), '4078230859', 'ucf.soberknights@gmail.com', '4/13/22');

INSERT INTO events(
	event_name, name, category, "time", description, location, phone, email, date)
	VALUES ('networking', 'National Networking Knight', 'public',
		   '05:45', 'Join us as we network with UCF alumni professionals in-person, on one evening, in multiple cities across the nation!',
		   (28.606960445755725, -81.19857833862173), '14078232586', 'AshleyC.Turner@ucf.edu', '4/13/22',

INSERT INTO events(
	event_name, name, category, "time", description, location, phone, email, date)
	VALUES ('band_concert', 'UCF Band Concert', 'public',
		   '07:30', 'The UCF Wind Ensemble and Symphonic Band present an exciting evening of diverse and expressive music that explores various genres and styles.',
		   (28.53840582664925, -81.376897), '14078390119', 'boxoffice@ucf.edu', '4/13/22');

INSERT INTO events(
	event_name, name, category, "time", description, location, phone, email, date, rating_stars)
	VALUES ('chipper', 'Chillin with Chipper', 'public', '01:00', 'This is your opportunity to meet the UCFPD therapy dog, Chipper!' , (28.597028414788053, -81.20333922406047), '', 'policecr@ucf.edu', 5);

INSERT INTO events(
event_name, name, category, "time", description, location, phone, email, date, rating_stars)
VALUES ('hack', 'React Workshop', 'private', '05:00', 'Learn the basics of React and frontend development.' , (28.602176388579647, -81.19843527350898), '', 'team@knighthacks.org', '4/14/22', 3);
    
INSERT INTO events(
	event_name, name, category, "time", description, location, phone, email, date, rating_stars)
	VALUES ('optics', 'CREOL Optics Day', 'private', '02:00', 'Meet withh Students, professors, and industrial members!' , (28.60137201783783, -81.19705121398373), '', 'benjamin.logan@knights.ucf.edu', '4/15/22', 5);