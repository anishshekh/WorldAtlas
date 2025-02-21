import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdClear } from "react-icons/md";

const SearchBar = ({ search, setSearch }) => {
  const [isSearchEmpty, setIsSearch] = useState(true);



  const getInputData = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  
  const clearSearchInput = () => {
    setIsSearch(true);
    setSearch("");
  }

  useEffect(() => {
    (search === "") ? setIsSearch(true) : setIsSearch(false);
  }, [search]);

  return (
    <>
      <div className="search-section card">
        <div className="search-input-container">

          <IoMdSearch className="search-icon" />
          <input
            type="text"
            onChange={(e) => getInputData(e)}
            value={search}
            placeholder="Search Here ..." />

          <MdClear
            className={isSearchEmpty ? "delete-icon" : "delete-icon-activeted"}
            onClick={clearSearchInput}
          />

        </div>
      </div>
    </>
  )
}
export default SearchBar;