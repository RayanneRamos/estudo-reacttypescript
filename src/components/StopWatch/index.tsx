import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Timer from './Timer';
import style from './StopWatch.module.scss';
import { TarefasProps } from '../../types/tarefa';
import { tempoParaSegundos } from '../../common/utils/time';

interface Props {
  selecionado: TarefasProps | undefined;
  finalizarTarefa: () => void;
}

const StopWatch = ({ selecionado, finalizarTarefa }: Props) => {

  const [ tempo, setTempo ] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Timer tempo={tempo} />
      </div>
      <Button 
        onClick={() => regressiva(tempo)}
        text="Iniciar"
      />
    </div>
  );
}

export default StopWatch;