import { useState } from "react";
import cards from "../data/cards.json";

const searchTeammates = (searchText) => {
  // Logic for searching inside data
  return cards.filter((res) =>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setfiltertedTeammates }) => {
  //const searchText = "Search";
  const [searchText, setSearchText] = useState("Hello");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filtertedTeammates = searchTeammates(searchText);
          console.log(filtertedTeammates);
          setfiltertedTeammates(filtertedTeammates);
        }}
      >
        <input
          id="teammate"
          placeholder="teammate"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
