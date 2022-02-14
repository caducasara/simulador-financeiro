# simulador-financeiro
App de simulação de investimentos utilizando React e consumindo uma API externa em Node.js.
</br>
# Resumo da Aplicação
A aplicação consiste em um simulador financeiro onde o usuário pode fornecer alguns dados como tipo de rendimento e tipo de indexação que deseja, aporte inicial, aporte mensal, prazo que deseja (em meses) e a rentabilidade. Os campos de IPCA e CDI sao preenchidos automaticamente pela API externa.
</br>
## imagem 1

# Como Utilizar a API Externa?
A API é fornecida pela EQUI Investimentos, para a realização deste teste.</br>
Ela pode ser encontrada no Link abaixo com a documentação de como dever ser exacutada para poder ser consumida.</br>
Recomendo que primeiro a API seja executada para que depois execute esta aplicação.</br>
[Link de acesso a API](https://github.com/eqi-investimentos/desafio-fake-api)
</br>

# Stacks utilizadas na aplicação:
* React: React é a biblioteca JavaScript que foi utilizada para a construção desta Aplicação.
* Node: Node é a bibliotexa JavaScript na qual a API de consumo foi feita.
* Axios: Axios é uma biblioteca de externa que foi utilizada para fazer os requests na API, ela foi usada devido a sua praticidade e simplicidade.
* Unform: Unform é uma biblioteca externa que foi utilizada para linkar todos os dados dos campos do formulario em um unico objeto, visando uma possivel melhoria na aplicação onde futuramente pode ser enviados mais dados nos requests e dessa maneira ja teria uma estrutura pronta para isso.
* Chakra-UI: Chakra-UI é uma biblioteca de componentes do React que facilita a construção da IU de um aplicativo ou site, ela foi utilizada para a construção dos campos do formulario de uma forma mas pratica e facil para oferecer mais flexibilidadee em casos de manutenção e oferecer uma interface mais agradavel.
* YUP: O YUP foi uma biblioteca utilizada para fazer a validação dos campos do formúlario de uma forma rapida e prática e que para esta ocasião funcionaria perfeitamente.
</br>

# Como executar está aplicação?
* Faça o clone deste repositótio na sua maquina e dentro da pasta do projeto execute os comandos `npm install` ou `yarn` para instalar todas as dependênncias do projeto.</br>
* Após ter concluido a instalação das dependências, ainda na pasta do projeto execute o comando `npm run dev` ou `yarn dev` para executar a aplicação.</br>
* Com a aplicação em execução ela podera ser acessada atravé da URL `http://localhost:3001`.
