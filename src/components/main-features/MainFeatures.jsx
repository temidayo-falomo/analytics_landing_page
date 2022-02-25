import { features } from '../../data';
import React from 'react'
import { Feature, FlexMainFeatures, StyledMainFeatures, TopMainFeatures } from './MainFeatures.styled'

function MainFeatures() {
  return (
     <StyledMainFeatures>
       <TopMainFeatures>
         <h2>Main Features</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
       </TopMainFeatures>

       <FlexMainFeatures>
       {features.map((features)=>{
         const {id, textHead, text, img} = features;
                  return <Feature key={id}>
                  <img src={img} alt='' />
                  <h4>{textHead}</h4>
                  <p>{text}</p>
             </Feature>
          })}
       </FlexMainFeatures>
     </StyledMainFeatures>
  )
}

export default MainFeatures