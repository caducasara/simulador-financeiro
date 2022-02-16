import { Container } from './styles'

import { Cards } from '../Cards'
import { Chart } from '../Chart'

export function Results({ data }){
  return (
    <>
      <Container>
        <Cards title="Valor final bruto" value={data.valorFinalBruto}/>
        <Cards title="Alíquota de IR" value={data.aliquotaIR}/>
        <Cards title="Valor pago em IR" value={data.valorPagoIR}/>
      </Container>

      <Container>
        <Cards title="Valor final Liquido" value={data.valorFinalLiquido} isLiquidValue={true}/>
        <Cards title="Valor total investido" value={data.valorTotalInvestido}/>
        <Cards title="Ganho Liquido" value={data.ganhoLiquido} isLiquidValue={true}/>
      </Container>
      <Container>
        <Chart data={data.graficoValores}/>
      </Container>
    </>
  )
}