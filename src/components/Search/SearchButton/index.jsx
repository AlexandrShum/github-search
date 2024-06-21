import React from "react";
import PropTypes from 'prop-types';

export const SearchButton = ({onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      id="search-button"
      style={{
        border: "1px solid #868786",
        borderLeft: "inherit",
        backgroundColor: "#474B4F",
        height: "48px",
        padding: "0px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px 10px 10px 0px",
        cursor: "pointer",
        filter: "drop-shadow(0px 3px 5px #8e8e8e)",
        opacity: disabled ? "0.6" : "1",
        boxSizing: "border-box"
      }}
    >
        <div 
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#E4E5E3"
          }}
        >
          Search
        </div>
    </button>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};