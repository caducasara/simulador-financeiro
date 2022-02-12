import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #efefef;
  width: 90vw;
  min-height: 80vh;
  margin: 40px auto;
  border-radius: 0.5rem;
`

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 20px;

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`

export const ContainerSimulador = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 0;
  }
`

export const ContainerResults = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 0;
  }
`
