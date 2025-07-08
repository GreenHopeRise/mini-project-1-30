import React, { useEffect, useRef, useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const modalRef = useRef(null)
  useEffect(()=>{
    const handleClickOutSide = (event)=>{
        if(!modalRef.current.contains(event.target)){
            closeModal()
        }
    }
    const handleEscape = (event) => {
        if(event.key=== 'Escape'){
            closeModal()
        }
    }
    if(isOpen){
        document.addEventListener('mousedown',handleClickOutSide)
        document.addEventListener('keydown',handleEscape)
    }
    return ()=>{
        document.removeEventListener('mousedown',handleClickOutSide)
        document.removeEventListener('keydown',handleEscape)
    }
    
  },[isOpen])
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
            <div style={{
              backgroundColor: '#fff',
              color:'gray',
              padding: '30px',
              borderRadius: '8px',
              minWidth: '300px',
              position: 'relative',
              
            }}
            ref={modalRef}
            >
                <h2>Custom Modal</h2>
                <p>This is a modal box.</p>
                <button onClick={closeModal}>Close</button>

            </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
