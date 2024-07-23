# Authentication Utils - Kenned Ferreira
## Miniprojeto M4 - PDA
A fim de facilitar a criação de PINs, senhas aleatórias e hashes de senhas, desenvolvi esta API como um utilitário de autenticação para sistemas mais simples. A API tem três rotas diferentes que realizam tarefas relacionadas à autenticação e segurança de dados. <br>
[Reaja ao meu post no linkedin 😎](https://www.linkedin.com/posts/kennedfer_github-kennedferauthenticantion-utils-miniprojeto-api-activity-7221537158988222464-SgRa?utm_source=share&utm_medium=member_desktop)

# Como rodar?
Com o repositório aberto execute o comando "npm i" e, em seguida, execute o comando "node server.js".
```
npm i
```
```
node server
```
Após a execução, você será capaz de testar e usar a api.

## Rota para Geração de PINs Aleatórios
### Rota: getRandomPin
Esta rota gera um PIN aleatório de comprimento definido pelo usuário. O PIN consiste em uma sequência de números, tornando-o ideal para sistemas que exigem autenticação numérica simples. A funcionalidade é implementada da seguinte forma:
```
const getRandomPin = (req, reply) => {
  const pinLen = parseInt(req.query.len);
  const pinArray = [];

  for (let i = 0; i < pinLen; i++) {
    pinArray.push(Math.floor(Math.random() * 9));
  }

  reply.send(pinArray.join(""));
}

```
## Rota para Geração de Senhas Aleatórias
### Rota: getRandomPassword

Esta rota gera uma senha aleatória composta por caracteres alfanuméricos. A senha gerada tem um comprimento fixo e é ideal para cenários onde uma autenticação baseada em texto é necessária. A implementação desta rota é a seguinte:

```
const getRandomPassword = (req, reply) => {
  const randomPassword = Math.random().toString(36).substring(2, 8);
  reply.send(randomPassword);
}
```

## Rota para Hashing de Senhas
### Rota: hashPassword

Esta rota recebe uma senha em texto claro e retorna um hash da mesma. O hashing é um processo essencial para garantir que senhas não sejam armazenadas em texto claro, aumentando assim a segurança do sistema. A implementação do hashing é feita da seguinte maneira:

```
const hashPassword = (req, reply) => {
  const password = req.query.pw;
  const hashCode = password.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0)
  reply.send(hashCode.toString());
}
```
