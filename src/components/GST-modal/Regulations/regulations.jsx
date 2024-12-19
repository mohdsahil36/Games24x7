import React from 'react';
import './regulations.scss';

export default function RegulationsModal() {
    return (
        <>
            <div className='govt-regulations'>
                <div className='info'>
                    <p className='icon'>I</p>
                    <p className='regulations-info'>Starting 1st October 2023, 28% GST is being charged by Government on your deposits.</p>
                </div>
                <div className='platform-guarentee'>
                    <p className='icon'>I</p>
                    <p className='guarentee'>100% Govt. GST paid by RummyCircle</p>
                </div>
            </div>
        </>
    )
}