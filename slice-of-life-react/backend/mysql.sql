CREATE DATABASE IF NOT EXISTS sliceoflife;

CREATE TABLE IF NOT EXISTS `sliceoflife`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `sliceoflife`.`posts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `desc` VARCHAR(1000) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `cat` VARCHAR(255) NOT NULL,
    `date` DATETIME NOT NULL,
    `uid` INT NOT NULL,
    PRIMARY KEY (`id`)
    INDEX `uid_idc` (`uid ASC`) VISIBLE,
    CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `sliceoflife`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);