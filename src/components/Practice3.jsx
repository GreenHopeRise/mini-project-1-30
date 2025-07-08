import React, { useState } from 'react';

const Practice3 = () => {
    const [name, setName] =  useState('Khalid')
    const [isEditing, setIsEditing] = useState(false)
    const handleClick = ()=>{
        setIsEditing(true)
    }
    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleKey = (e)=>{
        if(e.key==='Enter'){
            setIsEditing(false)
        }
    }
    const handleBlure = ()=>{
        setIsEditing(!isEditing)
    }

    return (
        <div>
            <h1 style={{marginTop:'100px'}}>Text to Input</h1>
            {
                isEditing? (
                    <input value={name} 
                    autoFocus
                    onChange={handleChange}
                    onKeyDown={handleKey}
                    onBlur={handleBlure}
                    
                    />
                ):(
                    <p onClick={handleClick}>{name}</p>
                )
            }
        </div>
    );
};

export default Practice3;