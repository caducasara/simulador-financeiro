import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Results } from './components/Results'
import { api } from './services/api'

import { GlobalStyle } from "./styles/global";
import { ContainerMain, ContainerContent, ContainerSimulador, ContainerResults } from './app-styles'

function App() {

  /**
   * Estado dataSimulation que ira armazenar os dados da simulação buscados na api refenrente a requisição feita,
   * os mesmo dados armazenados neste estado serão utilizados para serem exibidos para o usuário.
   */
  const [dataSimulation, setDataSimulation] = useState({})

  /**
   * Função handleSimulation, é a função que recebe dois parametros por padrão, o rendimento e a indexação,
   * quando invocada realiza um fetch passando a indexação e rendimento como parametros e retorna uma resposta
   * que é armazenada no estado dataSimulation, que guarda os dados da simulação.
   */
  async function handleSimulation(indexacao, rendimento){
    const data = await api.get(`simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
    const response = data.data[0]

    setDataSimulation(response)
  }

  return (
    <ContainerMain>
      <Header />
      <ContainerContent>
        <ContainerSimulador>
          <h2>Simulador</h2>
            <Form handleSimulation={handleSimulation}/>
        </ContainerSimulador>

        {dataSimulation.valorFinalBruto && (
          <ContainerResults>
            <h2>Resultado da Simulação</h2>
            <Results data={dataSimulation}/>
          </ContainerResults>
        )}
      </ContainerContent>
      <GlobalStyle />
    </ContainerMain>

  )
}

export default App
