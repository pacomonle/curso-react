import React from 'react';

const LanguageContext = React.createContext('en');

export class LanguageStore extends React.Component{
    constructor(props){
        super(props);
        this.state={
            language: 'en'
        }
    }


    onLanguageChange= language => {
        this.setState({
            language: language
        })
    }

    render(){
        return (
            <LanguageContext.Provider value={
                {language:this.state.language, onLanguageChange: this.onLanguageChange}
            }>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }



}



export default LanguageContext;