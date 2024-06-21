import React from "react";
import PropTypes from 'prop-types';

export const RepoInfo = ({repoName, developerName, gitHubUrl, language}) => {
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          letterSpacing: "4px"
        }}
      >
        {repoName}
      </div>

      <div style={{padding: "4px 0px 0px 4px", display: "flex", opacity: "0.8"}}>
        {"Created by:"}
        <div style={{marginLeft: "16px"}}>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">{developerName}</a>
        </div>
      </div>

      <div style={{padding: "4px 0px 0px 4px", display: "flex",}}>
        <div style={{opacity: "0.8"}}>
          {"Main technology:"}
        </div>
        <div style={{marginLeft: "16px"}}>
          {language}
        </div>
      </div>
    </div>
  );
};

RepoInfo.propTypes = {
  repoName: PropTypes.string,
  developerName: PropTypes.string,
  gitHubUrl: PropTypes.string,
  language: PropTypes.string,
};