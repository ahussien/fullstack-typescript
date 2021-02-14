import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SearchBox from '../components/search/SearchBox'
import RepoCardList from '../components/repositories/RepoCardList'
import Api from "../services/Api";

const SearchPage = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    const search = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data } = await Api.getSearchGithub('repositories', keyword)
        setSearchResults(data)
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    if (keyword) {
      search()
    }
    
  }, [keyword])

  return (
    <Container>
      <SearchBox
        placeholder="Enter Repository Name"
        buttonText="Search"
        onSubmit={value => setKeyword(value)}
      />

      { isLoading
        ? (<div>Loading ...</div>)
        : (<RepoCardList items={searchResults} />)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default SearchPage