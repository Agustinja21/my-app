import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from "../assets/Matias.jpeg"
import Img2 from "../assets/Florencia.jpeg"
import Img3 from "../assets/EA.jpeg"

const Work = () => {
  return <section id='work' className='section'>
    <div className='conteiner mx-auto'>
    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>     <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*text */}

          <div className='flex-1 text-center'>
            <h2 className='h2  mb-16 leading-tight text-accent'>Nuestros Proyectos</h2>
            <p className='max-w mb-16 text-center'>Algunos de nuestros proyectos realizados con Wordpress</p>
            {/* <button className='btn btn-sm'>Ver Proyectos</button> */}
          </div>

        
          {/*Imagen */}
          <a href='https://nutricionistaflorenciapelaez.com.ar/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/*img */}
          <img className='group-hover:scale-125 transition-all duration-500' src={Img2}/>
          {/*Pretitulo */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Wordpress Page</span>
          </div>
          {/*titulo */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Nutricionista Florencia Pelaéz</span>
          </div>
          </div>
          </a>

        </div>


        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*imagen 2 */}
          <a href='https://inmobiliariamiramoreno.com.ar/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/*img */}
          <img className='group-hover:scale-125 transition-all duration-500' src={Img1}/>
          {/*Pretitulo */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Wordpress Page</span>
          </div>
          {/*titulo */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Inmobiliaria Mira Moreno</span>
          </div>
          </div>
          </a>


          <div>
          {/*Imagen 3 */}
          <a href='https://devwebea.com.ar/'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/*img */}
          <img className='group-hover:scale-125 transition-all duration-500' src={Img3}/>
          {/*Pretitulo */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Wordpress Page</span>
          </div>
          {/*titulo */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>EA Desarrollo Web</span>
            
          </div>
          </div>
          </a>
          </div>

        </div>
      </div>
    </div>
  </section>;
};

export default Work;

