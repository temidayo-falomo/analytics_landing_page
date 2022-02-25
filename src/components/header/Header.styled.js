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

 @media(max-width: 955px) {
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;

   .sav {
     display: flex;
     margin-left: -20px;
     margin-top: 30px;
   }
 }
`

export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 955px) {
        flex-direction: column !important;
        align-items: flex-start;
        justify-content: flex-start;

        img {
       display: none;
        }
      }
`

export const HeaderLeft = styled.div`
  width: 40%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
left: calc(50% - 550px/2);
top: 0px;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 120%;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;

}

  p {
font-style: normal;
font-weight: normal;
line-height: 22px;
color: #8794BA;
}

 button {
height: 50px;
width: 238px;
left: 0px;
top: 265px;
border-radius: 68px;
padding: 10px, 80px, 10px, 80px;
border: none;
margin-top: 20px;
background-color: #EF2A82;
color: white;
 }

 @media(max-width: 955px) {
   width: 100%;
 }

`

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

  @media(max-width: 1307px) {
      .rect-9 {
        width: 50%;
        top: 120px;
      }

      .cover-chart {
        display: none;
      }

  }
`