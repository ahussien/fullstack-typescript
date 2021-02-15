import React, { Component, useState, useRef } from 'react'
import _ from 'lodash';
import styled from 'styled-components'
import SearchBox from '../components/search/SearchBox'
import RepoCardList from '../components/repositories/RepoCardList'
import UserCardList from '../components/users/UserCardList'
import Api from "../services/Api";
import styles from '../styles.module.css'

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchText, setSearchText] = useState('');

  /**
 * This will be called every time there is
 * a change in the input
 * @param {*} { target: { value } }
 */
  const isShownMiddle = searchText.length < 3 || searchText === ''

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const debouncedSearch = useRef(_.debounce((searchType, searchText) => search(searchType, searchText), 1000)).current;

  /**
 * This will be called every time there is
 * a change in the input
 * @param {*} { target: { value } }
 */
  const Status = ({ status }) => {
    if (status === '') { return (<div></div>) }
    if (status === 'loading') { return (<div>Loading Data ...</div>) }
    if (status === 'error') { return (<div>Something went wrong ...</div>) }
    return null
  }

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const resetSearchPage = () => {
    setSearchResults([]);
    setStatus('');
  };

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const onSearchChange = ({ searchType, searchText }) => {
    setSearchType(searchType);
    setSearchText(searchText);
    resetSearchPage();

    if (searchText.length >= 3) {
      debouncedSearch(searchType, searchText);
    }
  };

  /**
   * In charge to send the value
   * to the API.
   * @param {*} value
   */
  const search = async (searchType, searchText) => {
    setStatus('loading');
    try {
      const { data } = await Api.getSearchGithub(searchType, searchText)
      setSearchResults(data)
      setStatus('');
    } catch (error) {
      setStatus('error');
    }
  }

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  return (
    <div className={isShownMiddle ? styles.containercentred : styles.container}>
      <SearchBox
        placeholder="Enter Repository Name"
        buttonText="Search"
        onSearchChange={onSearchChange}
      />

      <Status status={status} />

      { searchType === 'repositories'
        ? (<RepoCardList items={searchResults} />)
        : (<UserCardList items={searchResults} />)
      }
    </div>
  )
}

export default SearchPage