import { useState } from "react";

import "./todoform.scss";

interface ToDoFormProps {
	onAdd(todo: string): void;
}

const ToDoForm: React.FC<ToDoFormProps> = (props) => {
	const [input, setInput] = useState<string>("")

	const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}
	const onAddTodoKey = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			props.onAdd(input)
			setInput("")
		}
	}

	return (
		<>
			<div className="todo-form mt2">
				<div className="row">
					<div className="input-field  s6">
						<input
							value={input}
							onChange={onChangeTodo}
							onKeyDown={onAddTodoKey}
							id="toDo"
							type="text"
							className="validate"
							placeholder="Введите название дела"
						/>
						<label className="active" htmlFor="toDo">
							ADD TODO
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default ToDoForm;
