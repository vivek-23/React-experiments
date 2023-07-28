import React,{useRef} from "react";

export function UseRefDefault(){
    const refCount = useRef(0);
    const handleAlert = () => {
        refCount.current++;
        alert('You clicked me ' + refCount.current + ' times!');
    };

    return (
        <div>
            <button type="button" onClick={handleAlert}>Click me for a prompt</button>
        </div>
    );
}