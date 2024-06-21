import React from "react";
import PropTypes from 'prop-types';

export const Topics = ({topic}) => (
  <div
    style={{
      margin: "4px",
      border: "1px solid #87CF23",
      borderRadius: "10px",
      padding: "2px 8px"
    }}
  >
    {`#${topic}`}
  </div>
);

Topics.propTypes = {
  topic: PropTypes.string
};
