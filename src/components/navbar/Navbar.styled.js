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

  @media(max-width: 1307px) {
    margin-bottom: 0;
  }
`

export const StyledNavContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Mobile = styled.div`
  /* border: 3px cyan solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1289px) {
      width: 100%;
  }
`

export const MenuItem = styled.div`
  font-size: 25px;
  color: white;
  display: none;
  z-index: 111;

  @media(max-width: 1289px) {
      display: block;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  /* border: 3px orange solid; */
  color: white;
  width: 80%;
  align-items: center;

  .links {
      display: flex;
      gap: 20px;

      p {
        cursor: pointer;
        z-index: 111;
      }
  }

  @media(max-width: 1289px) {
      display: none;
  }
`

export const Btns = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 30%;

  button {
      padding: 10px 45px;
      background-color:  #172755;
      border: 1px #8794BA solid;
      border-radius: 20px;
      color: #8794BA;
      display: block;
      cursor: pointer;
      z-index: 1111;
  }

  button:nth-child(2) {
      border: 1px #8794BA solid;
  } button:nth-child(2):hover {
    background-color: white;
  }

  button:nth-child(1) {
      border: none;
  }
`
