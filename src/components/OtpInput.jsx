import React, { useRef, useState } from 'react';

const OtpInput = () => {
    const [otp, setOtp] = useState(['','','',''])
    const otpRef = useRef([])

    const handleChange = (e, index)=>{
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp]
        newOtp[index]= value
        setOtp(newOtp)

        if(index< otp.length-1){
            otpRef.current[index+1].focus()
        }
    }
    const handleKeyDown = (e, index) => {
  if (e.key === "Backspace" && otp[index] === "" && index > 0) {
    otpRef.current[index - 1].focus();
  }
};

    return (
        <div style={{ display: "flex", gap: "10px", marginTop: "100px" }}>
            <h1>Otp Input</h1>
            {
                otp.map((digit, index)=>(
                    <input onKeyDown={(e)=> handleKeyDown(e,index)} type="text" value={digit} onChange={(e)=>handleChange(e,index)} 
                    style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "24px",
                    textAlign: "center",
                  }} maxLength={1}
                  ref={(e)=>otpRef.current[index]= e}
                    />
                ))
            }
            
        </div>
    );
};

export default OtpInput;