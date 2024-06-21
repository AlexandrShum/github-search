import React from "react";
import {
  Avatar,
  Topics,
  Description,
  RedirectIcon,
  RepoInfo,
} from "./Sections";
import PropTypes from 'prop-types';

export const RepositoryInfo = ({owner, topics, name, cloneUrl, description, language}) => {
  const mainTopics = topics.slice(0, 6);
  return (
    <div
      style={{
        width: "700px",
        minHeight: "200px",
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0px",
        backgroundColor: "#474B4F",
        padding: "12px",
        borderRadius: "16px",
        position: "relative",
        border: "1px solid #868786",
        filter: "drop-shadow(0px 3px 5px #8e8e8e)",
        boxSizing: "border-box"
      }}
    >
      <Avatar picture={owner.avatar_url} />

      <div style={{width: "85%"}}>
        <RepoInfo
          repoName={name}
          developerName={owner.login}
          gitHubUrl={owner.html_url}
          language={language}
        />
        <Description description={description} />
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {mainTopics.map((topic, i) => (
            <Topics topic={topic} key={i} />
          ))}
        </div>
      </div>

      <div style={{position: "absolute", top: "10px", right: "10px"}}>
        <RedirectIcon href={cloneUrl}/>
      </div>
    </div>
  );
};

RepositoryInfo.propTypes = {
  owner: PropTypes.object,
  topics: PropTypes.object,
  name: PropTypes.object,
  cloneUrl: PropTypes.object,
  description: PropTypes.object,
  language: PropTypes.object,
};