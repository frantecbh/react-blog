import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


// import { Container } from './styles';

import './styles.css'

function Layout() {
  return (
    <div className='container'>
        <Navbar />
        <div className='conteudo'>
         <Outlet />
        </div>
    </div>
  );
}

export default Layout;