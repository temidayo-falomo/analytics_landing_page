import React from 'react'
import BarChart from '../BarChart'
import { HeaderContainer, HeaderLeft, HeaderRight, StyledHeader } from './Header.styled'

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
         <HeaderLeft>
             <h1>Monitor your business on a real-time dashboard</h1>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sint? Tenetur dolorum distinctio aperiam consequatur 
             voluptates doloribus iste odit eaque hic beatae. Molestias veniam, saepe illo harum itaque ex odit.
             </p>
             <button>Try for free</button>
         </HeaderLeft>

         <HeaderRight>
           <img src='./Assets/Rectangle 9.svg' alt='' className='rect-9'/>
           <div>
             <img src='./Assets/chart.svg' alt='' className='cover-chart' />
           </div>
         </HeaderRight>

         <img src='./Assets/Rectangle 9.png' alt='' className='sav'/>

         </HeaderContainer>
       </StyledHeader>
  )
}

export default Header