import React from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Spinner from "./components/Spinner";
import UserDetails from "./components/UserDetails";
import UserRepos from "./components/UserRepos";
//import { render } from "@testing-library/react";

class App extends React.Component {
  state = {
    searchResults: null,
    searchResultsRepos: null,
    searchTerm: "",
    isError: false,
    isLoading: false,
  };
  fetchUsersBySearchTerm = async () => {
    try {
      this.setState({ isLoading: true });
      const url = "https://api.github.com/users/" + this.state.searchTerm;
      const results = await axios.get(url);

      this.setState({
        isError: false,
        searchResults: results.data,
        isLoading: false,
      });
    } catch (err) {
      console.error("An error occured", err);
      this.setState({ isError: true, isLoading: false });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  fetchReposBySearchTerm = async () => {
    try {
      this.setState({ isLoading: true });
      const url =
        "https://api.github.com/users/" + this.state.searchTerm + "/repos";
      const results = await axios.get(url);
      console.log("11111111", results.data);
      this.setState({
        isError: false,
        searchResultsRepos: results.data,
        isLoading: false,
      });
    } catch (err) {
      console.error("An error occured", err);
      this.setState({ isError: true, isLoading: false });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.setState.searchTerm}
          setSearchTerm={this.setSearchTerm}
          searchUser={this.fetchUsersBySearchTerm}
          searchRepos={this.fetchReposBySearchTerm}
        />

        {this.state.isLoading && <Spinner />}
        {this.state.isError && <h1>Error</h1>}
        <UserDetails userDetails={this.state.searchResults} />
        <UserRepos repos={this.state.searchResultsRepos} />
      </div>
    );
  }
}

export default App;
