import React,{ useState, useReducer } from 'react'

function reducer(state, action) {
    if (action.type === 'increment'){
        return {count: state.count + 1}
    }
    if (action.type === 'decrement') {
        return {count: state.count - 1}
    }
    
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const [count, setCount] = useState(0);
    function increment() {
        // setCount(prevCount => prevCount + 1)
        dispatch({type: 'increment'})
    }
    function decrement(){
        // setCount(prevCount => prevCount - 1)
        dispatch({type: 'decrement'})
    }
  return (
    <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </>
  )
}
export default UseReducer;