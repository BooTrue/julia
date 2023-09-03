import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [textColor, setTextColor] = useState('#7F6A97');
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#7F6A97]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#7F6A97]' />
        </div>

        <div>
          
          <div className={`${styles.heroHeadText}`}
            style={{
              color: textColor,
            }}
          >Привет, меня зовут

            <p><span style={{ color: '#FFB3BD' }}>
            <TypeAnimation
              sequence={[
                500,
                'Юлия',
                1000,
              ]}
              speed={10}
              repeat={Infinity}
            />
            </span></p>

        
          
          </div>
          <h1 className={`${styles.heroSubText} mt-2 text-[#665875]-100` }>
            Я сертифицированный специалист,<br className='sm:block hidden' />
            занимаюсь профессиональной <br className='sm:block hidden' />
            стрижкой собак и кошек
          </h1>
        </div>
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#7F6A97] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#7F6A97] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
