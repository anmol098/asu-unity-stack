import PropTypes from "prop-types";
import React from "react";

import { SearchMessageLayout } from "./index.styles";

const SearchMessage = ({ term, number, loggedIn, engine, GASource }) => {

  function getParams() {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get('q'));
  }
  return (
    <SearchMessageLayout>
      <span>Your search for </span>
      <span className="search-message-emphasis">{term} </span>
      <span>returned </span>
      <span className="search-message-emphasis">{number} </span>
      {GASource === "all faculty and staff results" && (
        <span>faculty and staff </span>
      )}
      <span>
        {" "}
        {!loggedIn && engine === "web_dir_students" && (
          <>public</>
        )} results.{" "}
      </span>
      {!loggedIn && engine === "web_dir_students" && (
        <span>
          {getParams()}
          <a href="/caslogin">Sign in</a> to view all student results.
        </span>
      )}
    </SearchMessageLayout>
  );
};

SearchMessage.propTypes = {
  term: PropTypes.string,
  number: PropTypes.number,
  loggedIn: PropTypes.bool,
  engine: PropTypes.string,
  GASource: PropTypes.string,
};

export { SearchMessage };
