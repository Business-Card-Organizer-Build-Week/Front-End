import React from 'react';
import QRCode from 'qrcode.react';

const MyQRCode = () => {
    const contactid = localStorage.getItem("CONTACTID")
    return(
        <div>
            
            <QRCode value={contactid}/>
            
        </div>
    )
}

export default MyQRCode