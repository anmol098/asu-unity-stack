// @ts-check
import { autoUpdate, shift, useFloating } from "@floating-ui/react";
import { faChevronDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useRef } from "react";

import { trackGAEvent } from "../../../../../../../shared";
import { useAppContext } from "../../../../core/context/app-context";
import { useIsMobile } from "../../../../core/hooks/isMobile";
import { NavTreePropTypes } from "../../../../core/models/app-prop-types";
import { DropdownItem } from "../DropdownItem";
import { NavItemWrapper } from "./index.styles";

// TODO: why did we stop using this class and should we remove
const DROPDOWN_CONTAINER_CLASS = "dropdown-container";

export const DROPDOWNS_GA_EVENTS = {
  event: "collapse",
  type: "click",
};

/**
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */

const NavLinkIcon = ({ children }) => {
  return (
    <>
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={faHome} className="icon-nav-item" alt="" />
      <span className="mobile-only">{children}</span>
    </>
  );
};

NavLinkIcon.propTypes = {
  children: PropTypes.node,
};

/**
 * @typedef {import('../../../../core/models/types').NavTreeProps} NavTreeProps
 */

/**
 * @param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
 * @returns {JSX.Element}
 *
 */

const NavItem = ({ link, setItemOpened, itemOpened }) => {
  const clickRef = useRef(null);
  const opened = link.id === itemOpened;
  const { breakpoint, expandOnHover, title } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const { refs, floatingStyles } = useFloating({
    strategy: "fixed",
    // placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      shift({
        crossAxis: false,
        mainAxis: true,
      }),
    ],
  });

  useEffect(() => {
    const handleClickOutside = event => {
      // @ts-ignore
      if (opened && !clickRef?.current?.contains(event.target)) {
        setItemOpened();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [opened]);

  const renderNavLinks = useMemo(() => {
    if (link.type === "icon-home") {
      return <NavLinkIcon>{link.text}</NavLinkIcon>;
    }
    return (
      <span>
        {link.text}
        {(!!link.items?.length || link.renderContent) && (
          <FontAwesomeIcon
            // @ts-ignore
            icon={faChevronDown}
            className={`chevron-icon ${opened ? "open" : ""}`}
            // @ts-ignore
            alt=""
          />
        )}
      </span>
    );
  }, [link]);

  const dispatchGAEvent = () => {
    const isDropdown = !!link.items?.length;
    const action = opened ? "close" : "open";
    const { text } = link;
    trackGAEvent(
      // @ts-ignore
      isDropdown
        ? {
            ...DROPDOWNS_GA_EVENTS,
            action,
            text,
          }
        : {
            text: link.type === "icon-home" ? "home button" : text,
          }
    );
  };

  const handleClick = e => {
    if (link.items || link.renderContent) {
      e.preventDefault();
      if (!expandOnHover && !isMobile) {
        setItemOpened();
      } else if (isMobile) {
        setItemOpened();
      }
    }
    dispatchGAEvent();
    link.onClick?.(e);
  };

  const handleOnMouseEnterLeave = () => {
    if (expandOnHover && !isMobile) {
      setItemOpened();
      dispatchGAEvent();
    }
  };

  return (
    <NavItemWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      ref={clickRef}
      onMouseEnter={handleOnMouseEnterLeave}
      onMouseLeave={handleOnMouseEnterLeave}
    >
      {/* @ts-ignore */}
      <a
        ref={refs.setReference}
        onClick={handleClick}
        href={link.href}
        aria-expanded={() => "true"} // eslint-disable-line no-nested-ternary
        aria-owns={
          link.items || link.renderContent ? `dropdown-${link.id}` : null
        }
        className={`${link.class ? link.class : ""}${
          link.selected ? " nav-item-selected" : ""
        }${opened ? " open-link" : ""}`}
        tabIndex={0}
        data-testid="nav-item"
        title={
          link.type === "icon-home" && title ? `${title} home page` : link.text
        }
      >
        {renderNavLinks}
      </a>

      {link.renderContent && (
        <DropdownItem
          items={[]}
          renderContent={link.renderContent}
          isMega={link.isMega}
          // @ts-ignore
          buttons={link.buttons}
          // @ts-ignore
          dropdownName={link.text}
          classes={`header-dropdown-${link.id} ${opened ? "opened" : ""}`}
          listId={`dropdown-${link.id}`}
          ref={refs.setFloating}
          style={isMobile ? {} : floatingStyles}
        />
      )}

      {link.items && (
        <DropdownItem
          items={link.items}
          isMega={link.isMega}
          // @ts-ignore
          buttons={link.buttons}
          // @ts-ignore
          dropdownName={link.text}
          classes={`header-dropdown-${link.id} ${opened ? "opened" : ""}`}
          listId={`dropdown-${link.id}`}
          style={isMobile ? {} : floatingStyles}
          ref={refs.setFloating}
        />
      )}
    </NavItemWrapper>
  );
};

NavItem.propTypes = {
  link: NavTreePropTypes,
  setItemOpened: PropTypes.func,
  itemOpened: PropTypes.number,
};

export { NavItem };
