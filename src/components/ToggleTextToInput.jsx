import React, { useState } from 'react';

const ToggleTextToInput = () => {
    const [name, setName] =  useState('Khalid')
    const [isEditing, setIsEditing] = useState(false)
    const handleClick = ()=>{
        setIsEditing(!isEditing)
    }
    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleBlure = ()=>{
        setIsEditing(!isEditing)
    }
    const handleKeyDown = (e)=>{
        if(e.key ==='Enter'){
            setIsEditing(false)
        }
    }
    return (
        <div>
            <div>
                {
                    isEditing? (
                        <input 
                        type="text" 
                        value={name} 
                        onChange={handleChange}
                        onBlur={handleBlure}
                        autoFocus
                        onKeyDown={handleKeyDown}
                        />
                    ):(
                        <p onClick={handleClick}>name : {name}</p>
                    )
                }
            </div>
        </div>
    );
};

export default ToggleTextToInput;