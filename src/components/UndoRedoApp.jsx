import React, { useState } from 'react';

const UndoRedoApp = () => {
    const [count, setCount]= useState(0)
    const [history,setHistory]= useState([])
    const [future, setFuture] = useState([])



    const handleIncrement = ()=>{
        setHistory([...history,count])
        setCount(count+1)
        setFuture([])
    }


    const handleDecrement = ()=>{
        setHistory([...history,count])
        setCount(count-1)
        setFuture([])
    }


    const handleUndo = ()=>{
        if (history.length===0) return
        const previous = history[history.length-1]
        const newhistory = history.slice(0, history.length-1)
        setFuture([...future,count])
        setCount(previous)
        setHistory(newhistory)
    }

    const handleRedo =()=>{
        if(future.length===0) return
        const next = future[future.length-1]
        const newFuture = future.slice(0,future.length-1)
        setHistory([...history,count])
        setCount(next)
        setFuture(newFuture)


    }



    return (
        <div>
            <h1>Count current value: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleUndo} disabled={history.length===0}>Undo</button>
            <button onClick={handleRedo} disabled={history.length===0}>Redo</button>
        </div>
    );
};

export default UndoRedoApp;