import React from 'react';

import descarga from '../assets/descarga.png';


const Header = () => {
  return <header className='py-8'>
    <div className='="container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* LOGO */}
        <a href="">
          <img className='h-20 ml-20' src={descarga} alt=""/>
        </a>
        {/* BUTTOM */}
        {/* <button className='btn btn-sm'>work whit me</button> */}
      </div>
    </div>
  </header>;
};

export default Header;
