import React, { useState } from "react";
import { ArrowLeft, ArrowRigth } from "./Arrows";

export const PaginationBlock = ({ page, handlePageChange, totalPages }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleInputChange = (event) => {
    let value = event.target.value;
    if (value === "" || (parseInt(value, 10) >= 1 && parseInt(value, 10) <= totalPages)) {
      setInputValue(value);
    }
  };

  const handleInputBlur = () => {
    let newValue = inputValue === "" ? page : parseInt(inputValue, 10);
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > totalPages) {
      newValue = totalPages;
    }

    setInputValue(newValue.toString());
  };

  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        justifyContent: "space-beetween",
        alignItems: "end"
      }}
    >
      <div
        style={{
          height: "2rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "end",
          width: "200px",
          margin: "0px 10px"
        }}
      >
        <ArrowLeft handlePageChange={ handlePageChange } page={ page } />
        <div style={{ fontSize: "24px", fontWeight: 500}}>
          { page }
          {" / "}
          {totalPages}
        </div>
        <ArrowRigth handlePageChange={ handlePageChange } page={ page } totalPages={ totalPages } />
      </div>
  
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end"}}>
        <div style={{ fontSize: "24px", margin: "0px 8px" }}>
          {"go to"}
        </div>
        <input
          type="number"
          style={{
            width: "4rem",
            height: "20px",
            fontSize: "18px",
            paddingLeft: "8px",
            margin: "0px 10px"
          }}
          min={1}
          max={totalPages}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <div
          onClick={() => {
            if (!inputValue) {
              return null;
            }
            handlePageChange(inputValue);
          }}
          style={{
            background: `url(/pagination-arrow-right.png) 0 0/100% 100% no-repeat`,
            width: "1.5rem",
            height: "1.5rem",
            cursor: inputValue === null ? "default" : "pointer"
          }}/>
      </div>
    </div>
  );
}
