import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductBanner from '../components/Product/ProductBanner';
import BuySellNav from '../components/Product/BuySellNav';
import ProductsList from '../components/Product/ProductsList';
import { AppContext } from '../contexts/AppContext';
import ApiService from '../services/api.service';
import Spinner from "rct-tpt-spnr";
import { useAuthState, useAuthDispatch } from '../contexts/AuthContext/context';
import _ from 'lodash';
import useToast from '../commons/ToastHook';
import HomeAddressSettings from '../components/Profile/HomeAddressSettings';
import { useConfirmationModal } from '../commons/ConfirmationModal/ConfirmationModalHook';
import { Redirect, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "../components/Shared/header.css";

const Home = () => {
    const { setGunModel, setManufacturer } = useContext(AppContext);
    const spinner = useContext(Spinner);
    const userDetails = useAuthState();
    const { location } = useContext(AppContext);
    const [isDisplay, setIsDisplay] = useState(false);
    const [expireFFLStoreList, setExpireFFLStoreList] = useState([]);
    const dispatch = useAuthDispatch();
    const Toast = useToast();
    const history = useHistory();
    const [content, setContent] = useState(true);
    const [locationModel, setLocationModel] = useState(true);

    // populate gun model
    const getModel = async () => {
        try {
            ApiService.getModel().then(
                response => {
                    setGunModel(response.data);
                },
                err => {
                    console.error("error occur on getModel()", err)
                }
            ).finally(() => {
                spinner.hide();
            });
        } catch (err) {
            console.error("Error occur on getModel()", err)
        }
    }

    // populate gun manufacturer
    const getManufacturer = async () => {
        try {
            ApiService.getManufacturer().then(
                response => {
                    setManufacturer(response.data);
                },
                err => {
                    console.error("error occur on getManufacturer--", err);
                }
            ).finally(() => {
                spinner.hide();
            });
        } catch (err) {
            console.error("Error occur on getManufacturer--", err);
        }
    }

    // show confirmation modal when user click on navigation
    const [showConfirmModal, ConfirmationComponent] = useConfirmationModal({
        title: "Store license expired!",
        body: <>
            <h6 className='text-danger'>Your following store(s) are expired! Please renew by uploading the valid license in order to continue using our services.</h6>
            {expireFFLStoreList.map(item => <li>{item.name}</li>)}
        </>,
        onConfirm: () => {
            history.push('/store/mystores')
        },
        onCancel: () => {
            Toast.success({ message: "I'll do it later.", time: 3000 });
        }

    })


    useEffect(() => {
        if (userDetails?.user?.addressProvided === false) {
            setIsDisplay(true)
        }
    }, [userDetails]);

    // listening user details changes
    useEffect(() => {
        if (userDetails?.user?.expiredFflStores && !userDetails.isStoreExpireAlertShown) {
            dispatch({ type: 'STORE_EXP_ALERT' });
            setExpireFFLStoreList(userDetails?.user?.expiredFflStores);
            showConfirmModal()
        }
    }, [userDetails]);

    // init component
    useEffect(() => {
        getModel()
        getManufacturer();
        {
            setTimeout(() => {
                setLocationModel(false);
            }, 2000)
        }
    }, [])

    const Modal = ({ show, children }) => {
        const showHideClassName = show ? "modal d-block" : "modal d-none";

        return (
            <div className={showHideClassName}>
                <div className='cd-signin-modal__container location'>
                    <div className='row'>
                        <div className='col-lg-12 changeLocation-popup-box'>
                            <div className="js-signin-modal-block border-radius" >
                                {children}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {
                content ?

                    <div id="age-verify">
                        <div class="window">
                            <img src='https://toolgrazp.net/images/logo.svg' className='img-fluid' />
                            <hr />
                            <span class="title">Are you over 21?</span>
                            <span>Thank you for your interest in guntraderz.com <br />
                                Our site is for individuals at least 21 years of age.</span>
                            <button class="yes" onClick={() => setContent(false)}>Yes</button>

                            <button class="no" onClick={() => window.location.replace('https://www.google.com/')}>No</button>
                            <div class="underBox">
                                <span class="title">Sorry!</span>
                                <span>You need to be at least 21 to visit our website.</span>
                                {/* <button class="back" onclick="goBack()">Go Back</button> */}
                            </div>

                        </div>
                    </div>
                    :
                    locationModel ?

                        <Modal show={locationModel} >

                            <div class="changeLocation-head"><h2>Please allow location for better experience</h2></div>
                        </Modal> :
                        <Layout title="Home" description="This is the Home page" >
                            <div>
                                <ProductBanner />
                            </div>
                            <div>
                                <BuySellNav />
                            </div>
                            <div>
                                <ProductsList view="New Arrivals" />
                            </div>
                            <div>
                                <ProductsList view="Most Popular" />
                            </div>

                            <div>
                                <ProductsList view="Mostly Viewed" />
                            </div>

                            <div>
                                <ProductsList view="Recently Viewed" />
                            </div>


                            {
                                isDisplay
                                && <HomeAddressSettings
                                    {...{
                                        show: isDisplay,
                                        setShow: setIsDisplay
                                    }}
                                />
                            }
                            {ConfirmationComponent}
                        </Layout>
            }
        </>

    );
}

export default Home;