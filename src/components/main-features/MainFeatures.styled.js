import styled from "styled-components";

export const StyledMainFeatures = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;
export const TopMainFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 70%;
  margin-bottom: 30px;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 35px;
    line-height: 47px;
    color: #172755;
  }

  p {
    width: 75%;
    line-height: 150%;
    text-align: center;
    color: #8794ba;
    font-size: 17px;
  }

  @media (max-width: 800px) {
    p {
      width: 100%;
    }
  }
`;

export const FlexMainFeatures = styled.div`
  display: flex;
  gap: 10px;
  width: 70%;

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;

  h4 {
    color: #172755;
    font-size: 17px;
  }

  img {
    width: 25px;
  }

  p {
    text-align: center;
    width: 95%;
    color: #8794ba;
    font-size: 16px;
    line-height: 150%;
  }
`;
