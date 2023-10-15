import React from 'react';
import Header from './Header';

const LayOut = ({ children, state, setState, backGround }) => {
    return (
        <div className='font-secondary bg-slate-200 w-screen'>
            <Header state={state} setState={setState} backGround={backGround} />
            <div className='pt-[14vh] h-full flex'>
                {children}
            </div>

        </div>
    );
};

export default LayOut;