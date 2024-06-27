import styled from "styled-components";

const Wrapper = styled.nav`
  white-space: nowrap;
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  > .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    height: auto;
    margin: inherit;
    font-size: inherit;
    color: inherit;
    flex-direction: row;
  }
  .nav-list {
    display: flex;
    margin: 0;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    > .content-container {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: auto;
      > *:last-child {
        margin-bottom: min(75px, 15vw);
      }
      ${({ showUniversalNavbar, navBarHeight }) =>
        showUniversalNavbar
          ? `
          min-height: calc(100vh - 277px);
          max-height: calc(100vh - 277px);
          min-height: calc(100dvh - 277px);
          max-height: calc(100dvh - 277px);
          `
          : `
          min-height: calc(100vh - ${navBarHeight}px);
          max-height: calc(100vh - ${navBarHeight}px);
          min-height: calc(100dvh - ${navBarHeight}px);
          max-height: calc(100dvh - ${navBarHeight}px);
          padding-bottom: 4rem;
          `}
    }
    .nav-list {
      flex-direction: column;
      width: 100%;
    }
    .buttons-container {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      width: 100%;
    }
  }
`;

export { Wrapper };
