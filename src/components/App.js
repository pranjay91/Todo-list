// import React from "react";
// import "./../styles/App.css";

// function App() {

// 	const [todos, setTodos] = React.useState([]);
// 	const [todo, setTodo] = React.useState("");
// 	const [todoEditing, setTodoEditing] = React.useState(null);
// 	const [editingText, setEditingText] = React.useState("");

// 	React.useEffect(() => {
// 		const json = localStorage.getItem("todos");
// 		const loadedTodos = JSON.parse(json);
// 		if (loadedTodos) {
// 		setTodos(loadedTodos);
// 		}
// 	}, []);

// 	React.useEffect(() => {
// 		const json = JSON.stringify(todos);
// 		localStorage.setItem("todos", json);
// 	}, [todos]);

// 	function handleSubmit(e) {
// 		e.preventDefault();

// 		const newTodo = {
// 		id: new Date().getTime(),
// 		text: todo,
// 		completed: false,
// 		};
// 		setTodos([...todos].concat(newTodo));
// 		setTodo("");
// 	}

// 	function deleteTodo(id) {
// 		let updatedTodos = [...todos].filter((todo) => todo.id !== id);
// 		setTodos(updatedTodos);
// 	}

// 	function toggleComplete(id) {
// 		let updatedTodos = [...todos].map((todo) => {
// 		if (todo.id === id) {
// 			todo.completed = !todo.completed;
// 		}
// 		return todo;
// 		});
// 		setTodos(updatedTodos);
// 	}

// 	function submitEdits(id) {
// 		const updatedTodos = [...todos].map((todo) => {
// 		if (todo.id === id) {
// 			todo.text = editingText;
// 		}
// 		return todo;
// 		});

// 		setTodos(updatedTodos);
// 		setTodoEditing(null);
// 	}

//   return (
//     <div id="todo-list">
//       <h1 id='head'>Todo List</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
//         <button type="submit">Add Todo</button>
//       </form>

//       {
// 	  todos.map((todo) => (
//         <div key={todo.id} className="todo">
//           <div className="todo-text">
//             <ul>
// 			<li id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
// 			</ul>
//             {
// 			todo.id === todoEditing ? (
//               <input type="text" onChange={(e) => setEditingText(e.target.value)}/>
//             ) : (
//               <div>{todo.text}</div>
//             )
// 			}
//           	  </div>
			  
//           <div className="todo-actions">
//             {
// 			todo.id === todoEditing ? (
// 				<div>
// 					<button onClick={() => submitEdits(todo.id)}>Save Task</button>
// 					<button className="gap" onClick={() => deleteTodo(todo.id)}>Delete Task</button> 
// 				</div>
              
//             ) : (
// 				<div>
// 					<button onClick={() => setTodoEditing(todo.id)}>Edit</button>
// 					<button className="gap" onClick={() => deleteTodo(todo.id)}>Delete</button>
// 				</div>
              
//             )
// 			}

			
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// export default App;





import React from "react";
import "./../styles/App.css";
import { useState } from "react";

function App() {
	const [todos,setTodos]=useState([]);
	const[todo,setTodo]=useState("");
	const[todoEditing,setTodoEditing]=useState(null);
	const[editingText,setEditingText]=useState("")
	function handleSubmit(e){
		e.preventDefault();
		const newTodo ={
			id:new Date().getTime(),
			text:todo,
			completed:false,
		}
		setTodos([...todos].concat(newTodo))
		setTodo("")
	}
	function deleteTodo(id){
		const updatedTodos=[...todos].filter((todo)=>todo.id!==id)
		setTodos(updatedTodos)
	}
	function editTodo(id){
		const updatedTodos =[...todos].map((todo)=>{
			if(todo.id===id){
				if(editingText.length){

				
				todo.text=editingText
				}else{
					alert("editingstring cannot be empty")
				}
			}
			return todo
		})
		setTodos(updatedTodos)
		setTodoEditing(null)
		setEditingText("")
	}
	return (
	<div id="main">
		<h1 >Todo List</h1>
		<div className="juhu">
		<form onSubmit={handleSubmit}>
		
	<input type="text" id="task" onChange={(e)=>setTodo(e.target.value)}value ={todo}/>
	<button type="submit" id="btn" >Add Task</button>
	    </form>
		{todos.map((todo)=><div key={todo.id} className="list">
		{todoEditing===todo.id ? (<div><input type="text" onChange={(e)=>setEditingText(e.target.value)} value={editingText}/>
		<button className="editTask" onClick={()=>{editTodo(todo.id)}}>Save Task</button>
		<button className="deleteTask" onClick={()=>deleteTodo(todo.id)}>Delete Task</button></div>):(<div>{todo.text}
			<button className="edit" onClick={()=>setTodoEditing(todo.id)}>Edit</button>
		<button className="delte"onClick={()=>deleteTodo(todo.id)}>Delete</button></div>)}
			

		</div>)}
		</div>
	</div>
	);
}

export default App;