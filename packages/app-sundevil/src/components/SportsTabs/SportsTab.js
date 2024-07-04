import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { AspectRatioSquare } from "../AspectRatio/AspectRatioSquare";

const Root = styled.div`
  flex: 1;

  &.inactive {
    background-color: transparent;

    &:hover {
      opacity: 0.7;
      background-color: ${({ darkMode }) =>
        darkMode ? "rgba(250, 250, 250, 0.1)" : "rgba(25, 25, 25, 0.1)"};
    }

    color: ${({ darkMode }) => (darkMode ? "#fafafa" : "#191919")};
  }

  &.active {
    background-color: ${({ darkMode }) => (darkMode ? "#fff" : "#191919")};
    color: ${({ darkMode }) => (darkMode ? "#191919" : "#fff")};
  }

  outline: none !important;
  border: none !important;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  cursor: pointer;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "horizontal" ? "row-reverse" : "column"};
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 12px;
`;

const propsSchema = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  color: PropTypes.oneOf(["default", "muted"]),
  darkMode: PropTypes.bool,
};

/**
 * @typedef {{
 * children: React.ReactNode;
 * active?: boolean;
 * onClick: () => void;
 * orientation: "horizontal" | "vertical";
 * color?: "default" | "muted";
 * darkMode?: boolean;
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const SportsTab = React.forwardRef(
  (
    { children, active, onClick, orientation, color, darkMode = false },
    ref
  ) => {
    const className = active ? "active" : "inactive";
    return (
      <Root
        onClick={onClick}
        className={className}
        role="button"
        tabIndex={0}
        ref={ref}
        color={color}
        darkMode={darkMode}
        onKeyDown={e => {
          if (e.key === "Enter") {
            onClick();
          }
          if (e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <AspectRatioSquare>
          <Content orientation={orientation}>{children}</Content>
        </AspectRatioSquare>
      </Root>
    );
  }
);

SportsTab.propTypes = propsSchema;
