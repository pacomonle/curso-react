import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const About = () => {
    return (
    <LanguageContext.Consumer>
    {value => {
        return (
            <>
                {(value.language==="en" ? <p>This is the about page</p>:
                <p>esta es la página de about</p>)}
                <button onClick={()=>value.onLanguageChange('en')}>en</button>
                <button onClick={()=>value.onLanguageChange('es')}>es</button>
            </>
        )
   
   
   }}

    
    </LanguageContext.Consumer>
    )
}

export default About;