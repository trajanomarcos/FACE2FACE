create database ProjetoPessoal;

use ProjetoPessoal;

create table Usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(50),
email varchar(50),
senha int,
escolha varchar(50)
);

select * from usuario;

drop table usuario;

