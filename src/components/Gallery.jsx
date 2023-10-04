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
    {
        title: "Корги кардиган",
        src: "/src/assets/slider/1.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/2.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/3.jpg",
    },
    {
        title: "Йоркширский терьер",
        src: "/src/assets/slider/4.jpg",
    },
    {
        title: "Кот",
        src: "/src/assets/slider/5.jpg",
    },
    {
        title: "Йоркширский терьер",
        src: "/src/assets/slider/6.jpg",
    },
    {
        title: "Кот",
        src: "/src/assets/slider/7.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/8.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/9.jpg",
    },
    {
        title: "Кот",
        src: "/src/assets/slider/10.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/11.jpg",
    },
    {
        title: "Йоркширский терьер",
        src: "/src/assets/slider/12.jpg",
    },
    {
        title: "Ши-тцу",
        src: "/src/assets/slider/13.jpg",
    },
    {
        title: "Йоркширский терьер",
        src: "/src/assets/slider/14.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/15.jpg",
    },
    {
        title: "Шпиц",
        src: "/src/assets/slider/16.jpg",
    },
    {
        title: "Австралийская овчарка",
        src: "/src/assets/slider/17.jpg",
    },
    {
        title: "Пудель",
        src: "/src/assets/slider/18.jpg",
    },
    {
        title: "Колли",
        src: "/src/assets/slider/19.jpg",
    },
    {
        title: "Йоркширский терьер",
        src: "/src/assets/slider/20.jpg",
    },
    {
        title: "Самоед",
        src: "/src/assets/slider/21.jpg",
    },
    {
        title: "Ши-тцу",
        src: "/src/assets/slider/22.jpg",
    },
    {
        title: "Сиба-ину",
        src: "/src/assets/slider/23.jpg",
    },
    {
        title: "Бернский зенненхунд",
        src: "/src/assets/slider/24.jpg",
    },

];

const Slider = () => {
    
    return (
        <>
        <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} text-center mb-20`}>Мои работы</h2>
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
            return <SwiperSlide><img class="photo-image" srcSet={`${object.src}`} alt={`${object.title}`} /></SwiperSlide>;
        })}

        </Swiper>
        </div>
        </>
        
    );
};

export default SectionWrapper(Slider, "works");