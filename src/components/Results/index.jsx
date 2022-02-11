import { Container } from './styles'

import { Cards } from '../Cards'

export function Results(){
  return (
    <>
      <Container>
        <Cards title="Valor final bruto" value="15.509,27"/>
        <Cards title="Alíquota de IR" value="20%"/>
        <Cards title="Valor pago em IR" value="15.509,27"/>
      </Container>

      <Container>
        <Cards title="Valor final Liquido" value="56.509,27" isLiquidValue={true}/>
        <Cards title="Valor total investido" value="9.509,27"/>
        <Cards title="Ganho Liquido" value="47.000,00" isLiquidValue={true}/>
      </Container>
    </>
  )
}