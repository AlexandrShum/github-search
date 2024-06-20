import React from "react";

const styles = {
  width: "1.5rem",
  height: "1.5rem",
}

export const ArrowLeft = ({ handlePageChange, page }) => (
  <div
    onClick={() => {
      if (page <= 1) {
        return null;
      } 
      handlePageChange(page - 1)
    }}
    style={{
      background: "url(https://img.icons8.com/?size=100&id=40217&format=png&color=E4E5E3) 0 0/100% 100% no-repeat",
      opacity: page <= 1 ? "0.5" : "1",
      cursor: page <= 1 ? "default" : "pointer",
      ...styles
    }}>

  </div>
);

export const ArrowRigth = ({ handlePageChange, page, totalPages }) => (
  <div
    onClick={() => {
      if ( page >= totalPages ) {
        return null;
      }
      handlePageChange(page + 1)
    }}
    style={{
      background: "url(https://img.icons8.com/?size=100&id=7849&format=png&color=E4E5E3) 0 0/100% 100% no-repeat",
      opacity: page >= totalPages ? "0.5" : "1",
      cursor: page >= totalPages ? "default" : "pointer",
      ...styles
    }}>
  </div>
);
