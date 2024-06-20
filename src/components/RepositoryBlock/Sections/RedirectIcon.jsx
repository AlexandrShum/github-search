import React from "react";

export const RedirectIcon = ({ href }) => (
  <div>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "10px",
          background: "url(/redirect-icon.png) 0 0/100% 100% no-repeat",
          cursor: "pointer",
        }}
        className="highlight"
      />
    </a>
  </div>
);
