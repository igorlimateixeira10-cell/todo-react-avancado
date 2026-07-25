import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { filteredTodos, filter } = useTodo();

  if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-slate-400 py-4">
        {filter === 'completed'
          ? 'Nenhuma tarefa concluída.'
          : filter === 'active'
          ? 'Nenhuma tarefa ativa.'
          : 'Nenhuma tarefa cadastrada.'}
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}