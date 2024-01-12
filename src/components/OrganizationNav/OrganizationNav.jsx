import './OrganizationNav.css';
import logo from '../../assets/SYMBOL.png';
import bell from '../../assets/Doorbell.png';
import vector from '../../assets/Vector.png';
import user from '../../assets/Male User.png';
import arrow from '../../assets/Expand Arrow.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CompanyNav() {
    const [showMenu, setShowMenu] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
        setIsExpanded(!setIsExpanded);
    }

    return (
        <nav className='nav'>
            <div className='nav__container'>
                <Link to='/organization/home'>
                    <img
                        src={logo}
                        alt='logo'
                        className='nav__logo'
                    /></Link>

                <ul className='nav__items'>
                    <Link to='/organization/notification' >
                        <li>
                            notifications
                            <img
                                src={bell}
                                alt='notification'
                            />
                        </li>
                    </Link>
                    <li>
                        wallet
                        <img
                            src={vector}
                            alt='vector'
                        />
                    </li>
                    <li>
                        grp-cp09
                        <img
                            src={user}
                            alt='user'
                        />
                        <img
                            src={arrow}
                            alt='arrow'
                        />
                    </li>
                    <Link to='/organization/history' >

                        <li>history</li>
                    </Link>
                </ul>

                <button
                    className='toggle__btn'
                    onClick={handleShowMenu}>
                    {isExpanded ? 'close' : 'open'}
                </button>
            </div>

            {/* mobile nav */}

            {showMenu && (
                <>
                    <ul className='mobile__nav'>
                        <li>
                            notifications
                            <img
                                src={bell}
                                alt='notification'
                            />
                        </li>
                        <li>
                            wallet
                            <img
                                src={vector}
                                alt='vector'
                            />
                        </li>
                        <li>
                            grp-cp09
                            <img
                                src={user}
                                alt='user'
                            />
                            <img
                                src={arrow}
                                alt='arrow'
                            />
                        </li>
                        <li>history</li>
                    </ul>

                    <div className='overlay'></div>
                </>
            )}
        </nav>
    );
}

export default CompanyNav;
