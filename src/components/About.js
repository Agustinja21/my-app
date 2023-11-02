import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
    <br/>    <br/>    <br/>    <br/>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*IMAGEN */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
         {/*text */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>Acerca de nosotros.</h2>
          <h3 className='h3 mb-4'>Somos Freelancer Front end react y wordpress con 1 año de experiencia laboral.</h3>
          <p className='mb-6'>Ofrecemos una amplia gama de servicios diseñados para llevar la presencia en línea de su negocio al siguiente nivel. Nuestra misión es ayudar a empresas de todos los tamaños a establecer una presencia sólida en internet, atraer a su audiencia objetivo y lograr un crecimiento sostenible en el mundo digital.</p>
          {/*Stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={5} duration={3}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Trabajos <br/>
              realizados</div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={3}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Landing <br/>
              Page</div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={2} duration={3}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Ecommerce <br/>
              Page</div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <a href='https://es.fiverr.com/eadesarrolloweb?up_rollout=true'><button className='btn btn-lg'>Contáctame</button></a>
            {/* <a href='#' className='text-gradient btn-link'>Mi Portafolio</a> */}
          </div>
        </motion.div>
      </div>
    </div>
    
  </section>;
};

export default About;
