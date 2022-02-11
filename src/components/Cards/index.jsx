import { ContainerCard } from './styles'

export function Cards({ title, value, isLiquidValue = false }){
  return (
    <ContainerCard isLiquidValue={isLiquidValue}>
      <span>{title}</span>
      <p>R$ {value}</p>
    </ContainerCard>
  )
}