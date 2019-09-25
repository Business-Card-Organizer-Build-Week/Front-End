import React from 'react';
import { Icon } from 'semantic-ui-react';

const CardStyle2 = ({ data, user }) => {
  console.log(data)  
  return(
        
      <div className='card'>
        <div className='edit-icon'>{user='me' ? <Icon
        size='small'
        name='edit'
        /> : <Icon
        size='small'
        name='trash alternate'
        />}</div>
        <div className='card-content'>
        
        
      
          <div className='header'>{data.fname} {data.lname}</div>
          <div className='meta'>{data.title} - {data.busname}</div>
    <hr className='divider'/>
          <div className='description'>
            <p><Icon name='mobile' /> {data.userphone}</p>
            <p><Icon name='keyboard' /> {data.useremail}</p>
            <p><Icon name='envelope' />{data.useraddress} {data.usercity},{data.userState} {data.userzip}</p>

          </div>
        </div>
      </div>
    
    )
    
}

export default CardStyle2