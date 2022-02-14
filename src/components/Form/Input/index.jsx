import { useEffect, useRef } from 'react'
import { Input as InputChakra } from '@chakra-ui/react'
import { useField } from '@unform/core'

export function Input({title, name, isReadOnly, ...rest}){
  
  /**
   * Hook próprio do React que esta sendo utilizado para referenciar os inputs que serão
   * eventualmente criados.
   */
  const inputRef = useRef(null)

  /**
   * Desestruturação de métodos de dentro da biblioteca unform usando o hook useField.
   */
  const { fieldName, registerField, defaultValue, error } = useField(name)

  /**
   * useEffect executando o método registerField que vem de dentro do Unform, onde ele basicamente serve
   * para informar que o input faz parte do formulário.
   */
  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      <span style={{color: error ? '#f00' : ''}}>{title}</span>
      <InputChakra
        ref={inputRef}
        name={name}
        type='text'
        maxW={['100%', '200px']}
        variant='flushed'
        borderColor={error ? '#f00' : 'black'}
        borderBottom='2px solid black'
        focusBorderColor = 'false'
        isReadOnly={isReadOnly}
        defaultValue={defaultValue}
        {...rest}
      />
      { error && <span style={{color: '#f00'}}>{error}</span> }
    </>
  )
}