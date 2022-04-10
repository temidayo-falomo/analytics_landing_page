import styled from "styled-components";

export const StyledTopPart = styled.div`
  background-color: #172755;
  z-index: 1111;
  position: relative;

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
     width: 90%;
     max-width: 1000px;
     top: -90px;
     right: 0;
     z-index: 1;
 }

 .sm-sub {
     position: absolute;
     top: 0;
     width: 90%;
     max-width: 600px;
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

 @media(max-width: 800px) {
     .big-sub {
         display: none;
     }
 }
`
