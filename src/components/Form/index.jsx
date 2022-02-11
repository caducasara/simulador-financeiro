import { useRef, useEffect,useState } from 'react'
import { FormContainer, ContainerWrapper, WrapperInput } from './styles'
import { Form as Unform } from '@unform/web'
import * as Yup from 'yup'
import { api } from '../../services/api'

import { RadioBox } from './RadioBox'
import { InputButton } from './InputButton'
import { Input } from './Input'


export function Form(){

  const formRef = useRef(null);

  const [initialCDI, setInitialCDI] = useState([])
  const [initialIPCA, setInitialIPCA] = useState([])
  const [dataSimulation, setDataSimulation] = useState([])


  useEffect(async ()=> {
    const data = await api.get('indicadores')
    const response = data.data

    setInitialCDI(response[0].valor)
    setInitialIPCA(response[1].valor)
  },[])

  async function handleSimulation(indexacao, rendimento){
    const data = await api.get(`simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
    const response = data.data

    setDataSimulation(response)
  }

  async function handleSubmit(data) {
    try{
      const schema = Yup.object().shape({
        aporteInicial: Yup.string().required('O campo é obrigatório.'),
        aporteMensal: Yup.number().typeError('Aporte deve ser um número').required('O campo é obrgatório'),
        prazoMeses: Yup.number().typeError('Apenas o numero de meses').required('O campo é obrgatório'),
        rentabilidade: Yup.number().typeError('Rentabilidade deve ser um número').required('O campo é obrgatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const dataSimulacao = {
        rendimento: data.rendimento,
        indexacao: data.indexacao
      }

      handleSimulation(dataSimulacao.indexacao, dataSimulacao.rendimento)
      
      formRef.current.clearField('aporteMensal')
      formRef.current.clearField('aporteInicial')
      formRef.current.clearField('prazoMeses')
      formRef.current.clearField('rentabilidade')
      formRef.current.setErrors({})
      console.log(data)
    }catch (err) {
      if(err instanceof Yup.ValidationError){
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }

  function functionThatResetsForm() {
    formRef.current.clearField('aporteInicial')
    formRef.current.clearField('aporteMensal')
    formRef.current.clearField('prazoMeses')
    formRef.current.clearField('rentabilidade')
    formRef.current.setErrors({})
  }

  return (
    <FormContainer >
      <Unform ref={formRef}  onSubmit={handleSubmit}>
        <ContainerWrapper>
          <WrapperInput>
            <RadioBox title="Rendimento" type="rendimento" options={["liquido", "bruto"]}/>
          </WrapperInput>

          <WrapperInput>
            <RadioBox title="Taxa de Indexação" type="indexacao" options={["pre", "pos", "fixado"]}/>
          </WrapperInput>
        </ContainerWrapper>

        <ContainerWrapper>
          <WrapperInput>
            <Input title="Aporte Inicial" name="aporteInicial" placeholder="R$" isReadOnly = {false}/>
          </WrapperInput>
          <WrapperInput>
            <Input title="Aporte Mensal" name="aporteMensal" isReadOnly = {false}/>
          </WrapperInput>
        </ContainerWrapper>

        <ContainerWrapper>
          <WrapperInput>
            <Input title="Prazo (em meses)" name="prazoMeses" isReadOnly = {false}/>
          </WrapperInput>
          <WrapperInput>
            <Input title="Rentabilidade" name="rentabilidade" placeholder="%" isReadOnly = {false}/>
          </WrapperInput>
        </ContainerWrapper>

        <ContainerWrapper>
          <WrapperInput>
            <Input title="IPCA (ao ano)" name="ipca" value={`${initialIPCA}%`} isReadOnly = {true}/>
          </WrapperInput>
          <WrapperInput>
            <Input title="CDI (ao ano)" name="cdi" value={`${initialCDI}%`} isReadOnly = {true}/>
          </WrapperInput>
        </ContainerWrapper>

        <ContainerWrapper>
          <WrapperInput>
            <InputButton title="Limpar Campos" type="button" onClick={functionThatResetsForm}/>
          </WrapperInput>
          <WrapperInput>
            <InputButton title="Simular" type="submit"/>
          </WrapperInput>
        </ContainerWrapper>
      </Unform>
    </FormContainer>
  )
}