import React from 'react';
import {Typography} from 'antd'
import b from '../../assets/b.png'
import {Container,NavLink,NavLinks,Logo, LogoContainer,SearchContainer,Search} from './Style'
import {BsSearch} from 'react-icons/bs'


function Navbar(props) {
    return (
        <Container className='nav-container'>
            <LogoContainer>
            <Logo src={b} alt="letter B"/>
            <Typography.Title level={1} style={{fontStyle:"oblique"}}>Blog World</Typography.Title>
            </LogoContainer>
            
<NavLink>
            <NavLinks>

                <Typography.Text style={{marginRight:"30px",fontSize:"20px"}}>Home</Typography.Text>
                <Typography.Text style={{marginRight:"30px",fontSize:"20px"}}>About</Typography.Text>
                <Typography.Text style={{marginRight:"30px",fontSize:"20px"}}>Contact</Typography.Text>
                <Typography.Text style={{marginRight:"30px",fontSize:"20px"}}>Categories</Typography.Text>
              
                

            </NavLinks>
           
            </NavLink>
            <SearchContainer>
                <BsSearch color='black' />
                <Search    />
            </SearchContainer>
      
        </Container>
        
    );
}

export default Navbar;