import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`
export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 40px 0;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  span {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    width: 100%;

    & + & {
      margin-top: 2rem;
    }
  }
`
