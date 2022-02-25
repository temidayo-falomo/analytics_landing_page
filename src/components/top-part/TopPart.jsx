import React from 'react'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import { StyledTopPart } from './TopPart.styled'

function TopPart() {
  return (
      <StyledTopPart>
        <section>
            <div><Navbar /></div>
            <div><Header /></div>
        </section>
        <img src='./Assets/GiantSubtract.png' alt='' className='big-sub'/>
        <img src='./Assets/Smaller-Subtract.png' alt='' className='sm-sub'/>
      </StyledTopPart>

  )
}

export default TopPart