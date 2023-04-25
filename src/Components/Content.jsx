import '../Styles/Content.css';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";


function Content(props){
   
    const {title, location, image, googleMapsUrl, startDate, endDate, description, imageUrl} = props;
        return(
           <div className='content-container'>
             <a className='link-img-content' href={imageUrl} target='__blank'>
             <img  className='img-content'
              src={require(`../images/image-${image}.png`)} alt="" />

             </a>
            <div className='div-location-text-content'>
                <div className='div-content'>
                     <FaMapMarkerAlt className='icon-maps'/>
                     <p className='para-location-content'>{location}</p>
                     <a className='maps-link-content' href={googleMapsUrl} target='__blank'>View on Google Maps</a> 
                </div>

             <div className='div-text-content'>
                    <h1 className='h1-content'>{title}</h1>
                    <p className='para-date-content'>{startDate} - {endDate}</p>
                    <p className='para-description-content'>{description}</p>
              </div>
            </div>           
                  
           </div>
          
           
        )
    }


export default Content;
