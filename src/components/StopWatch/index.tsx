import React from 'react';
import Button from '../Button';
import Timer from './Timer';
import style from './StopWatch.module.scss';

const StopWatch = () => {
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Timer />
      </div>
      <Button 
        text="Iniciar"
      />
    </div>
  );
}

export default StopWatch;