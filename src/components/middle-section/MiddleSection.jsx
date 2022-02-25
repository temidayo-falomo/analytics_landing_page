import React from 'react'
import MainFeatures from '../main-features/MainFeatures'
import Usages from '../usages/Usages'
import { StyledMiddleSection } from './MiddleSection.styled'

function MiddleSection() {
  return (
   <StyledMiddleSection>
       <MainFeatures />
       <Usages />
   </StyledMiddleSection>
  )
}

export default MiddleSection