import React from "react";

function SearchInput({
  placeholder,
  name,
  value,
  handleChange,
  handleCleanSearch,
}) {
  return (
    <div className="search-box">
      <input
        className="search-input"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        type="text"
        name={name}
        id="find"
      />
      {value !== "" && (
        <div onClick={handleCleanSearch} className="btn-clean">
          Limpiar
        </div>
      )}
    </div>
  );
}

export default SearchInput;
