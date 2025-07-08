import React, { useState } from 'react';

const Practice1 = () => {
    const [count, setCount] =  useState(0)
    const [undo, setUndo] =  useState([])
    const [redo, setRedo] =  useState([])

    const handleIncrise = () => {
        setCount(count+1)
        setUndo([...undo,count])
        setRedo([])
    }
    const handleDecrise = () => {
        setCount(count-1)
        setUndo([...undo,count])    
        setRedo([])    
    }
    const handleUndo = ()=>{
        if(undo.length===0) return
        const newUndo = undo[undo.length-1]
        const newUndoArray = undo.slice(0,undo.length-1)
        setRedo([...redo,count])
        setCount(newUndo)
        setUndo(newUndoArray)
    }
    const handleRedo = () =>{
        if(redo.length===0) return
        const newRedo =redo[redo.length-1]
        const newRedoArray  = redo.slice(0,redo.length-1)
        setUndo([...undo, count])
        setCount(newRedo)
        setRedo(newRedoArray)

    }

    return (
        <div>
            <h1>Counter App: {count}</h1>
            <button onClick={handleIncrise}>Incrise</button>
            <button onClick={handleDecrise}>Decrise</button>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleRedo}>Redo</button>
        </div>
    );
};

export default Practice1;