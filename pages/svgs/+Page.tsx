import React from 'react';
import './style.css';
import DeleteButton from './delete-button';

export default function Page() {
    return (
        <div className='container'>
            <div className='sub'>
                <svg viewBox='50 50 50 50'>
                    <circle cx='50' cy='50' r='40' fill='darkorchid' />
                </svg>
                <svg viewBox='0 0 100 100'>
                    <circle cx='50' cy='50' r='40' fill='darkorchid' />
                </svg>
                {/* <button className='delete-btn'> */}
                {/*     Delete */}
                {/*     <TrashCan color='crimson' /> */}
                {/* </button> */}

                <div className='justify-self-center'>
                    <DeleteButton />
                </div>
            </div>
        </div>
    );
}
