import styled from 'styled-components'

export const ContainerCard = styled.div`
  padding: 0.5rem;
  min-width: 14rem;
  height: 80px;
  border-radius: 0.25rem;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0px 0px 10px -6px #000000;
  box-shadow: 0px 0px 10px -6px #000000;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1rem;
    font-weight: 700;
    color: #000;
  }

  p {
    color: ${props => (props.isLiquidValue ? 'green' : '#000')};
    font-weight: ${props => (props.isLiquidValue ? '700' : '400')};
  }

  @media (max-width: 768px) {
    min-width: 0rem;
    padding: 0.5rem 1.25rem;
    justify-content: space-around;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
