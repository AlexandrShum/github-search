import React from "react";
import TextTruncate from "react-text-truncate";

export const Description = ({ description }) => (
  <div style={{ maxWidth: "80%", margin: "16px 0px 16px 4px" }}>
    <div style={{ marginBottom: "4px", fontSize: "18px", opacity: "0.8"}}>
      {"Description: "}
    </div>
    <div>
      {description && <TextTruncate
          line={4}
          text={`${ description }`}
        />
      }
    </div>
  </div>
);
