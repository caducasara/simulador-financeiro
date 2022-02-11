import { ButtonContainer, ButtonContainerClear } from './styles'

export function InputButton({title, type, ...rest}){
  
  if(title === 'Simular'){
    return (
      <ButtonContainer type={type} {...rest}>
        {title}
      </ButtonContainer>
    )
  }else {
    return (
      <ButtonContainerClear type={type} {...rest}>
        {title}
      </ButtonContainerClear>
    )
  }
}