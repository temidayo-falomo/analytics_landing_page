import React from 'react'
import { useState } from 'react';
import { Btns, Logo, MenuItem, Mobile, Sidebar, StyledNav, StyledNavContainer} from './Navbar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri'
import { links } from '../../data';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <StyledNav>
        <StyledNavContainer>
            <Mobile>
            <Logo>
                <img src='./Assets/Subtract.png' alt='' />
                <img src='./Assets/ANALYTICS.svg' alt='' />
            </Logo>
            <MenuItem onClick={handleClick}>
            {click ? <RiCloseLine /> : <GiHamburgerMenu />}
            </MenuItem>
            </Mobile>
            
            <Sidebar>
                <div className='links'>
            {links.map((item)=>{
                         const {id,text} = item;
                         return (
                            <p key={id}>{text}</p>
                         )
                     })}
                </div>

                     <Btns>
                       <button>Sign in</button>
                       <button>Sign Up</button>
                    </Btns>
            </Sidebar>
        </StyledNavContainer>
    </StyledNav>
  )
}

export default Navbar