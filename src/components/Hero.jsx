import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { shaq } from '../assets';

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col w-full h-screen mx-auto bg-black mt-40 justify-center items-center">

        <div className = "flex bg-black justify-center items-center ">  
        <p className="text-6xl bg-gradient-to-l from-black to-gray-300 bg-clip-text text-transparent">
  Hello world
</p><div className="relative inline-block">
  <img
    src={shaq}
    alt="pineapple"
    className="h-96 w-96 filter brightness-80"
  />
  <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
</div>


<p className="text-6xl bg-gradient-to-r from-black to-gray-300 bg-clip-text text-transparent">
  Hello world
</p>
        </div>
        
     


      </section>
    </>
  );
};

export default Hero;
