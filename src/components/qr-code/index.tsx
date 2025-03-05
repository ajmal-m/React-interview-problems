import { useState } from 'react';
import './index.css';
import QRCode from "react-qr-code";
const QrCode = () => {

    const [value, setValue] = useState("")
    return(
        <div>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "400px", width: "400px" }}
                value={value}
            />
        </div>
    )
}

export default QrCode;