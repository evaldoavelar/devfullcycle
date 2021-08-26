CREATE TABLE usuarios (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(255) NOT NULL,    
    PRIMARY KEY (id)
);

INSERT INTO usuarios(nome) VALUE ("Ana Maria");