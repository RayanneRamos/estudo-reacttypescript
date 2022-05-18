import React from 'react';
import style from './Button.module.scss';

interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ text, onClick, type }: Props) => {
  return(
    <button 
      onClick={onClick}
      type={type}
      className={style.botao}
    >{text}</button>
  );
}

export default Button;
