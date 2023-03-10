import React, { useState } from 'react';
import AddCard from './AddCard';

const ManageCards = () => {
    const [open, setOpen] = useState(false);
    return <>
        <div className="carousel-head myac-head">
            <h2>Manage Payment Cards</h2>
        </div>

        <div className="pro-passChange-ctn">
            <div className="row justify-content-start mb-2">
                <div className="col-lg-6">
                    <div className="media p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="31.5" viewBox="0 0 40.5 31.5">
                            <path className="aaaa"
                                fill="#555"
                                d="M33.054,16.263s.534,2.616.654,3.164H31.359c.232-.626,1.125-3.059,1.125-3.059-.014.021.232-.64.373-1.048l.2.942ZM40.5,5.625v24.75a3.376,3.376,0,0,1-3.375,3.375H3.375A3.376,3.376,0,0,1,0,30.375V5.625A3.376,3.376,0,0,1,3.375,2.25h33.75A3.376,3.376,0,0,1,40.5,5.625ZM10.723,23.288l4.444-10.913H12.178L9.415,19.828l-.3-1.512L8.128,13.3a1.176,1.176,0,0,0-1.28-.921H2.3l-.049.218a11.158,11.158,0,0,1,2.967,1.2l2.517,9.492Zm6.638.014,1.772-10.927H16.305L14.541,23.3h2.82ZM27.2,19.73c.014-1.245-.745-2.194-2.37-2.974-.991-.5-1.6-.837-1.6-1.35.014-.464.513-.942,1.624-.942a4.845,4.845,0,0,1,2.1.415l.253.12.387-2.363a7.022,7.022,0,0,0-2.531-.464c-2.791,0-4.753,1.491-4.767,3.614-.021,1.568,1.406,2.44,2.475,2.967,1.09.534,1.462.886,1.462,1.357-.014.731-.886,1.069-1.695,1.069a5.632,5.632,0,0,1-2.651-.584l-.373-.176-.394,2.454a8.628,8.628,0,0,0,3.15.584C25.242,23.463,27.176,21.994,27.2,19.73ZM37.125,23.3,34.847,12.375H32.66a1.391,1.391,0,0,0-1.477.907l-4.2,10.02h2.967s.485-1.35.591-1.638h3.628c.084.387.338,1.638.338,1.638Z"
                                transform="translate(0 -2.25)" />
                        </svg>
                        <div className="media-body ml-3">
                            <h5 className="mt-0">XYZ Bank Credit Card</h5>
                            <p>1234 XXXX XXXX 7890</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-start">
                <div className="col-lg-6">
                    <div className="media p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="31.5" viewBox="0 0 40.5 31.5">
                            <path className="aaaa"
                                fill="#555"
                                d="M33.054,16.263s.534,2.616.654,3.164H31.359c.232-.626,1.125-3.059,1.125-3.059-.014.021.232-.64.373-1.048l.2.942ZM40.5,5.625v24.75a3.376,3.376,0,0,1-3.375,3.375H3.375A3.376,3.376,0,0,1,0,30.375V5.625A3.376,3.376,0,0,1,3.375,2.25h33.75A3.376,3.376,0,0,1,40.5,5.625ZM10.723,23.288l4.444-10.913H12.178L9.415,19.828l-.3-1.512L8.128,13.3a1.176,1.176,0,0,0-1.28-.921H2.3l-.049.218a11.158,11.158,0,0,1,2.967,1.2l2.517,9.492Zm6.638.014,1.772-10.927H16.305L14.541,23.3h2.82ZM27.2,19.73c.014-1.245-.745-2.194-2.37-2.974-.991-.5-1.6-.837-1.6-1.35.014-.464.513-.942,1.624-.942a4.845,4.845,0,0,1,2.1.415l.253.12.387-2.363a7.022,7.022,0,0,0-2.531-.464c-2.791,0-4.753,1.491-4.767,3.614-.021,1.568,1.406,2.44,2.475,2.967,1.09.534,1.462.886,1.462,1.357-.014.731-.886,1.069-1.695,1.069a5.632,5.632,0,0,1-2.651-.584l-.373-.176-.394,2.454a8.628,8.628,0,0,0,3.15.584C25.242,23.463,27.176,21.994,27.2,19.73ZM37.125,23.3,34.847,12.375H32.66a1.391,1.391,0,0,0-1.477.907l-4.2,10.02h2.967s.485-1.35.591-1.638h3.628c.084.387.338,1.638.338,1.638Z"
                                transform="translate(0 -2.25)" />
                        </svg>
                        <div className="media-body ml-3">
                            <h5 className="mt-0">XYZ Bank Credit Card</h5>
                            <p>1234 XXXX XXXX 7890</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 cd-main-nav__list js-signin-modal-trigger">
                    <a className="add-card-btn" data-signin="addcard" onClick={() => setOpen(true)}>Add a new card</a>
                </div>
            </div>
            {open && <AddCard {...{open, setOpen}}/>}
        </div>
    </>;
}

export default ManageCards;