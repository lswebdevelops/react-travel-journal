import '../Styles/Content.css';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
class Content extends React.Component{
    render(){
        return(
           <div className='content-container'>
             <img  className='img-content'
              src={require(`../images/image-mountfuji.png`)} alt="" />

            <div className='div-location-text-content'>
                <div className='div-content'>
                     <FaMapMarkerAlt className='icon-maps'/>
                     <p className='para-location-content'>JAPAN</p>
                     <a className='maps-link-content'>View on Google Maps</a> 
                </div>

             <div className='div-text-content'>
                    <h1 className='h1-content'>Mount Fuji</h1>
                    <p className='para-date-content'>12 jan, 2021 ...</p>
                    <p className='para-description-content'> Mount Fuji is the tallest mountain in Japan and an active volcano. With its iconic symmetrical cone shape, it's a popular destination for hikers and sightseers alike. </p>
              </div>
            </div>           
                  
           </div>
          
           
        )
    }
}

export default Content;
