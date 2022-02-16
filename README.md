# simulador-financeiro

App de simulação de investimentos utilizando React e consumindo uma API externa em Node.js.
</br>

# Resumo da Aplicação

A aplicação consiste em um simulador financeiro onde o usuário pode fornecer alguns dados como tipo de rendimento e tipo de indexação que deseja, aporte inicial, aporte mensal, prazo que deseja (em meses) e a rentabilidade. Os campos de IPCA e CDI sao preenchidos automaticamente pela API externa.
</br>

## Tela inicial da aplicação:

[![1print.png](https://s10.gifyu.com/images/1print.png)](https://gifyu.com/image/Sz4TT)

</br>

## Tela com uma Simulação:

[![test89b586091fcdf1f3.png](https://s10.gifyu.com/images/test89b586091fcdf1f3.png)](https://gifyu.com/image/Szjoa)

</br>

# Como Utilizar a API Externa?

A API é fornecida pela EQUI Investimentos, para a realização deste teste.</br>
Ela pode ser encontrada no Link abaixo com a documentação de como dever ser exacutada para poder ser consumida.</br>
Recomendo que primeiro a API seja executada para que depois execute esta aplicação.</br>
<a href="https://github.com/eqi-investimentos/desafio-fake-api" target="_blank">Clique aqui para acessar a API</a>

</br>

# Stacks utilizadas na aplicação:

- React: React é a biblioteca JavaScript que foi utilizada para a construção desta Aplicação.
- Node: Node é a bibliotexa JavaScript na qual a API de consumo foi feita.
- Axios: Axios é uma biblioteca de externa que foi utilizada para fazer os requests na API, ela foi usada devido a sua praticidade e simplicidade.
- Unform: Unform é uma biblioteca externa que foi utilizada para que os dados do formulário fossem controlados pelo próprio DOM (uncontrolled-form), visando uma possivel melhoria na aplicação onde futuramente pode ser enviados mais dados nos requests e dessa maneira ja teria uma estrutura pronta para isso.
- Chakra-UI: Chakra-UI é uma biblioteca de componentes do React que facilita a construção da IU de um aplicativo ou site, ela foi utilizada para a construção dos campos do formulario de uma forma mas pratica e facil para oferecer mais flexibilidadee em casos de manutenção e oferecer uma interface mais agradavel.
- YUP: O YUP foi uma biblioteca utilizada para fazer a validação dos campos do formúlario de uma forma rapida e prática e que para esta ocasião funcionaria perfeitamente.
- Recharts: Biblioteca utilizada para implementar o gráfico do valosres com e sem aporte.
  </br>

# Como executar esta aplicação?

- Faça o clone deste repositótio na sua maquina e dentro da pasta do projeto execute os comandos `npm install` ou `yarn` para instalar todas as dependênncias do projeto.</br>
- Após ter concluido a instalação das dependências, ainda na pasta do projeto execute o comando `npm run dev` ou `yarn dev` para executar a aplicação.</br>
- Com a aplicação em execução ela podera ser acessada atravé da URL `http://localhost:3001`.
  </br>

# OBS:

É importante que primeiro execute o servidor da API para depois executar esta aplicação, pois e API esta setada para executar na porta 3000 e o react por padrão utiliza a porta 3000 também. Neste caso ao Executar a API primeiro e depois o projeto com React o projeto com React vai mudar para a Porta 3001 e a API vai contunuar na 3000.
