import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Обо мне</h2>
      </motion.div>
      <div class="flex flex-row flex-wrap w-full justify-between">
      
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-[#665875] font-bold max-w-lg text-[17px]leading-[30px]'
        >
          Я обожаю животных и являюсь профессиональным грумером. 
          В моей работе я стараюсь создать комфортные и безопасные условия для домашних питомцев, чтобы они выглядели и чувствовали себя прекрасно. 
          Как профессиональный грумер, я обладаю опытом и навыками, необходимыми для выполнения различных видов груминга, включая стрижку, мытье, расчесывание и уход за шерстью, уход за когтями и ушами. 
          Я также обращаю особое внимание на индивидуальные потребности каждого питомца, учитывая их породу, размер, возраст и особенности. 
          Моя цель - не только сделать питомца красивым, но и обеспечить ему здоровье и благополучие. Если вы ищете профессионального грумера, который с любовью и заботой относится к вашему питомцу, обращайтесь ко мне. 
          Я с радостью помогу вашему питомцу выглядеть наилучшим образом!
        </motion.p>
        
        <motion.div
          variants={fadeIn("", "", 0.5, 2)}
          className="mt-10"
        >
          <img class="lg:max-w-lg lg:w-full sm:w-1/2 rounded-3xl shadow-2xl" src="src/assets/catsdogs.jpg" alt="Cats and dogs" />
        </motion.div>
        
        
        
        
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
