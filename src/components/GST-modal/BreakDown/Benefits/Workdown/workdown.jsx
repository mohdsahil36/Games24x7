import React from 'react';
import './Workdown.scss';

export default function Workdown() {
    return (
        <div className='gst-deposits'>
            <div>
                <h3 className='workdown-headline'>How GST on deposit works?</h3>
            </div>
            <div className='payout'>
                <p className='payout-headline'>You Pay</p>
                <p className='payout-amt'>₹1000</p>
                <p className='inclusive'>Inclusive of Govt. GST</p>
            </div>
            <div className='navigation'>
                <div className='distribution-boxes'>
                    <p className='wallet-input'>₹780</p>
                    <p className='input-desc'>goes to your wallet</p>
                </div>
                <div className='distribution-boxes'>
                    <p className='deposit-input'>₹220</p>
                    <p className='deposit-desc'>Govt. GST on your deposit</p>
                </div>
            </div>
            <div className='contribution'>
                <div className='return-success'>
                    <p className='rummyCircle-contribution'>₹220</p>
                    <div className='benefit'>
                        <p className='gst'>GST paid by <span className='rummy-circle'>RummyCircle</span></p>
                        <p className='gst'>on your behalf</p>
                    </div>
                </div>
                <div className='return'>
                    <p className='you-get'>You Get</p>
                    <p className='return-amt'>₹1000</p>
                    <p className='in-your-wallet'>in your wallet</p>
                </div>
            </div>
        </div>
    )
}   