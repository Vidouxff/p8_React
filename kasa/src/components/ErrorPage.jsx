import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function ErrorPage({ setIsErrorPageVisible, setIsCardDetailsVisible, message = "Oups! La page que vous demandez n'existe pas.", errorCode = "400" }) {
  useEffect(() => {
    setIsErrorPageVisible(true);
    return () => {
      setIsCardDetailsVisible(false);
    };
  }, [setIsErrorPageVisible, setIsCardDetailsVisible]);

  return (
    <div>
      <div className='errorPage'>
        <h1 className='errorPage__title'>{errorCode}</h1>
        <p className='errorPage__text'>{message}</p>
        <Link className='errorPage__linkMenu' to="/">Retourner sur la page d’accueil</Link>
      </div>
      {/*   <Footer isErrorPage={true} /> */}
    </div>
  );
}

export default ErrorPage;
