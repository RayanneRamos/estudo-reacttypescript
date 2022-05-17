import React from 'react';
import style from './Button.module.scss';

type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return(
    <button className={style.botao}>{text}</button>
  );
}

export default Button;
