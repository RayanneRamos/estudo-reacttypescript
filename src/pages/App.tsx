import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import { TarefasProps } from '../types/tarefa';
import style from './App.module.scss';

function App() {

  const [ tarefas, setTarefas ] = useState<TarefasProps | []>([]);

  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List tarefas={tarefas} />
        <StopWatch />
      </div> 
    </>
  );
}

export default App;
