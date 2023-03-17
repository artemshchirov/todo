import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";

const initialTodos = [
	{ id: 0, name: "Code todo", complete: false },
	{ id: 1, name: "Debug todo", complete: false },
	{ id: 2, name: "Commit todo", complete: false },
];

export interface Task {
	id: number;
	name: string;
	complete: boolean;
}

function App() {
	const [name, setName] = useState("");
	const [todos, setTodos] = useState<Task[]>(initialTodos);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(name);
		setName("");
	};

	const addTodo = (name: string) =>
		setTodos([
			...todos,
			{
				id: Date.now(),
				name,
				complete: false,
			},
		]);

	const handleDelete = (todo: Task) =>
		setTodos(todos.filter(t => t.id !== todo.id));

	const handleToggle = (todo: Task) =>
		setTodos(
			todos.map(t =>
				t.id === todo.id ? { ...todo, complete: !todo.complete } : t
			)
		);

	return (
		<div className="App">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</form>
			{todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					onToggle={handleToggle}
					onDelete={handleDelete}
				></Todo>
			))}
		</div>
	);
}

export default App;
