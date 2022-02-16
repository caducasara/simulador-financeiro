import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Results } from './components/Results'
import { api } from './services/api'

import { GlobalStyle } from "./styles/global";
import { ContainerMain, ContainerContent, ContainerSimulador, ContainerResults } from './app-styles'

function App() {

  /**
   * Estado dataSimulation que armazena os dados retornados da simulação referente a requisição feita na API.
   */
  const [dataSimulation, setDataSimulation] = useState({})

  /**
   * Função handleSimulation, função que recebe dois parametros por padrão, rendimento e indexação,
   * quando invocada realiza um fetch passando a indexação e rendimento como parametros e retorna uma resposta
   * que é armazenada no estado dataSimulation.
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
