import React from 'react';
import './card.css';

const card = (props) => (
  <div className="card">
    <div>
      <h3 className="card-title text-center flow-text title">{props.title}</h3>
    </div>
    <div className="">
      { props.children }
    </div>
  </div>
);

export default card;