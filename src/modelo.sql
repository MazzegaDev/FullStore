
CREATE SCHEMA IF NOT EXISTS `fullstore` DEFAULT CHARACTER SET latin1 ;
USE `fullstore` ;

-- -----------------------------------------------------
-- Table `fullstore`.`tb_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_categoria` (
  `cate_id` INT(11) NOT NULL AUTO_INCREMENT,
  `cate_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cate_id`))



-- -----------------------------------------------------
-- Table `fullstore`.`tb_marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_marca` (
  `marc_id` INT(11) NOT NULL AUTO_INCREMENT,
  `marc_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`marc_id`))



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



-- -----------------------------------------------------
-- Table `fullstore`.`tb_venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_venda` (
  `ven_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ven_datainicio` DATETIME NOT NULL,
  `ven_datafim` DATETIME NOT NULL,
  `ven_valortotal` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`ven_id`))


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



-- -----------------------------------------------------
-- Table `fullstore`.`tb_perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstore`.`tb_perfil` (
  `per_id` INT(11) NOT NULL AUTO_INCREMENT,
  `per_adm` TINYINT(1) NOT NULL,
  `per_desc` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`per_id`))



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

