import React from 'react';
import Header from './Header';

const LayOut = ({ children, state, setState, backGround }) => {
    return (
        <div className='font-secondary bg-slate-200 '>
            <Header state={state} setState={setState} backGround={backGround} />
            <div className='pt-[170px]'>
                {children}
            </div>

        </div>
    );
};

export default LayOut;