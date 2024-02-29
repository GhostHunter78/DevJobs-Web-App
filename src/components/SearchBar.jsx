import { useState } from "react";
import FilterIcon from "../SVGs/FilterIcon";
import DarkFilterIcon from "../SVGs/DarkFilterIcon";
import SearchIcon from "../SVGs/SearchIcon";

const SearchBar = ({ isDarkMode }) => {
  return (
    <form
      className="pl-6 pr-4 py-4 flex items-center justify-between rounded-md "
      style={{
        background: isDarkMode ? "#19202d" : "white",
      }}
    >
      <input
        className=" outline-none"
        type="text"
        placeholder="Filter by title..."
        style={{
          background: isDarkMode ? "#19202d" : "white",
        }}
      />
      <div className="flex gap-6">
        <button>
          {isDarkMode ? (
            <DarkFilterIcon isVisible={true} />
          ) : (
            <FilterIcon isVisible={true} />
          )}
        </button>
        <button>
          <FilterIcon />
        </button>
        <button className="bg-lightBlue px-[14px] py-[14px] rounded">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
