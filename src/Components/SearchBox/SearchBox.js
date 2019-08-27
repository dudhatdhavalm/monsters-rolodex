import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchBox;
