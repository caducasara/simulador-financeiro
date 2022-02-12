import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  background-color: #969696;
  color: black;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 0.5rem;

  transition: all linear 0.2s;

  &:hover {
    background: #ed8e53;
    color: #fff;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
export const ButtonContainerClear = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  border: 2px solid #969696;
  color: black;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 0.5rem;

  transition: all linear 0.2s;

  &:hover {
    background: #ed8e53;
    color: #fff;
    border-color: #ed8e53;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
