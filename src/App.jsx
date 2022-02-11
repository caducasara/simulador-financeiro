import { Header } from './components/Header'
import { Form } from './components/Form'
import { Results } from './components/Results'

import { GlobalStyle } from "./styles/global";
import { ContainerMain, ContainerContent, ContainerSimulador, ContainerResults } from './app-styles'

function App() {

  return (
    <ContainerMain>
      <Header />
      <ContainerContent>
        <ContainerSimulador>
          <h2>Simulador</h2>
            <Form/>
        </ContainerSimulador>

        <ContainerResults>
          <h2>Resultado da Simulação</h2>
          <Results/>
        </ContainerResults>
      </ContainerContent>
      <GlobalStyle />
    </ContainerMain>

  )
}

export default App
