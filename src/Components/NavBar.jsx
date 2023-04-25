import '../Styles/NavBar.css';
import React from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
class Navbar extends React.Component{
    render(){
        return(
            <div className='nav-content'>
                <FaGlobeAmericas className='icon-nav-content' /> 
                <p className='para-nav-content'>my travel journal.</p>
            </div>
        )
    }
}


export default Navbar;
