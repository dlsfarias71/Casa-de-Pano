<h1 align="center">
    <br>
    <p align="center"> API e Banco de dados da Casa de Pano <p>
</h1></br>

<p align="center"> Projeto realizado para colocar em prática o que foi ensinado durante o curso de desenvolvimento Back End da {Reprograma}</p>
</h1></br>


<!--ts-->
- [Apresentação](#-Apresentação)
- [Tecnologias utilizadas](#-Tecnologias-Que-Vamos-Usar)
- [Arquitetura Final](#-Arquitetura-Final)
- [Preparando o Ambiente Para o Projeto](#-Preparando-o-Ambiente-Para-o-Projeto)
- [Agradecimentos](#-Agradecimentos)
- [Autora](#-Autora)


<!--te-->

## :dress:  Casa de Pano
</br>

O polo de confecções do agreste pernambucano é o segundo maior do Brasil , pensando nisso e no impacto que essa cadeia produtiva causa ao meio ambiente com os montantes de restos texteis foi que eu pensei em criar uma plataforma que pudesse juntar esses fabricantes e as cooperativas de mulheres artesãs para o reaproveitamento das sobras de tecidos, gerando renda e melhoria de vida para esses mulheres e diminuir ou minimizar o impacto causado ao meio ambiente,  a Casa de pano visa realizar esse encontro facilitando o acesso das Fábricas ao cadastro de cooperativas assim como as cooperativas terão acesso as fábricas que se cadastrarem.



</br>

## 💻 Para a realização desse projeto foram utilizadas as tecnologias abaixo:

</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`        | Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger`| Gera a documentação.|
| `render`| hospeda a documentação.|

</br>

📄 Você pode visualizar meu [Swagger aqui](https://api-casa-de-pano.onrender.com/minha-rota-de-documentacao/#/).
</br>


##  📁 Arquitetura Final

</br>

(Obrigatório)
```
 📁Casa-de-Pano
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 cooperativasController.js
   |  |    |- 📄 costureiraController.js
   |  |    |- 📄 fabricaController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 cooperativasModel.js
   |  |    |- 📄 costureirasModel.js
   |  |    |- 📄 fabricasModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 cooperativasRoute.js
   |  |    |- 📄 costureirasRoute.js
   |  |    |- 📄 fabricasRoute.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
</br>

Para executar este projeto, você terá que  instar o Node.js e as dependências do npm.

Ordem de instalações no terminal:

- Clone o projeto através do comando:
`$git clone + link do repositóriol`
- `npm init -y`
- `npm install `
- `npm install express `
- `npm install nodemon `
- `npm install mongoose `
- `npm i --save-dev dotenv`
- `npm i express cors` 
- `npm install --save dotenv-safe`
- `npm i swagger-autogen swagger-ui-express`


</br>
<br>

Este projeto usa métodos HTTP, para testar as rotas Get, Post,Delete e Patché necessário que vc utilize as ferramentas API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br>

▫️ Rota de cadastro de uma cooperativa
<br>

<img src= "https://i.ibb.co/ym2j5T3/rota-post.png" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna todas as cooperativas cadastradas
<br>

<img src= "https://i.ibb.co/9T4vK1q/get-all.png" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna cooperativa por ID
<br>

<img src= "https://i.ibb.co/gm4m4gx/get-id.png" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que altera algum dado da cooperativa
<br>

<img src= "https://i.ibb.co/RzHC1hj/rota-patch.png" width="70%" height="40%"/>
</p>

▫️ Rota que deleta a cooperativa
<br>

<img src= "https://i.ibb.co/X41XbwT/rota-delete.png" width="70%" height="40%"/>
</p>

<br>

## :heart: Agradecimentos
</br>
Estes últimos quatro meses foram muito importantes para mim, durante todo o curso passei por momentos de dificuldades entretanto nunca me senti sozinha ou desamparada, mesmo de longe fui acolhida, respeitada, valorizada, vista como alguém que nem eu reconhecia mais. Este projeto é a concretização de um sonho que nasceu das minha necessidade de mudar, de crescer, eu tenho muito a agradecer a todas as mulheres maravilhosas da turma ON19 que estiveram comigo, principalmente a Roberta,Sky,Shirlene, Cibelle, Beatriz, Elvira e Lilia, vocês seguraram a minha mão e disseram, a gente vai chegar juntas. Quero agradecer muito a todas as professoras, que me deram força, acreditaram no meu potencial , mesmo naqueles momentos em que tudo estava completamente nebulozo,e em especial a Suzik e Gaia. Meu carinho especial por este projeto que incentiva mulheres a acreditarem que a tecnologia também nos pertence. Amo todas vocês! 
</br>

## :dog: Autora
<p align="center">
<a href="https://ibb.co/5BB4B1W"><img src="https://i.ibb.co/5BB4B1W/Whats-App-Image-2022-12-14-at-10-02-41.jpg" alt="Whats-App-Image-2022-12-14-at-10-02-41" border="0"></a>
<p align="center"></p>

## Contato

[LinkedIn](https://www.linkedin.com/in/luciana-de-s%C3%A1-1ab75751/)

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>
