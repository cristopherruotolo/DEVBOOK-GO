insert into usuarios (nome, nick, email, senha)
values
("User1", "User1", "user1@gmail.com","$2a$10$j7GGPwmAwQ9j7yRw0rOqPuRqZLq6rEQqmUwYuPKL2qmtvMuDXFM7m"),
("User2", "User2", "user2@gmail.com","$2a$10$j7GGPwmAwQ9j7yRw0rOqPuRqZLq6rEQqmUwYuPKL2qmtvMuDXFM7m"),
("User3", "User3", "user3@gmail.com","$2a$10$j7GGPwmAwQ9j7yRw0rOqPuRqZLq6rEQqmUwYuPKL2qmtvMuDXFM7m");

insert into seguidores(usuario_id, seguidor_id)
values
(1,2),
(3,1),
(1,3);

insert into publicacoes(titulo, conteudo, autor_id)
values
("Publicação do Usuário 1", "Publicação usuário 1", 1),
("Publicação do Usuário 2", "Publicação usuário 2", 2),
("Publicação do Usuário 3", "Publicação usuário 3", 3);