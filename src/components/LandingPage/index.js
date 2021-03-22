import React, { useState, useEffect } from "react";
//import "./App.css";
import Issues from "../Issues";
import SearchBar from "../SearchBar";
import "./style.css"

function LandingPage({ passIssuesDetail }) {
  const [fetched, setFetched] = useState(false);
  const [idName, setIdName] = useState("");
  const [repoName, setRepoName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  //const [paginatedPage,setPaginatedPage]=useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const fetchClicked = () => {
    fetch(
      `https://api.github.com/repos/${idName}/${repoName}/issues?page=1&per_page=100`
    )
      .then((response) => {
        if (!response.ok)
          throw Error("Please enter correct user id and repo name.");

        setError("");
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        return setArr(data);
      })
      .catch((e) => {
        setFetched(false);
        setError(e.message);
      });
  };
  const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (e) => {
    setCurrentPage(e);
  };
  return (
    <div>
      <div className="search">
        <h1>Github</h1>
        <SearchBar
          type="text"
          placeholder="Enter user id name"
          value={idName}
          onChange={(e) => setIdName(e.target.value)}
        />
        <br />
        <SearchBar
          type="text"
          placeholder="Enter repo name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setFetched(true);
            setIsLoading(true);
            fetchClicked();
          }}
        >
          Fetch
        </button>

        <br />
        {error}
        {isLoading === true && fetched === true ? <div>Loading...</div> : ""}
      </div>
      {fetched === true ? (
        <Issues
          fetchedData={currentPosts}
          passIssuesDetail={passIssuesDetail}
          postsPerPage={postsPerPage}
          totalPosts={arr.length}
          paginate={paginate}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default LandingPage;
