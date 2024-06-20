import React from "react";
import { SearchField } from "./SearchField/SearchField";
import { SearchButton } from "./SearchButton/SearchButton";

export const Search = ({ onClick, disabled, onChange, value }) => {

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter" && !!value ) {
      onClick();
    }
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "2rem", width: "100%" }}>
      <div style={{ margin: "16px 30px ", fontSize: "28px", opacity: "0.85"}}>
        {"Search repository"}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "end", height: "3rem"}}>
        <SearchField onChange={ onChange } value={ value } onKeyDown={handleEnterKeyPress} />
        <SearchButton onClick={ onClick } disabled={ disabled } />
      </div>
    </div>
  );
}
