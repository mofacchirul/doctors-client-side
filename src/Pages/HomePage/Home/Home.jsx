import React from 'react';
import Banner from '../Banner/Banner';
import ClinicIntro from '../ClinicIntro/ClinicIntro ';
import Technologies from '../Technologies/Technologies';
import HeroSection from '../HeoSection/HeroSection';
import Appointment from '../Appointment/Appointment';
import Reviwe from '../Reviwe/Reviwe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClinicIntro></ClinicIntro>
            <Technologies></Technologies>
            <HeroSection></HeroSection>
            <Appointment></Appointment>
            <Reviwe></Reviwe>
        </div>
    );
};

export default Home;