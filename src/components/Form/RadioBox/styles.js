import styled from 'styled-components'

export const WrapperRadioBox = styled.div`
  & > div {
    display: inline-block;
  }

  input {
    display: none;

    &:checked + label {
      color: #fff;
      background: #ed8e53;
    }

    &:checked + label::before {
      content: '\f00c';
      color: #fff;
      font-weight: bold;
      margin-right: 3px;
    }
  }

  label {
    display: inline-block;
    text-align: center;
    padding: 10px 20px;
    border: 1px solid #000;
    font-family: 'Font Awesome 5 Free', 'Roboto';

    &:nth-child(2) {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`
