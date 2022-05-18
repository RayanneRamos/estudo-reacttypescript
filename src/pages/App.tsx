import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import { TarefasProps } from '../types/tarefa';
import style from './App.module.scss';

function App() {

  const [ tarefas, setTarefas ] = useState<TarefasProps[]>([]);
  const [ selecionado, setSelecionado ] = useState<TarefasProps>();

  function selecionaTarefa(tarefaSelecionada: TarefasProps) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true,
          }
        } 
        return tarefa; 
      }));
    }
  }

  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
        <StopWatch selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
      </div> 
    </>
  );
}

export default App;
