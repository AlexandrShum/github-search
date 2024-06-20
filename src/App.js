import { useState } from "react";
import { Oval } from "react-loader-spinner"
import { Search, RepositoryInfo, Container, PaginationBlock } from "./components";
import { useGithubController } from "./controllers/controller";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const { getData, loading, repositoriesList, totalPages } = useGithubController();

  const handlePageChange = (pageValue) => {
    setPage(pageValue);
    getData(searchValue, page);
  };

  return (
    <div className="App">
      <Container>
        <Search
          onClick={() => {
            setPage(1)
            getData(searchValue, page);
          }}
          disabled={!(!!searchValue || loading)}
          onChange={setSearchValue}
          value={searchValue}
        />
        {repositoriesList && (
          <div>
            {!repositoriesList.length && (
              <div style={{ fontSize: "28px", opacity: "0.8"}}>
                {"Your request did not yield results..."}
              </div>)
            }
            {loading && 
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                <Oval
                  height="80"
                  width="80"
                  radius="9"
                  color="#E4E5E3"
                  secondaryColor="#E4E5E3"
                  ariaLabel="loading"
                  strokeWidth="4"
                />
              </div>
            }
            {!loading && repositoriesList.map((item, i) => (
              <div key={i}>
                <RepositoryInfo data={item}/>
              </div>
            ))}
            {!loading && totalPages > 1 &&
              <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
                <PaginationBlock
                  page={ page }
                  handlePageChange={ handlePageChange }
                  totalPages={ totalPages }
                />
              </div>
            }
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
