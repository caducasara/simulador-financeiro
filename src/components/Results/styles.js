import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 40px 0px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 40px 0;

    & + & {
      padding: 0;
    }
  }
`
