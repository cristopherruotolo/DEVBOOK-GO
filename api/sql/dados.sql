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