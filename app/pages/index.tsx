import type { NextPage } from 'next';
import Loading from 'components/Loading';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MainBanner = dynamic(() => import('components/Home/MainBanner'), {
  ssr: false,
  loading: () => <Loading />,
});

const MainValues = dynamic(() => import('components/Home/MainValues'), {
  ssr: false,
});

const MainEmployment = dynamic(() => import('components/Home/MainEmployment'), {
  ssr: false,
});

const MainActivity = dynamic(() => import('components/Home/MainActivity'), {
  ssr: false,
});

const MainApplication = dynamic(
  () => import('components/Home/MainApplication'),
  {
    ssr: false,
  }
);

const MainFAQ = dynamic(() => import('components/Home/MainFAQ'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modern Agile</title>
        <meta name="description" content="Modern Agile Official WebPage" />
      </Head>
      <MainBanner />
      <MainValues />
      <MainEmployment />
      <MainActivity />
      <MainApplication />
      <MainFAQ />
    </>
  );
};
export default Home;
