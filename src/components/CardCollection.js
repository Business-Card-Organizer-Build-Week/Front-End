import React from 'react';
import CardStyle2 from './CardStyle2';


// commenting this out so I can use fake data until internet is back up
// const CardCollection = ({contacts}) => {
//     return(
//         <div>
//            {[contacts].map(contact => (
//                <CardStyle2 data={contact} />))}
//         </div>
//     )
// }

const CardCollection = () => {
    return(
        <div className='collection'>
           {fakecontacts.map(contact => (
               <CardStyle2 data={contact} />))}
        </div>
    )
}

export default CardCollection