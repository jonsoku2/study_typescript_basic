import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions/todos';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): Function;
  deleteTodo(): Function;
}

function App({ todos, fetchTodos, deleteTodo }: AppProps) {
  useEffect((): void => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);
  const renderList = (): any => {
    return todos.map((todo: any) => {
      return (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? 'done' : ''}</p>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
}

const mapStateToProps = ({ todos }: StoreState) => {
  return {
    todos
  };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
