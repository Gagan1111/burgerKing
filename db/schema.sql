
USE database_1;

DROP TABLE burgers;

CREATE TABLE burgers

(
	id int NOT NULL
	AUTO_INCREMENT,
	name varchar
	(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
	(id)
);
