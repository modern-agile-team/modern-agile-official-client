import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import MainBanner from 'components/Home/MainBanner';
import MainValues from 'components/Home/MainValues';
import MainEmployment from 'components/Home/MainEmployment';
import MainActivity from 'components/Home/MainActivity';
import MainApplication from 'components/Home/MainApplication';
import MainFAQ from 'components/Home/MainFAQ';
import Divider from 'components/Divider';
import MainYoutube from './MainYoutube';
import MainDigitization from './MainDigitization';

const HomeComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <Layout>
      <MainBanner />
      <MainValues />
      <MainDigitization />
      <MainEmployment />
      <Divider />
      <MainActivity />
      <Divider />
      <MainYoutube />
      <Divider />
      <MainApplication />
      <Divider />
      <MainFAQ />
    </Layout>
  );
};

export default HomeComponent;
