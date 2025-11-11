-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema fullstore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fullstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fullstore` DEFAULT CHARACTER SET latin1 ;
USE `fullstore` ;

-- -----------------------------------------------------
-- Table `fullstore`.`tb_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_categoria` (
  `cate_id` INT(11) NOT NULL AUTO_INCREMENT,
  `cate_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cate_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 42
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_marca` (
  `marc_id` INT(11) NOT NULL AUTO_INCREMENT,
  `marc_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`marc_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 42
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_produto` (
  `prod_id` INT(11) NOT NULL AUTO_INCREMENT,
  `prod_nome` VARCHAR(50) NOT NULL,
  `prod_quant` INT(11) NOT NULL,
  `prod_caddat` DATETIME NOT NULL,
  `prod_preco` DECIMAL(10,2) NOT NULL,
  `marc_id` INT(11) NULL DEFAULT NULL,
  `cate_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  INDEX `fk_marc_id` (`marc_id` ASC) VISIBLE,
  INDEX `fk_cate_id` (`cate_id` ASC) VISIBLE,
  CONSTRAINT `fk_cate_id`
    FOREIGN KEY (`cate_id`)
    REFERENCES `fullstore`.`tb_categoria` (`cate_id`),
  CONSTRAINT `fk_marc_id`
    FOREIGN KEY (`marc_id`)
    REFERENCES `fullstore`.`tb_marca` (`marc_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 108
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_perfil` (
  `per_id` INT(11) NOT NULL AUTO_INCREMENT,
  `per_adm` TINYINT(1) NOT NULL,
  `per_desc` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`per_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_usuario` (
  `usu_id` INT(11) NOT NULL AUTO_INCREMENT,
  `usu_nome` VARCHAR(50) NOT NULL,
  `per_id` INT(11) NULL DEFAULT NULL,
  `usu_email` VARCHAR(45) NOT NULL,
  `usu_senha` VARCHAR(45) NOT NULL,
  `usu_saldo` DECIMAL(10,2) NOT NULL DEFAULT 1000.00,
  PRIMARY KEY (`usu_id`),
  INDEX `fk_per_id` (`per_id` ASC) VISIBLE,
  CONSTRAINT `fk_per_id`
    FOREIGN KEY (`per_id`)
    REFERENCES `fullstore`.`tb_perfil` (`per_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_carrinho` (
  `car_id` INT(11) NOT NULL AUTO_INCREMENT,
  `car_valor_total` DECIMAL(10,2) NOT NULL,
  `car_valor_uni` DECIMAL(10,2) NOT NULL,
  `car_quantidade` INT(11) NOT NULL,
  `prod_id` INT(11) NOT NULL,
  `usu_id` INT(11) NOT NULL,
  PRIMARY KEY (`car_id`),
  INDEX `fk_car_prod_id` (`prod_id` ASC) VISIBLE,
  INDEX `fk_car_usu_id` (`usu_id` ASC) VISIBLE,
  CONSTRAINT `fk_car_prod_id`
    FOREIGN KEY (`prod_id`)
    REFERENCES `fullstore`.`tb_produto` (`prod_id`),
  CONSTRAINT `fk_car_usu_id`
    FOREIGN KEY (`usu_id`)
    REFERENCES `fullstore`.`tb_usuario` (`usu_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_venda` (
  `ven_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ven_datainicio` DATETIME NOT NULL,
  `ven_datafim` DATETIME NOT NULL,
  `ven_valortotal` DECIMAL(10,0) NOT NULL,
  `car_id` INT NOT NULL,
  PRIMARY KEY (`ven_id`),
  INDEX `car_id_idx` (`car_id` ASC) VISIBLE,
  CONSTRAINT `car_id`
    FOREIGN KEY (`car_id`)
    REFERENCES `fullstore`.`tb_carrinho` (`car_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `fullstore`.`tb_itensvenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_itensvenda` (
  `itensv_id` INT(11) NOT NULL AUTO_INCREMENT,
  `itensv_valoruni` DECIMAL(10,2) NOT NULL,
  `ven_id` INT(11) NOT NULL,
  `prod_id` INT(11) NOT NULL,
  `itensv_quant` INT(11) NOT NULL,
  PRIMARY KEY (`itensv_id`),
  INDEX `fk_ven_id` (`ven_id` ASC) VISIBLE,
  INDEX `fk_prod_id` (`prod_id` ASC) VISIBLE,
  CONSTRAINT `fk_prod_id`
    FOREIGN KEY (`prod_id`)
    REFERENCES `fullstore`.`tb_produto` (`prod_id`),
  CONSTRAINT `fk_ven_id`
    FOREIGN KEY (`ven_id`)
    REFERENCES `fullstore`.`tb_venda` (`ven_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
