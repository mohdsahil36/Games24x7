import React from 'react';
import Benefits from './Benefits/Benefits';
import './breakdown.scss';
import Workdown from './Benefits/Workdown/workdown';

export default function Breakdown(){
    return(
        <div className='benefits-sub-modal'>
            <Benefits/>
            <Workdown/>
        </div>
    )
}