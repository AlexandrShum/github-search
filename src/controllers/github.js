import {useState} from "react";
import axios from "axios";

const API = "https://api.github.com";
const searchPath = "/search/repositories";
const recordsOfPage = 10;

export const useGithubController = () => {
  const [searchResult, setSearchResult] = useState({
    repositoriesList: [],
    loading: false,
    totalPages: 0,
  });

  const setLoading = (isLoading) => {
    setSearchResult((prev) => ({
      repositoriesList: prev.repositoriesList, 
      totalPages: prev.totalPages, 
      loading: isLoading
    }));
  };

  const getData = async (searchValue, page = 1) => {
    setLoading(true);
    try {
      const {data} = await axios.get(API + searchPath, {
        params: {
          q: searchValue,
          per_page: recordsOfPage,
          page
        }
      });

      setSearchResult({
        loading: false,
        totalPages: Math.ceil(data.total_count / recordsOfPage),
        repositoriesList: data.items
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return {
    repositoriesList: searchResult.repositoriesList,
    getData,
    loading: searchResult.loading,
    totalPages: searchResult.totalPages
  };
};
