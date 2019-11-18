import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

// interface ITodo2 extends ITodo {
//   tags: string[];
//   complete: boolean;
// }

const Index = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'complete'}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              &times;
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
export default Index;

const root = document.getElementById('app-root');

ReactDOM.render(<Index />, root);
