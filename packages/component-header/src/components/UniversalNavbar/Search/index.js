// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

import { SearchWrapper } from "./index.styles";

/**
 * @typedef {{
 *  display: "mobile" | "desktop"
 * }} UniversalNavbarProps
 */

/**
 *
 * @param {UniversalNavbarProps} props
 * @returns {JSX.Element}
 */

const Search = ({ display }) => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);

  const handleChangeVisibility = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <SearchWrapper
      action="https://search.asu.edu/search"
      method="get"
      name="gs"
    >
      {display === "desktop" ? (
        <>
          <button
            type="button"
            aria-label="Search asu.edu"
            onClick={handleChangeVisibility}
          >
            <FontAwesomeIcon icon={open ? "times-circle" : "search"} />
          </button>
          {open && (
            <input
              ref={inputRef}
              className="form-control"
              type="search"
              name="q"
              aria-labelledby="header-top-search"
              placeholder="Search asu.edu"
              required
            />
          )}
        </>
      ) : (
        <>
          <FontAwesomeIcon icon="search" />
          <label>
            <input
              ref={inputRef}
              className="form-control"
              type="search"
              name="q"
              aria-labelledby="header-top-search"
              required
            />
            Search asu.edu
          </label>
        </>
      )}
      <input name="site" value="default_collection" type="hidden" />
      <input name="sort" value="date:D:L:d1" type="hidden" />
      <input name="output" value="xml_no_dtd" type="hidden" />
      <input name="ie" value="UTF-8" type="hidden" />
      <input name="oe" value="UTF-8" type="hidden" />
      <input name="client" value="asu_frontend" type="hidden" />
      <input name="proxystylesheet" value="asu_frontend" type="hidden" />
    </SearchWrapper>
  );
};

Search.propTypes = {
  display: PropTypes.oneOf(["mobile", "desktop"]),
};

export { Search };
