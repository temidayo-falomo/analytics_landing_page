import styled from "styled-components";

export const StyledUsages = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  align-items: center;
  margin-bottom: 320px;

  @media(max-width: 850px) {
      margin-bottom: 20px;
  }
`

export const UsageCard = styled.div`
  display: flex;
  flex-direction: ${({layout}) => 
      layout || 'row'
  };
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  width: 90%;

  @media(max-width: 1100px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
      width: 100%;
  }
`

export const UsageText = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: ${({textPosition}) => 
      textPosition || 'flex-start'
  };

  h3 {
      font-size: 30px;
      width: 70%;
      margin-bottom: 20px;
      color: #172755;
  }

  p {
      color: #8794BA;
      line-height: 25px;
      font-size: 17px;
      width: 70%;
  }

  @media(max-width: 1100px) {

    width: 100%;

      p {
          width: 100%;
      }

      h3 {
          width: 100%;
      }
  }
`

export const UsageImg = styled.div`
  box-shadow: 0px 18px 50px -15px rgba(25, 42, 89, 0.2);
  border-radius: 20px;
  padding: 30px;
  background-color: white;
  cursor: pointer;
`
