import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ServicesCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffdbe0",
        color: "#ffdbe0",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #ffdbe0" }}
      date={service.nameService}
      iconStyle={{ background: service.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={service.icon}
            alt={service.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#665875] text-[24px] font-bold'>{service.title}</h3>
        <p
          className='text-black text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {service.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {service.points.map((point, index) => (
          <li
            key={`service-point-${index}`}
            className='text-[#665875] text-[14px] pl-1 tracking-wider font-bold'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Виды услуг
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServicesCard
              key={`service-${index}`}
              service={service}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
