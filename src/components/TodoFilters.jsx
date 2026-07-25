import React from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoFilters() {
  const { filter, setFilter, stats } = useTodo();

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex justify-between text-sm text-slate-400 px-1 font-medium">
        <span>Total: {stats.total}</span>
        <span>Ativas: {stats.active}</span>
        <span>Concluídas: {stats.completed}</span>
      </div>

      <div className="flex gap-2 justify-center">
        {['all', 'active', 'completed'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
              filter === type
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/50'
            }`}
          >
            {type === 'all' ? 'Todas' : type === 'active' ? 'Ativas' : 'Concluídas'}
          </button>
        ))}
      </div>
    </div>
  );
}