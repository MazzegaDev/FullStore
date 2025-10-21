create table tb_produto(
	prod_id int not null auto_increment primary key,
    prod_nome varchar(50) not null,
    prod_quant int not null,
    prod_caddat datetime not null,
	prod_preco float(10,2) not null,
    
    marc_id int,
    cate_id int,
    
    constraint fk_marc_id foreign key (marc_id) references tb_marca(marc_id),
    constraint fk_cate_id foreign key (cate_id) references tb_categoria(cate_id)
    
);

create table tb_marca(
	marc_id int not null auto_increment primary key,
    marc_nome varchar(50) not null
);

create table tb_categoria(
	cate_id int not null auto_increment primary key,
    cate_nome varchar(50) not null
);

-- Nao criadas
create table tb_usuario(
	usu_id int not null primary key auto_increment,
    usu_nome varchar(50) not null
);

create table tb_perfil(
	per_id int not null primary key auto_increment,
	per_adm boolean not null
);



-- Inserir marcas
INSERT INTO tb_marca (marc_nome) VALUES
('Nike'),
('Adidas'),
('Puma'),
('Reebok'),
('Under Armour');

-- Inserir categorias
INSERT INTO tb_categoria (cate_nome) VALUES
('Tênis'),
('Camisa'),
('Calça'),
('Jaqueta'),
('Boné');

-- Inserir produtos
INSERT INTO tb_produto (prod_nome, prod_quant, prod_caddat, prod_preco, marc_id, cate_id) VALUES
('Tênis Nike Air Max', 100, NOW(), 499.99, 1, 1),
('Camiseta Adidas Sport', 150, NOW(), 129.99, 2, 2),
('Calça Puma Fitness', 80, NOW(), 179.90, 3, 3),
('Jaqueta Reebok Training', 50, NOW(), 259.90, 4, 4),
('Boné Under Armour Flex', 200, NOW(), 89.99, 5, 5);
