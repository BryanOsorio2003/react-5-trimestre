import './ButtonUI.css'
import { useState } from 'react';
export const ButtonUI = ({text,ClassButtons}) => {
  return <button className={ClassButtons}>{text}</button> ;
};