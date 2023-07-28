import React, {Fragment, useState} from 'react';

export function Profile(props){
    const [cnt, setCounter] = useState(0);

    function addToCounter() {
      setCounter(cnt + 1);
    }

    function subtractFromCounter(){
      setCounter(cnt - 1);
    }
  
    return (
      <>
        <p>Counter Value : {cnt}</p>
        <button type='button' onClick={addToCounter}>+</button>&nbsp;&nbsp;&nbsp;
        <button type='button' onClick={subtractFromCounter}>-</button>
      </>
    );
}