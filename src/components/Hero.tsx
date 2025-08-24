"use client"

import { TypeAnimation } from 'react-type-animation';
import SocialIcons from '@/components/SocialIcons';

const Hero = () => {
  return (
    <section className="flex items-center justify-between w-full max-w-7xl py-16">
      {/* Colonne de texte */}
      <div className="flex-1 max-w-lg">

        <p className="text-[30px]">
          Transforming information into knowledge through <span className="text-[#7E6CA6]">Data Science.</span>
        </p>
        <p className="text-[22px] mt-6">
          Hi! I'm{' '}
          <TypeAnimation
            sequence={[
              'Patrice DAGBE', 
              1000,           
              '',             
              1000,           
            ]}
            wrapper="span"    
            cursor={true}     
            repeat={Infinity} 
          />
        </p>
        <p className="text-[18px] mt-2">Data Scientist & Software Developer</p>

        {/* Add some space before the icons */}
        <div className="mt-12">
          <SocialIcons />
        </div>

      </div>

      {/* Cercle + Image posée dessus (grande, débordant en haut) */}
      <div className="flex-shrink-0 relative">
        {/* Cercle dégradé */}
        <div className="rounded-full w-[600px] h-[600px] bg-gradient-to-b from-[#7E6CA6] to-[#1F1D42]"></div>

        {/* Image grande, posée sur le cercle, débordant vers le haut */}
        <div 
          className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 
                     w-[700px] h-[700px] sm:w-[340px] md:w-[380px] lg:w-[420px]
                     rounded-full overflow-hidden
                     transition-transform duration-300"
        >
          <img
            src="/images/patrice_dagbe.png"
            alt="Patrice Dagbe"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;