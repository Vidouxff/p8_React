// ErrorPage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Si vous utilisez react-router

const ErrorPage = ({ message }) => (
  <div>
    <h1>Oops, Something Went Wrong!</h1>
    <p>{message || 'An unexpected error has occurred.'}</p>
    <Link to="/">Return to Home</Link>
  </div>
);

export default ErrorPage;
