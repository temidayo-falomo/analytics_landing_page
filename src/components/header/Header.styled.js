import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  color: white;

  .sav {
    display: none;
  }

  @media (max-width: 955px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .sav {
      display: flex;
      margin-left: -20px;
      margin-top: 30px;
    }
  }
`;

export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 955px) {
    flex-direction: column !important;
    align-items: flex-start;
    justify-content: flex-start;

    img {
      display: none;
    }
  }
`;

export const HeaderLeft = styled.div`
  width: 40%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 3rem;
    line-height: 120%;
    color: #ffffff;
  }

  p {
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    color: #8794ba;
  }

  button {
    border-radius: 68px;
    padding: 10px 40px;
    border: none;
    margin-top: 20px;
    background-color: #ef2a82;
    color: white;
    max-width: 200px;
  }

  @media (max-width: 955px) {
    width: 100%;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const HeaderRight = styled.div`
  .rect-9 {
    width: 850px;
    position: absolute;
    right: 0;
    z-index: 1111;
    margin-bottom: -200px;
    height: 600px;
    cursor: pointer;
  }

  .cover-chart {
    background-color: white;
    width: 320px;
    position: absolute;
    right: 490px;
    height: 200px;
    top: 300px;
    padding: 20px;
    box-shadow: 0px 19.2249px 53.4024px -16.0207px rgba(25, 42, 89, 0.2);
    border-radius: 32.0414px;
    z-index: 1111111;
  }

  @media (max-width: 1307px) {
    .rect-9 {
      width: 50%;
      top: 120px;
    }

    .cover-chart {
      display: none;
    }
  }
`;
