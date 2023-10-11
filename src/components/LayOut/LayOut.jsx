import React from 'react';
import Header from './Header';

const LayOut = ({children, state, setState,backGround}) => {
    return (
        <div>
            <Header state={state} setState={setState} backGround={backGround}/>
            {children}

        </div>
    );
};

export default LayOut;