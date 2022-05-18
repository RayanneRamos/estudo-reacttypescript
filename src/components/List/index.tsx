import React from "react";
import { TarefasProps } from "../../types/tarefa";
import Item from "./Item";
import style from './List.module.scss';

interface Props {
  tarefas: TarefasProps[],
  selecionaTarefa: (tarefaSelecionada: TarefasProps) => void; 
}

const List = ({ tarefas, selecionaTarefa }: Props) => {

  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {... item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;