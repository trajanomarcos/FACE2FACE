create database projetopessoal;
use projetopessoal;

select * from usuario;

select date_format(datains, '%d-%m-%Y') from usuario;

alter table usuario modify column datains varchar(45);

select nomeusuario from usuario where escolha = 'Lebron';

desc usuario;

insert into jogadorFav values
	(null, 'Lebron'),
    (null, 'Kobe'),
    (null, 'Jordan');
    
insert into usuario values (null, 'marcos', 'marcos@email.com', '123', date_format(now(),'%d-%m-%Y'), 1);
insert into usuario values (null, 'marcoss', 'marcos1@email.commarcos1@email.com', '123', date_format(now(),'%d-%m-%Y'), 3);

create table Usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(20),
datains varchar(50),
fkEscolha INT,
CONSTRAINT fkEscolhaU FOREIGN KEY (fkEscolha) REFERENCES jogadorFav(idJogador)
);

create table JogadorFav(
idJogador int primary key auto_increment,
jogador varchar(45)
);

select count(usuario.fkEscolha) as Voto, JogadorFav.Jogador as Jogadores from usuario join jogadorfav on fkEscolha = idJogador group by usuario.fkEscolha;