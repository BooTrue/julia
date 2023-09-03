import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const photos = [
    '/src/assets/slider/1.png',
    '/src/assets/slider/2.png',
    '/src/assets/slider/3.png',
    '/src/assets/slider/4.png',
    '/src/assets/slider/5.png',
    '/src/assets/slider/6.png',
  ];


const Slider = () => {
    
    return (
        <>
        <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Мои работы</h2>
        </motion.div>
        <div style={{
            margin: 'auto',
            marginTop: '35px',
            maxWidth: '500px'
            
            }}>
        <Swiper
            pagination={{
            type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

        {photos.map(function(object, i){
                return <SwiperSlide><img srcSet={`${object}`} /></SwiperSlide>;
        })}

        </Swiper>
        </div>
        </>
        
    );
};

export default SectionWrapper(Slider, "works");