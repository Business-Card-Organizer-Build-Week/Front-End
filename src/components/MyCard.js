import React from 'react';
import CardStyle2 from './CardStyle2';

const MyCard = ({ data }) => {
    
    return(
        <div className='my-card'>
            <CardStyle2 data={data} user='me' />
        </div>
    )
}

export default MyCard;
