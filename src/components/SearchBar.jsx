import FilterIcon from "../SVGs/FilterIcon";
import SearchIcon from "../SVGs/SearchIcon";

const SearchBar = () => {
  return (
    <form className="bg-white pl-6 pr-4 py-4 flex items-center justify-between rounded-md">
      <input
        className=" outline-none"
        type="text"
        placeholder="Filter by title..."
      />
      <div className="flex gap-6">
        <button className="">
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
