import { useRef, useEffect,useState } from 'react'
import { FormContainer, ContainerWrapper, WrapperInput } from './styles'
import { Form as Unform } from '@unform/web'
import * as Yup from 'yup'
import { api } from '../../services/api'

import { RadioBox } from './RadioBox'
import { InputButton } from './InputButton'
import { Input } from './Input'


export function Form({handleSimulation}){

  const formRef = useRef(null);

  /**
   * Estado initialCDI que é responsavel por armazenar os dados inicias de CDI e IPCA
   */
  const [initialCDIandIPCA, setInitialCDIandIPCA] = useState({})

  /**
   * useEffect responsavel por fazer um fetch na API logo quando o componente é carregado
   * e salvar os dados da requisição no estado initialCDI, onde os valores serão utilizados para
   * preencher os campos CDI e IPCA
   */
  useEffect(async ()=> {
    const data = await api.get('indicadores')
    const response = data.data

    const initialValues = {
      cdiValue: response[0].valor,
      ipcaValue: response[1].valor
    }

    setInitialCDIandIPCA(initialValues)
  },[])

  /**
   * Função ThatResetsForm serve para "limpar/redefinir" os campos com a tag "name"
   * aporteInicial, aporteMensal, prazoMeeses, rentabilidade, e também remover os erros que forem apresentados.
   */
  function functionThatResetsForm() {
    formRef.current.clearField('aporteInicial')
    formRef.current.clearField('aporteMensal')
    formRef.current.clearField('prazoMeses')
    formRef.current.clearField('rentabilidade')
    formRef.current.setErrors({})
  }

  /**
   * Função handleSubmit, função responsavel por realizar a verificação se os campos do formulário
   * estão preendhidos corretamente, caso estejam preenchidos corretamente ela ira realizar o request
   * na API bucando os valores da simulação desejada, caso contrário ira setar os erros nos campos do
   * formulário e nao ira realizar o request.
   */
  async function handleSubmit(data) {
    try{
      /**
       * Shema para os dados que serão informados nos campos do formulário, onde é informado o atributo 'name'
       * do input que deseja validar, e lógo após é passado a validação que deseja para aquele campo.
       */
      const schema = Yup.object().shape({
        aporteInicial: Yup.string().required('O campo é obrigatório.'),
        aporteMensal: Yup.number().typeError('Aporte deve ser um número').required('O campo é obrgatório'),
        prazoMeses: Yup.number().typeError('Apenas o numero de meses').required('O campo é obrgatório'),
        rentabilidade: Yup.number().typeError('Rentabilidade deve ser um número').required('O campo é obrgatório')
      })

      /**
       * Método definido para que o YUP verifique todos os campos passados no schema e verifique se ele é
       * valido ou não. É necessario passar este método pois o YUP por padrão quando encontra uma validação
       * incoerente ele retorna este erro e nao verifica o restante.
       */
      await schema.validate(data, {
        abortEarly: false
      })

      const dataSimulacao = {
        rendimento: data.rendimento,
        indexacao: data.indexacao
      }

      handleSimulation(dataSimulacao.indexacao, dataSimulacao.rendimento)
      
      functionThatResetsForm()
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
            <Input title="Aporte Inicial" name="aporteInicial" isReadOnly = {false}/>
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
            <Input title="Rentabilidade" name="rentabilidade" isReadOnly = {false}/>
          </WrapperInput>
        </ContainerWrapper>

        <ContainerWrapper>
          <WrapperInput>
            <Input title="IPCA (ao ano)" name="ipca" value={`${initialCDIandIPCA.ipcaValue}%`} isReadOnly = {true}/>
          </WrapperInput>
          <WrapperInput>
            <Input title="CDI (ao ano)" name="cdi" value={`${initialCDIandIPCA.cdiValue}%`} isReadOnly = {true}/>
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