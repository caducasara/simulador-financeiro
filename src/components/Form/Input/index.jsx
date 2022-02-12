import { useEffect, useRef } from 'react'
import { Input as InputChakra } from '@chakra-ui/react'
import { useField } from '@unform/core'

export function Input({title, name, isReadOnly, ...rest}){
  
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

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