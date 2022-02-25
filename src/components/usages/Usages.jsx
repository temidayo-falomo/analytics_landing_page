import React from 'react'
import { usages } from '../../data';
import { StyledUsages, UsageCard, UsageImg, UsageText } from './Usages.styled'

const Usages = () => {
  return (
    <StyledUsages>
        {usages.map((usage)=>{
         const {id, textHead, text, img} = usage;
                  return <UsageCard key={id} layout={id % 2 === 0 && 'row-reverse'}>
                  <UsageText textPosition={id % 2 === 0 && 'flex-end'}>
                      <h3>{textHead}</h3>
                      <p>{text}</p>
                    </UsageText>
                  <UsageImg>
                      <img src={img} alt='' />
                  </UsageImg>
             </UsageCard>
          })}
    </StyledUsages>
  )
}

export default Usages