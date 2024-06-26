// @ts-check
import React, { useEffect, useRef } from "react";

import trackReactComponent from "../../../shared/services/componentDatalayer";
import { HeaderMain } from "./components/HeaderMain";
import { AppContextProvider } from "./core/context/app-context";
import { HeaderPropTypes } from "./core/models/app-prop-types";
import { tryAddActivePage } from "./core/utils/helpers/active-page";
import { Header, HeaderDiv } from "./header.styles";

/**
 * @typedef {import("./core/models/types").HeaderProps} HeaderProps
 */

/**
 *
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

const ASUHeader = ({
  isPartner,
  navTree: rawNavTree,
  title,
  baseUrl,
  parentOrg,
  parentOrgUrl,
  partnerLogo,
  logo,
  sponsorLogo,
  loggedIn,
  userName,
  loginLink,
  onLoginClick,
  logoutLink,
  onLogoutClick,
  buttons,
  breakpoint,
  animateTitle,
  expandOnHover,
  mobileNavTree: rawMobileNavTree,
  searchUrl,
  site,
  renderDiv = "false",
  universalNavbar,
  mobile,
}) => {
  const navTree = tryAddActivePage(rawNavTree);
  const mobileNavTree = tryAddActivePage(rawMobileNavTree);

  const headerRef = useRef(null);

  const handleWindowScroll = () => {
    const curPos = window.scrollY;
    // @ts-ignore
    if (curPos > headerRef.current.getBoundingClientRect().top) {
      // @ts-ignore
      headerRef.current.classList.add("scrolled");
    } else {
      // @ts-ignore
      headerRef.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-header",
        component: "Component Header",
        type: "NA",
        configuration: {
          site,
          isPartner,
          searchUrl,
          navTree,
          parentOrg,
          buttons,
          mobileNavTree,
        },
      });
    }
  }, []);

  useEffect(() => {
    window?.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const renderHeader = () => {
    // Determine the wrapper based on renderDiv value
    const Wrapper = renderDiv === "true" ? HeaderDiv : Header;

    return (
      <Wrapper
        id="asuHeader"
        ref={headerRef}
        // @ts-ignore
        breakpoint={breakpoint}
      >
        <HeaderMain />
      </Wrapper>
    );
  };

  return (
    <AppContextProvider
      initialValue={{
        isPartner,
        navTree,
        title,
        baseUrl,
        parentOrg,
        parentOrgUrl,
        partnerLogo,
        logo,
        sponsorLogo,
        loggedIn,
        userName,
        loginLink,
        // @ts-ignore
        onLoginClick,
        logoutLink,
        // @ts-ignore
        onLogoutClick,
        // @ts-ignore
        buttons,
        breakpoint,
        animateTitle,
        expandOnHover,
        mobileNavTree,
        hasNavigation: !!navTree?.length || !!mobileNavTree?.length,
        searchUrl,
        site,
        // @ts-ignore
        universalNavbar,
        mobile,
      }}
    >
      {renderHeader()}
    </AppContextProvider>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

ASUHeader.defaultProps = {
  isPartner: false,
  baseUrl: "/",
  breakpoint: "Xl",
  expandOnHover: false,
};

export { ASUHeader };
