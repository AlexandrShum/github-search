import React from "react";
import PropTypes from 'prop-types';

export const Avatar = ({picture}) => (
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "16px",
      background: `url(${picture}) 0 0/100% 100% no-repeat`,
      marginTop: "4px"
    }}
  />
);

Avatar.propTypes = {
  picture: PropTypes.string.isRequired
};