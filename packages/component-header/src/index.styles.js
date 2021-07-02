import styled from "styled-components";

const breakpoints = { Lg: "992px", Xl: "1260px" };

const Header = styled.header`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({ breakpoint }) => breakpoints[breakpoint]}) {
    &.scrolled {
      .universal-nav-desktop {
        height: 0;
        overflow: hidden;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name,
      a.title-subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .title {
        margin-top: 1.5rem;
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      max-width: 100%;
    }
  }
`;

export { Header };
