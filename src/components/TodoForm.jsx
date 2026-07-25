import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="minha nova tarefa..."
        className="flex-1 bg-slate-900/80 border border-slate-700/80 px-4 py-2.5 rounded-xl text-white placeholder-slate-400 outline-none focus:border-emerald-500 transition-colors"
      />
      <button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-900/20"
      >
        adicionar
      </button>
    </form>
  );
}