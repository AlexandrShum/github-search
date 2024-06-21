import React from "react";
import PropTypes from 'prop-types';

export const SearchField = ({onChange, value, onKeyDown}) => {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <input
        type="text"
        value={value}
        id="search-field"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        style={{
          height: "48px",
          width: "650px",
          paddingLeft: "16px",
          paddingRight: "44px",
          border: "1px solid #868786",
          borderRadius: "10px 0px 0px 10px",
          fontSize: "24px",
          filter: "drop-shadow(0px 3px 5px #8e8e8e)",
          boxSizing: "border-box"
        }}
      />
      <div 
        style={{
          position: "absolute",
          background: "url(https://img.icons8.com/?size=100&id=7695&format=png&color=474B4F) 0 0/100% 100% no-repeat",
          width: "32px",
          height: "32px",
          top: "18%",
          right: "10px"
        }}/>
    </div>
  );
};

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};