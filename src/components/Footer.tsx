import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
 return (
  <footer className="text-muted py-5 bg-dark border-top border-2 border-black">
   <div className="container">
    <p className="float-right pl-2">
     <a href="https://robinhood.com/login" className='link-light' target="_blank">Try With Robinhood!</a>
    </p>
    
    <p className="float-right pl-2">
     <a href="https://robinhood.com/login" className='link-light' target="_blank"> </a>
    </p>
    <p className='text-white text-center'>
        Put knowledge to practice with real-time charts too!
    </p>
   </div>
  </footer>
 );
};