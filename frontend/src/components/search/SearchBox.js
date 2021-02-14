import React, { Component, useState } from 'react'
import styled from 'styled-components'

const SearchBox = (props) => {
  const [keyword, setKeyword] = useState('')

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   props.onSubmit(keyword)
  // }

  const onChangeHandler = (e) => {
    setKeyword(e.target.value)
    props.onChange(e)
  }

  return (
    <div>
      <Input
        type="text"
        placeholder={props.placeholder}
        value={keyword}
        onChange={onChangeHandler}/>
        
      {/* <Button type='submit' onClick={submitHandler}>
        {props.buttonText}
      </Button> */}
    </div>
  )

}

const Input = styled.input`
  padding: 10px 20px;
  border: solid 2px #686868;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  border: solid 2px #005ad8;
  border-radius: 5px;
  background-color: #005ad8;
  color: white;
  outline: none;
  cursor: pointer;
`

export default SearchBox