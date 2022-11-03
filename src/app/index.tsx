import Card from '../components/Card'
import { Container, Conteudo, CardTodo } from './styles'
import { ChangeEvent, useEffect, useState } from 'react';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

export default function intex() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('@LP:todos');

    if (storedTodos) {
      return JSON.parse(storedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@LP:todos', JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    todoInput != '' && setTodos((previousTodos) =>
      [...previousTodos, { id: Math.random(), title: todoInput, completed: false }]
    );

    setTodoInput('');
  }

  function completeTodo(id: number) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => todo.id !== id ? todo : { ...todo, completed: !todo.completed })
    );
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function deleteTodo(id: number) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Container>
        <Conteudo>
          <input placeholder='Digite sua tarefa...' value={todoInput} onChange={handleInputChange} />
          <button onClick={addTodo}>Adicionar</button>
        </Conteudo>

        {
          todos.map((todo) => (
            <Card key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
          ))
        }

      </Container>
    </>
  )
}
