import axios from "axios"

export default {
    // Get book from google search 
    getSearchGithub: function(searchType, searchText) {
        return axios.post('http://localhost:5000/api/search', {
            type: searchType,
            query: searchText 
          })
    }

}