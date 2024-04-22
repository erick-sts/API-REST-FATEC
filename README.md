# <img src="https://github.com/leonfagundes27/Assets/blob/main/Images/api.png" width="50" height="50"> API REST - Sistema de cadastro de professores 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/leonfagundes27/Backend-Projeto-Integrador/blob/main/LICENSE) 

## Link do repositório do Front-end
https://github.com/erick-sts/API-REST-FATEC-FRONTEND

# <img src="https://github.com/leonfagundes27/Assets/blob/main/Images/info.png" width="30" height="30"> Sobre o projeto 
([Link da API publicada](https://api-rest-fatec-backend.onrender.com/doc))

Essa é uma API fullstack que conta com front-end e back-end completos construída para um trabalho universitário e uso da secretaria da FATEC Votorantim.

Essa aplicação consiste no cadastro de professores e na manipulção dos dados dos mesmos, sendo possível gravar informações no banco de dados, remover, editar e listar com base em buscas no database.

O objetivo desse software é que seja fácil e simples o cadastro de professores para qualquer sistema de ensino, sistema esse manipulado pelas respectivas secretarias

## Detalhes do projeto
Essa API RESTful utiliza dos métodos http post, get, put e delete, completando os métodos básicos do CRUD. Além disso, a aplicação é construída em cima da arquitetura MVC, segue as imagens abaixo:

## <img src="https://github.com/leonfagundes27/Assets/blob/main/Images/imagem.png" width="30" height="30"> Layout
![Tela Inicial](https://github.com/erick-sts/assets/blob/main/tela-inicio.png)
##
![Tela de Login](https://github.com/erick-sts/assets/blob/main/tela-login.png)
##
![Tela principal](https://github.com/erick-sts/assets/blob/main/tela-principal.PNG)
##
## Arquitetura do projeto
![Arquitetura Projeto](https://github.com/leonfagundes27/Assets/blob/main/Images/arquitetura%20projeto.png)

# Tecnologias utilizadas
## Back end
- Javacript
- Nodejs
- Expressjs (+ express-validator)
- MongoDB (+ mongoose)

## Front end
- HTML / CSS / TypeScript
- AngularJS
- Bootstrap

## Implantação em produção
- Back-end: Javascript com Nodejs
- Front end web: Angular
- Banco de dados: MongoDB

# Como executar o projeto

## Back end
Pré-requisitos: npm + dependecias

```bash

# clonar repositório
git clone https://github.com/erick-sts/API-REST-FATEC-BACKEND.git

# entrar na pasta do projeto back end
cd Frontend-PISS

# instalar as dependencias
npm i

# executar o projeto
npm run dev
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/erick-sts/API-REST-FATEC-FRONTEND.git

# entrar na pasta do projeto front end web
cd API-REST-FATEC-FRONTEND

# instalar dependências
npm install

# executar o projeto
ng serve
```

# Requisições HTTP com REST Client
```bash
# //GET para listar todos os professores
GET https://api-rest-fatec-backend.onrender.com/professores
Content-Type: application/json
###

# //GET para buscar professores pelo curso
GET https://api-rest-fatec-backend.onrender.com/professores/cursos/CDN
Content-Type: application/json
###

# //GET para listar o número de professores cadastrados
GET https://api-rest-fatec-backend.onrender.com/professores/num_professores
Content-Type: application/json
###

# //GET para listar todos os professores pela busca por nome
GET https://api-rest-fatec-backend.onrender.com/professores/nome/nomeBuscado
Content-Type: application/json
###

# //POST para cadastrar um novo professor
POST https://api-rest-fatec-backend.onrender.com/professores
Content-Type: application/json

{
    "nome": "JOÃO DA SILVA JUNIOR",
    "numero_matricula": "937753",
    "cod_ue": "1092842",
    "titulacao": "Mestre",
    "referencia": "Campus Leste, Bloco C",
    "lates": "http:/www.linkdoprofessorlattes11.com.br",
    "curso": "DSM",
    "email": "novoprofessor@email.com",
    "observacoes": "Professor novo cadastrado"
}
###
# //DELETE para remover um professor do banco de dados
DELETE https://api-rest-fatec-backend.onrender.com/professores/numerodeMatriculaProfessorARemover
Content-Type: application/json
###

# //PUT atualizar os dados de um professor
PUT https://api-rest-fatec-backend.onrender.com/professores/190248
Content-Type: application/json

{
    "nome": "JOÃO DA SILVA JUNIOR",
    "numero_matricula": "937753",
    "cod_ue": "1092842",
    "titulacao": "Mestre",
    "referencia": "Campus Leste, Bloco C",
    "lates": "http:/www.linkdoprofessorlattes11.com.br",
    "curso": "DSM",
    "email": "novoprofessor@email.com",
    "observacoes": "ATUALIZAÇÃO!!!"
}
###
```

# Autores
Erick Oliveira, Juliano Ramalho, Leon Fagundes, Lucas Adami, Matheus Garibaldi, Vitor Ruan

