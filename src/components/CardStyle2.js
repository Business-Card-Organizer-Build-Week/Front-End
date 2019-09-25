import React from 'react';
import { Icon } from 'semantic-ui-react';

const CardStyle2 = ({ data, user }) => {
  console.log(data)  
  return(
        
      <div className='card'>
        <div className='icon'>{user='me' ? <Icon
        floated='right'
        size='small'
        name='edit'
        /> : <Icon
        floated='right'
        size='small'
        name='trash alternate'
        />}</div>
        <div className='card-content'>
        
        
      
          <div className='header'>{data.fname} {data.lname}</div>
          <div className='meta'>{data.title} - {data.busname}</div>
          <div className='description'>
            <p>{data.userphone}</p>
            <p>{data.useremail}</p>
            <p>{data.useraddress}</p>
            <p>{data.usercity},{data.userState} {data.userzip}</p>

          </div>
        </div>
      </div>
    
    )
    
}

export default CardStyle2