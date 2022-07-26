
import './toDolist.scss'
import { IToDo } from '../../interface'

interface ToDoListProps {
    // toDoList: string[],
    // toDoList: any[],

    //Вопрос не обязательный параметр ?
    toDoList: IToDo[],
    onRemove(id: number): void,
    onChek(todoId: number): void
}

const ToDoList: React.FC<ToDoListProps> = ({ toDoList, onRemove, onChek }) => {

    const toDoItem = toDoList.map(({ complited, id, title }) =>
        <li
            key={id}
            className="collection-item">
            <label>
                <input
                    onChange={() => onChek(id)}
                    checked={complited}
                    type="checkbox" />
                <span className={complited ? 'complited' : ''} >{title}</span>
            </label>
            <i
                onClick={() => onRemove(id)}
                className="material-icons"
            > delete_forever </i>
        </li>
    )
    
    if(toDoItem.length === 0)
    return (
        <h5 className='center' >Список дел пуст!</h5>
    )

    return (
            <ul className="collection">
                {toDoItem}
            </ul>
    )
}

export default ToDoList