import React from 'react';
import Banner from '../Banner/Banner';
import ClinicIntro from '../ClinicIntro/ClinicIntro ';
import Technologies from '../Technologies/Technologies';
import HeroSection from '../HeoSection/HeroSection';
import Appointment from '../Appointment/Appointment';
import Reviwe from '../Reviwe/Reviwe';
import BestDoctor from '../BestDoctor/BestDoctor';
import Contact from '../../Contak/Contack';
import BlogPage from '../../Blog/Blog';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
              <Helmet>
                
                <title>Doctor | Home</title>
            
            </Helmet>
            <Banner></Banner>
            <ClinicIntro></ClinicIntro>
            <Technologies></Technologies>
            <HeroSection></HeroSection>
            <Appointment></Appointment>
            <BestDoctor></BestDoctor>
            <BlogPage></BlogPage>
            <Reviwe></Reviwe>
            <Contact></Contact>
        </div>
    );
};

export default Home;