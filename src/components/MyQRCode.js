import React from 'react';
import QRCode from 'qrcode.react';

const MyQRCode = () => {
    return(
        <div className='card'>
            <QRCode value="https://www.google.com/"/>
            
        </div>
    )
}

export default MyQRCode