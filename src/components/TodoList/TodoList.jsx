import React from 'react'
import style from './todoList.module.scss';
import Todo from '../todo/Todo'; 
import DeleteButton from '../buttons/DeleteButton';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../feature/todoList.slice';

const TodoList = ({id, title,tasks}) => {
  const dispatch = useDispatch();
  return (
    
    <div className={style.container} onClick={()=>dispatch(toggleModal())}>
        <div className={style.header}>
          <div className={style.title}>{id + "/ " + title}</div>
          <DeleteButton id={id} typeToDelete="list"/>
        </div>
        <div className={style.todoList}>
            <ul>
              {tasks.map(task=> <Todo key={task.id} id={task.id} title={task.title} done={task.done}/>)}
            </ul>
        </div>
    </div>
    
  )
}

export default TodoList