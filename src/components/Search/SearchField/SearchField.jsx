import React from "react";

export const SearchField = ({ onChange, value, onKeyDown }) => {

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
          backgroundImage: "url(/search-icon.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "",
          width: "32px",
          height: "32px",
          top: "18%",
          right: "10px"
        }}/>
    </div>
  );
}
