MANUAL PORTUGUÊS-BR
Para Conseguir realizar o uso desde CRUD em GO é preciso: 
1. Instalar primeiramente o GO https://go.dev/doc/install, o MYSQL "https://dev.mysql.com/downloads/mysql/" e também o Postman "https://www.postman.com/downloads/".
2. O arquivo de configuração do banco é .env pode cadastrar nome do seu BANCO e a porta que você quer que o go abra para funcionar seu sistema.
3. No caminho /sql existem  dois arquivos sql.sql e dados.sql são arquivos para você criar o seu banco de maneira facíl  no MYSQL e também popular seu banco com dados.
5. Após configurado é preciso acessar abrir o terminal na path api e executar o comando "go run .\main.go" o Ambiente pode abrir o postman para começarmos a usar a API com auntenticação.
6. Com o postman aber é preciso mandar uma requisição POST para "localhost:5000/login" com o email e senha cadastrados na tabela usuarios.
Exemplo:
{
    "email":"user1@gmail.com",
    "senha":"123456"
}
Com isso irá ser gerado seu bearer token de autenticação para usar a API.
7. As rotas e os tipos de métodos com os parâmetros estão disponíveis em "/api/src/router/usuarios.go"
8. Usando método POST no endereço "localhost:5000/usuarios" passando o corpo da requisição:
{
    "nome":"teste",
    "nick":"teste",
    "email":"teste@gmail.com",
    "senha":"123456"
}
É possível fazer cadastro do usuário pelo sistema sem precisar usar os scripts sql de ajuda para cadastrar os usuários.

-------------------------------------------------------------------------------------

MANUAL IN ENGLISH
To use this CRUD in GO, you need to:
1. Install GO https://go.dev/doc/install, MYSQL "https://dev.mysql.com/downloads/mysql/", and Postman "https://www.postman.com/downloads/".
2. The database configuration file is .env. You can register your DATABASE name and the port you want GO to open to run your system.
3. In the path /sql, there are two files, sql.sql and dados.sql. These files are for you to create your database easily in MYSQL and also populate your database with data.
4. After configuring, you need to access the terminal in the api path and execute the command "go run .\main.go". The environment can then open Postman to start using the API with authentication.
5. With Postman open, you need to send a POST request to "localhost:5000/login" with the email and password registered in the users table.
Example:

{
    "email":"user1@gmail.com",
    "senha":"123456"
}
This will generate your bearer token for authentication to use the API.

6. The routes and method types with parameters are available in "/api/src/router/usuarios.go".

7. Using the POST method at the address "localhost:5000/usuarios" and passing the request body:
{
    "nome":"teste",
    "nick":"teste",
    "email":"teste@gmail.com",
    "senha":"123456"
}
It is possible to register a user through the system without having to use the help SQL scripts to register users.
