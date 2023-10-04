import React from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
    return (
      <>
        <div className='wrap h-[100px] pb-10 lg:hidden w-full flex justify-between items-center max-w-7xl mx-auto'>
                <a href="https://t.me/julia_fartygina" target="_blank"><button class="button">Связаться</button></a>
        </div>
      </>
    );
  };

export default SectionWrapper(Contact, "contact");
