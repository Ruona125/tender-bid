import React from 'react'
import Ellipse1 from '../../assets/Ellipse 1.png'
import Ellipse3 from '../../assets/Ellipse 3.png'
import Ellipse4 from '../../assets/Ellipse 4.png'

const TopCompanies = () => {
    const starArray = [0, 1, 2, 3, 4]
    return (
        <div className='topCompanyContainer' >
            <div className='topCompanyCard' >
                <img className='topCompanyCardImage' src={Ellipse1} alt='ellipse1' />
                <p className='topCompanyCardName' >Channel</p>
                <p className='topCompanyCardDesc' >Making World a Better Place</p>
                <div className='starContainer' >
                    {
                        starArray.map((star) => {
                            return (
                                <svg key={star} width="28" height="26" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill="white" stroke="#FFFCFC" />
                                </svg>

                            )
                        })
                    }
                </div>

            </div>
            <div className='topCompanyCard' >
                <img className='topCompanyCardImage' src={Ellipse4} alt='ellipse1' />
                <p className='topCompanyCardName' >L&T</p>
                <p className='topCompanyCardDesc' >Promise for the Future</p>
                <div className='starContainer' >
                    {
                        starArray.map((star) => {
                            return (
                                <svg key={star} width="28" height="26" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill="white" stroke="#FFFCFC" />
                                </svg>

                            )
                        })
                    }
                </div>

            </div>
            <div className='topCompanyCard' >
                <img className='topCompanyCardImage' src={Ellipse3} alt='ellipse1' />
                <p className='topCompanyCardName' >The Pentagon</p>
                <p className='topCompanyCardDesc' >Trust & Loyalty</p>
                <div className='starContainer' >
                    {
                        starArray.map((star) => {
                            return (
                                <svg key={star} width="28" height="26" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill="white" stroke="#FFFCFC" />
                                </svg>

                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default TopCompanies