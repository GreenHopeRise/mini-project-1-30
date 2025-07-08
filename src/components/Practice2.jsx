import React, { useEffect, useRef, useState } from 'react';

const Practice2 = () => {
    const [isOpen,setIsOpen] = useState(false)
    const boxRef = useRef(null)
    const btnHandle = () => {
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        const handleEventListner = (event)=>{
            if(!boxRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleEventListner)
        return()=>{
            document.removeEventListener('mousedown',handleEventListner)
        }
    },[])
    return (
        <div>
            <h1 style={{marginTop: '100px'}}>The Box</h1>
            <button onClick={btnHandle}>{isOpen? 'Close': 'Open'}</button>
            {
                isOpen && (
                    <div
                    ref={boxRef}
                    style={{
                        border:'2px solid green',
                        width:'200px'
                        , borderRadius:'10px'
                        ,background:'red'
                    }}>
                        <p >box is open</p>
                    </div>
                )
            }
        </div>
    );
};

export default Practice2;