import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'

const SearchBox = (props) => {
  const [searchText, setsearchText] = useState('')
  const [searchType, setSearchType] = useState('repositories')

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  useEffect(() => {
    const handleSearchChange = async () => {
      props.onSearchChange({ searchType, searchText })
    }

    handleSearchChange()
  }, [searchText, searchType])

  /**
     * This will be called every time there is
     * a change in the input
     * @param {*} { target: { value } }
     */

  return (
    <div>

      <Form>
        <label for="site-search"> <h2 class="text-normal">
          <SVG class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></SVG>
        GitHub Searcher
        
    </h2></label>
        <Input
          type="text"
          placeholder={props.placeholder}
          value={searchText}
          onChange={e => setsearchText(e.target.value)} />
        <Select name="searchType" onChange={e => setSearchType(e.target.value)}>
          <option value="repositories" selected>Repositories</option>
          <option value="users">Users</option>
        </Select>
      </Form>
    </div>
  )

}

const Input = styled.input`

padding: 11px;
    font-size: 17px;
    // float: left;
    width: 300px;
    // background: #f1f1f1;
    border: 1px solid lightgray;
    padding: 10px 20px;
    margin-right: 5px;

  // padding: 10px 20px;
  // border: solid 1px #gray;
  // // border-radius: 5px;
  // margin-right: 5px;
  // outline: none;
  // // &:focus {
  // //   border-color: #005ad8;
  // //   transition: 0.5s;
  // // }
`

const Select = styled.select`
color:gray;
padding: 9.4px;
    font-size: 17px;
    // float: left;
    width: 150px;
    // background: #f1f1f1;
    border: 1px solid lightgray;
    margin-right: 5px;
    &:focus {
        border-color: gray;
        transition: 0.5s;
      }


  // padding: 10px 20px;
  // border: solid 2px #686868;
  // border-radius: 5px;
  // margin-right: 5px;
  // outline: none;
  // &:focus {
  //   border-color: #005ad8;
  //   transition: 0.5s;
  // }
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

const Form = styled.form`
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;

`

const SVG = styled.svg`
vertical-align: text-bottom;
padding-right: 8px;
`

export default SearchBox