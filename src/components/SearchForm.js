import React from "react";

export default function SearchForm(props) {
  const { searchUser, setSearchTerm, searchTerm, searchRepos } = props;

  const clickHandler = async (e) => {
    e.preventDefault();

    if (searchUser) {
      setSearchTerm(searchTerm);
      await searchUser();
      await searchRepos();
    }
  };

  const textChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={searchTerm} onChange={textChangeHandler} />

        <button onClick={clickHandler} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
