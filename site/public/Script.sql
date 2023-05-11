create database projetopessoal;
use projetopessoal;

select * from usuario;

select date_format(datains, '%d-%m-%Y') from usuario;
insert into usuario values (null, 'OI', 'oi@oi.com.br', 'oioi', 'Jordan',date_format(now(),'%d-%m-%Y'));

insert into usuario values(null, 'Marcos', 'marcos@email.com', '123', 'Jordan','10-03-2023'); 

alter table usuario modify column datains varchar(45);

select nomeusuario from usuario where escolha = 'Lebron';

desc usuario;

create table Usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(8),
escolha varchar(50),
datains datetime default current_timestamp
);

drop table usuario;