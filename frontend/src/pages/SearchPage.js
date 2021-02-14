import React, { Component, useState, useRef } from 'react'
import _ from 'lodash';
import styled from 'styled-components'
import SearchBox from '../components/search/SearchBox'
import RepoCardList from '../components/repositories/RepoCardList'
import Api from "../services/Api";

const SearchPage = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [keyword, setKeyword] = useState('')
  const [errorMssg, setErrorMssg] = useState('');

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const debouncedSearch = useRef(_.debounce(searchTerm => searchRepos(searchTerm), 1000)).current;

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const onChange = ({ target: { value } }) => {
    setKeyword(value);
    if (value.length >= 3) {
      debouncedSearch(value);
    }
  };

  /**
   * In charge to send the value
   * to the API.
   * @param {*} value
   */
  const searchRepos = async (keyword) => {
    setIsError(false);
    setIsLoading(true);
    try {
      if (keyword) {
        const { data } = await Api.getSearchGithub('repositories', keyword)
        setSearchResults(data)
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <SearchBox
        placeholder="Enter Repository Name"
        buttonText="Search"
        onSubmit={value => searchRepos(value)}
        onChange={onChange}
      />

      { isLoading
        ? (<div>Loading ...</div>)
        : (<RepoCardList items={searchResults} />)}

      {errorMssg}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default SearchPage