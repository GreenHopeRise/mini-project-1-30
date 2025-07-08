import React, { useEffect, useRef, useState } from 'react';

const OpenCloseBtn = () => {
    const [isOpen, setIsOpen] =  useState(false)
    const handleOpenAndClose = () =>{
        setIsOpen(!isOpen)
    }
    const boxref = useRef(null)

    useEffect(()=>{
        const handleClickOutSide = (event)=>{
            if(!boxref.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown',handleClickOutSide)

        return ()=>{
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    },[])

    return (
        <div>
            <h1 style={{marginTop: '200px'}}>The box</h1>
            <button onClick={handleOpenAndClose}>{isOpen? "Open" : "Close"}</button>
            {isOpen && (
                <div 
                ref={boxref}
                style={{
                    border:'2px solid blue',
                    padding: '20px',
                    width: '200px',
                    marginTop: '10px',
                    borderRadius: '5px'
                }}>
                    <p>Box is Open</p>
                </div>
            )}
        </div>
    );
};

export default OpenCloseBtn;