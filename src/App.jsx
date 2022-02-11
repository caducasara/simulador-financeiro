import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Results } from './components/Results'
import { api } from './services/api'

import { GlobalStyle } from "./styles/global";
import { ContainerMain, ContainerContent, ContainerSimulador, ContainerResults } from './app-styles'

function App() {

  const [dataSimulation, setDataSimulation] = useState({})

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

        {dataSimulation.valorFinalBruto != undefined && (
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
