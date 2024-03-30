import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import Clients from '../../components/Clients/Clients';
import Dummy from '../../components/Dummy/Dummy';
import Footer from '../../components/Footer/Footer';
import MainNav from '../../components/MainNav/MainNav';
import LoginMode from '../../components/LoginMode/LoginMode';
import SignUpMode from '../../components/SignUpMode/SignUpMode';
import SubscribePopUp from '../../components/SubscribePopUp/SubscribePopUp';
import './Welcome.css'
import ProceedTable from '../../components/tables/proceedTable/ProceedTable';

const Welcome = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	return (
		<div >
			<MainNav
				setShowLoginModal={setShowLoginModal}
				setShowSignUpModal={setShowSignUpModal}
			/>
			{showLoginModal && <LoginMode setShowLoginModal={setShowLoginModal} />}
			{showSignUpModal && (
				<SignUpMode setShowSignUpModal={setShowSignUpModal} />
			)}
			{/*<SubscribePopUp />*/}
			<HeroSection
				setShowLoginModal={setShowLoginModal} />
			<WhyUs />
			<Clients />
			<Dummy />
			<Footer />
			{/*<ProceedTable />*/}
		</div>
	);
};

export default Welcome;
