import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 20px;
  min-width: 330px;

  & h1,
  & h2 {
    margin: 0;
    padding: 0;
  }
  & p {
    white-space: normal;
    width: fit-content;
    font-size: 14px;
  }
  & section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 250px;
    margin-bottom: 8px;
    & div {
      display: flex;
      align-items: center;
      gap: 8px;
      & a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  & a {
    width: 30px;
    height: 30px;
  }
`;
