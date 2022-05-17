import React, { useState } from "react";
import { TarefasProps } from "../../types/tarefa";
import Item from "./Item";
import style from './List.module.scss';


const List = ({ tarefas }: Array<TarefasProps>) => {

  return(
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, { tarefa: "React + Typescript", tempo: "05:00:00" }])
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            {... item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;