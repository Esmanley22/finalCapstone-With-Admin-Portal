import React from 'react';
import { Link } from 'react-router-dom';
import AlertSign from './AlertSign';
import Button from 'react-bootstrap/Button';


export const Jumbotron = () => {

 return (
  <section className="jumbotron text-center mb-0 bg-secondary">
   <div className="container">
    <h1 className="jumbotron-heading text-white">About the Page</h1>
    <p className="lead text-light">
     Here at Candles, our goal is to help people reach their financial freedom. Learn from various resources we have 
     verified as accurate and informative. Signing up is <u>FREE</u> and comes with 
     unlimited access to our interactive stocks chart to put the knowledge <i>You</i> gained into
     practice without using money.
    </p>
    <p>
    <Link to="/Learn" className="btn btn-primary m-2">
      Start Learning Candlestick Patterns!
     </Link>
     {AlertSign()}
    </p>
   </div>
  </section>
 );
};