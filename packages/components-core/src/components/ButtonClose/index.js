import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonClose = ({
  ariaLabel,
  block,
  children,
  color,
  disabled,
  element: Tag,
  icon,
  innerRef,
  onClick,
  size,
  ...attributes
}) => {
  const btnClasses = classNames(
    UdsStyles["btn"],
    UdsStyles["btn-circle"],
    UdsStyles[`btn-circle-alt-${color}`]
  );

  return (
    <button
      type={"button"}
      {...attributes}
      className={btnClasses}
      ref={innerRef}
      onClick={onClick}
      aria-label={"Close"}
    >
      <FontAwesomeIcon icon={faTimes} />
      <span className="sr-only">Close</span>
    </button>
  );
};

ButtonClose.propTypes = {
  ariaLabel: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(["white", "gray", "black"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["button", "a"]),
  icon: PropTypes.elementType,

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
};

ButtonClose.defaultProps = {
  color: "gray",
  element: "button",
  size: "default",
};
