import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #172755;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .giant-subtract {
    position: absolute;
    right: 0;
    width: 950px;
    height: 950px;
    bottom: 0px;
    overflow: hidden;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 450px;
    right: 0;
    left: 0;
    bottom: 500px;
    background-color: #172755;
    transform-origin: top right;
    transform: skewY(-8deg);
    z-index: -1;
    border-top: 12px #ef2a82 solid;
  }

  @media (max-width: 850px) {
    border-top: 12px #ef2a82 solid;
  }
`;

export const FooterContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TopFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 80%;
  margin-bottom: 30px;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 35px;
    line-height: 47px;
    color: white;
  }

  p {
    width: 80%;
    text-align: center;
    color: #8794ba;
    font-size: 15px;
    line-height: 150%;
  }

  @media (max-width: 850px) {
    margin-top: 50px;
  }
`;

export const PricingCards = styled.div`
  padding: 10px;
  width: 90%;
  display: flex;
  gap: 50px;
  justify-content: center;
  padding-bottom: 50px;
  border-bottom: 1px #2a407c solid;
  margin-bottom: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const PricingCard = styled.div`
  background: ${({ backColor }) => backColor || "#0F1F4B"};
  box-shadow: 0px 18px 50px -15px rgba(25, 42, 89, 0.2);
  border-radius: 20px;
  color: ${({ color }) => color || "white"};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  z-index: 1111;

  p {
    font-weight: 300;
    font-size: 12px;
  }

  h3,
  h2 {
    font-size: 32px;
  }

  .underline {
    border: 0.01rem solid #d3d9e9;
    width: 100%;
  }

  button {
    display: flex;
    border: none;
    color: white;
    font-size: 15px;
    flex-direction: row;
    align-items: center;
    padding: 10px 83px;

    background: #ef2a82;
    border-radius: 68px;
    border: ${({ border }) => border || "none"};

    background-color: ${({ buttonColor }) => buttonColor || "transparent"};

    &:hover {
      background-color: ${({ buttonColorHover }) =>
        buttonColorHover || "white"};

      color: ${({ backColor }) => backColor || "black"};
    }
  }
`;

export const FooterNav = styled.div`
  width: 100%;
  z-index: 1111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  align-items: flex-start;
  padding-bottom: 80px;

  section {
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
  }

  div,
  .links {
    display: flex;
    gap: 10px;
  }

  .icons {
    display: flex;
    align-items: center;
  }

  .icons img {
    cursor: pointer;
  }

  .links p {
    cursor: pointer;
  }

  @media (max-width: 880px) {
    section {
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }
  }
`;
