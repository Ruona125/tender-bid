import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/SYMBOL.png'
import CustomBtn from '../CustomBtn/CustomBtn'
import Twitter from '../../assets/twitter.png'
import Symbol from '../../assets/footerLogo.png'
import copyright from '../../assets/copyright.png'
import { toast } from 'react-toastify'

const Footer = () => {

    const [email, setEmail] = useState('')

    const showMessage = () => {
        if (!email) {
            return
        }
        else {
            toast.success('Congratulations, You will now start receiving all the notifications of this platform', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
    }



    return (
        <div className='footerContainer' id='footer' >
            <div className='footerBox'>
                <img className='footerLogo' src={logo} alt='logo' />
                <div className='footerBody'>
                    <div className='leftFooter' >
                        <p className='footerText' >Trust is like the air we breathe – when it’s present, nobody really notices; when it’s absent, everybody notices.</p>
                        <div className='inputBox' >
                            <input value={email} type='email' onChange={e => setEmail(e.target.value)} placeholder='Your Email' />
                            <CustomBtn onClick={showMessage} >Subscribe Now</CustomBtn>
                        </div>
                    </div>


                    <div className='Right' >

                        <div className='helpBox' >
                            <h4>Help</h4>
                            <div>
                                <p>
                                    <Link className='footerLink' to='/' >How does it work?</Link>
                                </p>
                                <p>
                                    <Link className='footerLink' to='/' >Where to ask questions?</Link>
                                </p>
                                <p>
                                    <Link className='footerLink' to='/' >How to pay?</Link>
                                </p>
                                <p>
                                    <Link className='footerLink' to='/' >What  is this needed for?</Link>
                                </p>
                            </div>
                        </div>
                        <div className='contactBox' >
                            <h4>Contacts</h4>
                            <div>
                                <p className='contactBoxText' >
                                    +91 9545247284
                                </p>
                                <p className='contactBoxText'>
                                    Flat no. 003, Mathura Building, Tonca , Miramar , Goa 403002
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerBottom' >
                    <div className='footerBottomLeft' >
                        <img src={copyright} alt='twitter' />
                        <img src={Symbol} alt='twitter' />
                        <span>2023-2024. All Rights Reserved</span>
                    </div>
                    <div className='footerBottomRight' >
                        <img src={Twitter} alt='twitter' />
                        <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.071 2.79004C28.071 2.19851 27.5915 1.71899 26.9999 1.71899H20.4657C17.4093 1.71899 14.4276 2.50503 12.1814 3.96454C9.93684 5.42302 8.50422 7.52038 8.50422 9.86636V13.0411H3.04102C2.44949 13.0411 1.96996 13.5206 1.96996 14.1122V19.7732C1.96996 20.3647 2.44949 20.8443 3.04102 20.8443H8.50422V31.0953C8.50422 31.6868 8.98374 32.1664 9.57527 32.1664H18.2876C18.8791 32.1664 19.3587 31.6868 19.3587 31.0953V20.8443H24.8219C25.265 20.8443 25.6624 20.5714 25.8215 20.1578L27.9996 14.4968C28.1263 14.1674 28.0826 13.7968 27.8829 13.5058C27.6831 13.2149 27.3528 13.0411 26.9999 13.0411H19.3587V9.89729C19.3738 9.87481 19.4159 9.82428 19.5091 9.76372C19.7138 9.63075 20.0561 9.52215 20.4657 9.52215H26.9999C27.5915 9.52215 28.071 9.04262 28.071 8.4511V2.79004Z" stroke="white" stroke-opacity="0.79" stroke-width="2.1421" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1135 8.44727C12.5517 8.44727 8.77197 12.2305 8.77197 16.9429C8.77197 21.6553 12.4866 25.4384 17.1135 25.4384C21.7404 25.4384 25.455 21.5889 25.455 16.9429C25.455 12.2968 21.6752 8.44727 17.1135 8.44727ZM17.1135 22.3853C14.1809 22.3853 11.7697 19.9296 11.7697 16.9429C11.7697 13.9561 14.1809 11.5004 17.1135 11.5004C20.046 11.5004 22.4573 13.9561 22.4573 16.9429C22.4573 19.9296 20.046 22.3853 17.1135 22.3853Z" fill="white" fill-opacity="0.79" />
                            <path d="M9.1591 16.9429C9.1591 12.4395 12.7702 8.83439 17.1135 8.83439C21.4548 8.83439 25.0679 12.5039 25.0679 16.9429C25.0679 21.3838 21.518 25.0513 17.1135 25.0513C12.707 25.0513 9.1591 21.4482 9.1591 16.9429ZM11.3826 16.9429C11.3826 20.1367 13.9605 22.7725 17.1135 22.7725C20.2665 22.7725 22.8444 20.1367 22.8444 16.9429C22.8444 13.749 20.2665 11.1132 17.1135 11.1132C13.9605 11.1132 11.3826 13.749 11.3826 16.9429Z" stroke="white" stroke-opacity="0.79" stroke-width="0.774248" />
                            <path d="M25.7811 10.1728C26.8249 10.1728 27.671 9.31105 27.671 8.24802C27.671 7.185 26.8249 6.32324 25.7811 6.32324C24.7374 6.32324 23.8912 7.185 23.8912 8.24802C23.8912 9.31105 24.7374 10.1728 25.7811 10.1728Z" fill="white" fill-opacity="0.79" />
                            <path d="M27.2839 8.24802C27.2839 9.10396 26.6044 9.78568 25.7811 9.78568C24.9578 9.78568 24.2784 9.10396 24.2784 8.24802C24.2784 7.39209 24.9578 6.71037 25.7811 6.71037C26.6044 6.71037 27.2839 7.39209 27.2839 8.24802Z" stroke="white" stroke-opacity="0.79" stroke-width="0.774248" />
                            <path d="M30.6685 3.27007C28.9742 1.47803 26.5629 0.548828 23.8259 0.548828H10.4013C4.73165 0.548828 0.951904 4.39839 0.951904 10.1727V23.779C0.951904 26.633 1.86426 29.0887 3.68896 30.8808C5.4485 32.6064 7.79455 33.4693 10.4664 33.4693H23.7607C26.5629 33.4693 28.909 32.54 30.6034 30.8808C32.3629 29.1551 33.2753 26.6993 33.2753 23.8453V10.1727C33.2753 7.38513 32.3629 4.99574 30.6685 3.27007ZM30.4079 23.8453C30.4079 25.9029 29.691 27.5622 28.518 28.6905C27.345 29.8188 25.7158 30.4161 23.7607 30.4161H10.4664C8.5114 30.4161 6.8822 29.8188 5.70917 28.6905C4.53615 27.4958 3.94963 25.8365 3.94963 23.779V10.1727C3.94963 8.18159 4.53615 6.52229 5.70917 5.3276C6.81703 4.19928 8.5114 3.60193 10.4664 3.60193H23.8911C25.8461 3.60193 27.4753 4.19928 28.6483 5.39397C29.7562 6.58866 30.4079 8.24796 30.4079 10.1727V23.8453Z" fill="white" fill-opacity="0.79" />
                            <path d="M30.3872 3.53604L30.3872 3.53608L30.3923 3.54129C32.0057 5.18452 32.8881 7.47155 32.8881 10.1727V23.8453C32.8881 26.6165 32.0037 28.965 30.3325 30.6042C28.719 32.1843 26.4742 33.0821 23.7607 33.0821H10.4664C7.88095 33.0821 5.63727 32.2492 3.96022 30.6046C2.22209 28.8975 1.33903 26.5479 1.33903 23.779V10.1727C1.33903 7.37144 2.25436 5.06802 3.82671 3.46663C5.39844 1.86586 7.65659 0.935952 10.4013 0.935952H23.8259C26.4745 0.935952 28.7775 1.83353 30.3872 3.53604ZM5.43294 28.9617L5.43283 28.9618L5.4408 28.9695C6.69905 30.1798 8.43112 30.8033 10.4664 30.8033H23.7607C25.796 30.8033 27.5281 30.1798 28.7864 28.9695C30.0436 27.7601 30.795 25.9959 30.795 23.8453V10.1727C30.795 8.1591 30.1121 6.4032 28.9322 5.13074L28.9323 5.13064L28.9246 5.12275C27.6641 3.83897 25.927 3.21481 23.8911 3.21481H10.4664C8.43818 3.21481 6.63259 3.83456 5.43294 5.05638C4.17329 6.33929 3.56251 8.10474 3.56251 10.1727V23.779C3.56251 25.9114 4.17217 27.6776 5.43294 28.9617Z" stroke="white" stroke-opacity="0.79" stroke-width="0.774248" />
                        </svg>
                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.87505 7.60645H0.0187988V27.3676H6.87505V7.60645Z" fill="white" fill-opacity="0.79" />
                            <path d="M23.157 7.60645C18.373 7.60645 17.5503 9.04336 17.1595 10.4295V7.60645H10.3032V27.3676H17.1595V16.0755C17.1595 14.2448 18.3645 13.2525 20.5876 13.2525C22.7576 13.2525 24.0157 14.2236 24.0157 16.0755V27.3676H30.872V17.487C30.872 11.841 29.9789 7.60645 23.157 7.60645Z" fill="white" fill-opacity="0.79" />
                            <path d="M3.44704 6.19488C5.34034 6.19488 6.87517 4.93097 6.87517 3.37185C6.87517 1.81274 5.34034 0.548828 3.44704 0.548828C1.55374 0.548828 0.0189209 1.81274 0.0189209 3.37185C0.0189209 4.93097 1.55374 6.19488 3.44704 6.19488Z" fill="white" fill-opacity="0.79" />
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer