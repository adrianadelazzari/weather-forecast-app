import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const onChangeHandler = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {};

  return (
    <AsyncPaginate
      placeholder="Search City"
      debounceTimeout={600}
      value={search}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
