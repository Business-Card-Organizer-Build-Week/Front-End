import React from 'react';
import CardStyle2 from './CardStyle2';


const CardCollection = ({contacts}) => {
    return(
        <div>
           {[contacts].map(contact => (
               <CardStyle2 data={contact}/>))}
        </div>
    )
}

export default CardCollection