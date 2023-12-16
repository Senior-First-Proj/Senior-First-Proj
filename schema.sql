-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema seniorproj
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema seniorproj
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `seniorproj` DEFAULT CHARACTER SET utf8mb3 ;
USE `seniorproj` ;

-- -----------------------------------------------------
-- Table `seniorproj`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `seniorproj`.`categories` (
  `idtable2` INT NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(45) NULL DEFAULT NULL,
  `catPicture` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idtable2`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `seniorproj`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `seniorproj`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `lastname` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `motdepasse` VARCHAR(45) NULL DEFAULT NULL,
  `picture` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `seniorproj`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `seniorproj`.`posts` (
  `idposts` INT NOT NULL AUTO_INCREMENT,
  `imagePost` LONGTEXT NOT NULL,
  `descriptionPost` LONGTEXT NOT NULL,
  `rate` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  `categories_idtable2` INT NOT NULL,
  PRIMARY KEY (`idposts`),
  INDEX `fk_posts_users_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_posts_categories1_idx` (`categories_idtable2` ASC) VISIBLE,
  CONSTRAINT `fk_posts_categories1`
    FOREIGN KEY (`categories_idtable2`)
    REFERENCES `seniorproj`.`categories` (`idtable2`),
  CONSTRAINT `fk_posts_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `seniorproj`.`users` (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `seniorproj`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `seniorproj`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(45) NOT NULL,
  `posts_idposts` INT NOT NULL,
  PRIMARY KEY (`idcomments`),
  INDEX `fk_comments_posts1_idx` (`posts_idposts` ASC) VISIBLE,
  CONSTRAINT `fk_comments_posts1`
    FOREIGN KEY (`posts_idposts`)
    REFERENCES `seniorproj`.`posts` (`idposts`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;