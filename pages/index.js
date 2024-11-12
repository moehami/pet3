// import components
import Head from 'next/head';
// testa2
import Pets from '../components/Pets';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Adoption from '../components/Adoption';
import PetName from '../components/PetName';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Pets />
      <Services />
      <Adoption />  
    <PetName />
  <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
