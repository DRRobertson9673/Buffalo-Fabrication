// Card.js

import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h2>{card.title}</h2>
      <p>{card.content}</p>
    </div>
  );
};

export default Card;
