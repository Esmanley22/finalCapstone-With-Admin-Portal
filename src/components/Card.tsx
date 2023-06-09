import React from 'react';
import Button  from 'react-bootstrap/Button';


export const Card = () => {
 return (
  <div className="col-md-4">
   <div className="card mb-4 box-shadow">
    <img
     className="card-img-top"
     src="http://picsum.photos/200/200"
     alt="Card"
    />
    <div className="card-body">
     <p className="card-text">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
     </p>
     <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
       <Button
        type="button"
        className="btn btn-sm btn-outline-secondary"
        
       >
        View
       </Button>
       <Button
        type="button"
        className="btn btn-sm btn-outline-secondary"
        href=""
       >
        Edit
       </Button>
      </div>
      <small className="text-muted">9 mins</small>
     </div>
    </div>
   </div>
  </div>
 );
};