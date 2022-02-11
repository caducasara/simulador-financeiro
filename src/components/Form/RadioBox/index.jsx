import React,{ useRef, useEffect, useState } from 'react'
import { WrapperRadioBox } from './styles'

import { useField } from '@unform/core'

export function RadioBox({title, type,  options}){

  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(type)
  const [isBoxChecked,setIsBoxChecked] = useState('')

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      <span>{title}:</span>
      <WrapperRadioBox>
        {options.map(item => (
          <React.Fragment key={item}>
            <input ref={inputRef} id={item} type="radio" name={type} value={item}/>
            <label htmlFor={item}>{String(item).toUpperCase()}</label>
          </React.Fragment>
        ))}
      </WrapperRadioBox>
    </>
  )
}