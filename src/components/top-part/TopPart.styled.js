import styled from "styled-components";

export const StyledTopPart = styled.div`
  background-color: #172755;
  z-index: 1111;

  @media(max-width: 1307px) {
    margin-bottom: 800px;
 }
 
 section {
     position: relative;
     padding: 40px;
     height: 220px;
 }

 .big-sub {
     position: absolute;
     top: -100px;
     right: -30px;
 }

 .sm-sub {
     position: absolute;
     top: -40px;
 }

 section:after {
     content: "";
     position: absolute;
     width: 100%;
     height: 600px;
     top: -50px;
     right: 0;
     left: 0;
     bottom: 0;
     background-color: #172755;
     transform-origin: top right;
     transform: skewY(-8deg);
     z-index: -1;
     border-bottom: 12px #EF2A82 solid;
 }

 @media(max-width: 1307px) {
    section:after {
        height: 900px;
    }
 }
`
