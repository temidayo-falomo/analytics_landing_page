import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #172755;
  margin-bottom: 50px;
  z-index: 11111;

  @media (max-width: 1307px) {
    margin-bottom: 0;
  }
`;

export const StyledNavContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  @media (max-width: 1289px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
  }
`;

export const Mobile = styled.div`
  /* border: 3px cyan solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1289px) {
    width: 100%;
  }
`;

export const MenuItem = styled.div`
  font-size: 20px;
  color: white;
  display: none;
  z-index: 111111;

  @media (max-width: 1289px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  .sidebarr {
    display: flex;
    color: white;
    align-items: center;
    justify-content: flex-end;
    justify-content: space-between;
  }

  .links {
    display: flex;
    gap: 20px;

    p {
      cursor: pointer;
      z-index: 111;
    }
  }

  @media (max-width: 1289px) {
    .sidebarr {
      position: absolute;
      background-color: blueviolet;
      padding: 30px;
      width: 300px;
      height: 40vh;
      left: -100vw;
      top: 0;
      flex-direction: column;
      z-index: 1111;
      justify-content: flex-start;
      align-items: flex-start;
      transition: 0.5s ease;
    }

    .links {
      flex-direction: column;
    }

    .sidebarr.active {
      left: 0;
      transition: 0.5s ease;
    }
  }
`;

export const Btns = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: space-between;
  gap: 20px;

  button {
    padding: 10px 35px;
    background-color: #172755;
    border: 1px #8794ba solid;
    border-radius: 20px;
    color: #8794ba;
    cursor: pointer;
    z-index: 1111;
  }

  button:nth-child(2) {
    border: 1px #8794ba solid;
  }
  button:nth-child(2):hover {
    background-color: white;
  }

  button:nth-child(1) {
    border: none;
  }

  @media (max-width: 1289px) {
    flex-direction: column;
    display: none;
  }
`;
