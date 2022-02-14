import React,{ useRef, useEffect } from 'react'
import { WrapperRadioBox } from './styles'

import { useField } from '@unform/core'

export function RadioBox({title, type,  options}){

  /**
   * Hook próprio do React que esta sendo utilizado para referenciar os inputs que serão
   * eventualmente criados.
   */
  const inputRef = useRef([])

  /**
   * Desestruturação de métodos de dentro da biblioteca unform usando o hook useField.
   */
  const { fieldName, registerField } = useField(type)


  /**
   * useEffect executando o método registerField que vem de dentro do Unform, onde aqui ele esta selecionando
   * o boxRadio que esta selecionado e pegando o "value" dele para ser usado no "data" do formulário.
   */
  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: refs => {
        return refs.current.find(input => input?.checked)?.value
      }
    })
  }, [fieldName, registerField])

  return (
    <>
      <span>{title}:</span>
      <WrapperRadioBox>
        {options.map((item, index) => (
          <React.Fragment key={item}>
            <input
              ref={ref => {
                inputRef.current[index] = ref
              }}
              id={item}
              type="radio"
              name={type}
              value={item}
            />
            <label htmlFor={item}>{String(item).toUpperCase()}</label>
          </React.Fragment>
        ))}
      </WrapperRadioBox>
    </>
  )
}