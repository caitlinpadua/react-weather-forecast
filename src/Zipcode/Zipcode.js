import React from 'react';
import './Zipcode.css';



class ZipCode extends React.Component 
{
    render() {
        return (
            <div className = "wrapper">
                <div className = "container"> 
                    <form 
                        onSubmit = {this.props.getTemperature} 
                        className ="searchbar">
                            <input 
                            type = "text" 
                            maxLength="5" 
                            name="zip1" 
                            placeholder="Enter zip code"/>
                            
                            <button >SEARCH</button>
                    </form>           
                </div>
            
            </div>
    
        );
    }
    
};

export default ZipCode;