import { Task } from "./App";

interface TodoProps {
	todo: Task;
	onToggle: (todo: Task) => void;
	onDelete: (todo: Task) => void;
}

export const Todo = ({ todo, onToggle, onDelete }: TodoProps): JSX.Element => {
	return (
		<div
			style={{
				display: "flex",
				width: "300px",
				marginTop: "20px",
				justifyContent: "space-between",
			}}
		>
			<p style={{ color: todo.complete ? "#AAA" : "#fff" }}>{todo.name}</p>
			<div>
				<button style={{ marginRight: "10px" }} onClick={() => onToggle(todo)}>
					Toggle
				</button>
				<button onClick={() => onDelete(todo)}>Delete</button>
			</div>
		</div>
	);
};
