import React from 'react';


export const ButtonAboutUS = ({text, OnClick}) => {
  return (
  <div>
      <button onClick={OnClick}>{text}</button>
  </div>
)
};
