import React from 'react';
import { useTodo } from '../context/TodoContext';

export const TodoItem = React.memo(function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group ${
      todo.completed 
        ? 'bg-slate-900/30 border-slate-800/80 opacity-75' 
        : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/70 shadow-sm'
    }`}>
      <label className="flex items-center gap-3.5 cursor-pointer flex-1 mr-3 select-none">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 accent-emerald-500 rounded cursor-pointer transition-transform duration-150 active:scale-95"
        />
        <span className={`text-sm sm:text-base break-all transition-colors duration-200 ${
          todo.completed ? 'line-through text-slate-500 italic' : 'text-slate-200 font-medium'
        }`}>
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => removeTodo(todo.id)}
        className="text-slate-400 hover:text-red-400 bg-slate-800/50 hover:bg-red-500/10 p-2 rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100 transition-all duration-200 active:scale-95"
        title="Excluir tarefa"
        aria-label="Excluir tarefa"
      >
        🗑️
      </button>
    </li>
  );
});

export default TodoItem;