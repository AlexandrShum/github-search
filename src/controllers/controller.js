import { useState } from "react";
import axios from "axios";

const API = "https://api.github.com";
const searchPath = "/search/repositories";

export const useGithubController = () => {
  const [repositoriesList, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const recordsOfPage = 10;

  const getData = async (searchValue, page = 1) => {
    setLoading(true);

    try {
      const { data } = await axios.get(API + searchPath, {
        params: {
          q: searchValue,
          per_page: recordsOfPage,
          page
        }
      });

      setLoading(false);
      setTotalPages(Math.ceil(data.total_count / recordsOfPage))
      setList(data.items);
    } catch (error) {
      console.error(error)
    }
  };

  return {
    repositoriesList,
    getData,
    loading,
    totalPages
  };
};
