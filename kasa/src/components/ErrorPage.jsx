// ErrorPage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
const ErrorPage = ({ message }) => (
  <div >
        <Header/>
    <div className='errorPage'>
    <h1 className='errorPage__title' >400</h1>
    <p className='errorPage__text'>{/* {message || ' */}Oups! La page que vous demandez n'existe pas.{/* } */}</p>
    <Link className='errorPage__linkMenu' to="/">Retourner sur la page d’accueil</Link>
  </div>
  <Footer isErrorPage={true} />
  </div>
);

export default ErrorPage;
