import React from 'react';
import {HeroContainer,Categories} from './Style'

const category =  [
        "SPORTS","TECH","FINANCE","ENTERTAINMENT","POLITICS","EDUCATION","ETHICS","FUTURE","HISTORY","MEDICINE","LEADERS","JOBS","SKILLS"
]



function Hero(props) {
    return (<HeroContainer>
        {category.map((c,index)=>(
   <Categories key={index}>{c}</Categories>
        ))}
     
        
    </HeroContainer>
        
    );
}

export default Hero;