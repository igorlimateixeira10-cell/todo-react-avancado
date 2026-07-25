import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      {/* Fundo Tecnológico 3D */}
      <main 
        className="min-h-screen text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 60%, #020617 100%)',
        }}
      >
        {/* Camada de grade com efeito 3D */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM0 8h16v16H0V8zM0 0h24v24H0V0zM24 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM16 8h16v16H16V8zM16 0h24v24H16V0zM40 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM32 8h16v16H32V8zM32 0h24v24H32V0zM56 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM48 8h16v16H48V8zM48 0h24v24H48V0z' fill='%3C-color%3E' fill-opacity='1'/%3E%3C/svg%3E")`.replace('%3C-color%3E', encodeURIComponent('#4ade80')),
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />

        {/* Card Principal */}
        <div className="w-full max-w-lg bg-slate-950/70 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-slate-800 relative z-10 transition-all duration-500 hover:border-emerald-900/50">
          
          <div className="mb-8 text-center relative">
            <h1 className="text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-emerald-400 via-emerald-300 to-green-600 bg-clip-text text-transparent pb-1 drop-shadow-lg">
              Fluxo de Tarefas Avançado
            </h1>
            <p className="text-sm text-slate-400 mt-2 font-mono tracking-wide">Gerencie suas atividades com alta performance</p>
          </div>
          
          <TodoForm />
          <TodoFilters />
          <TodoList />

        </div>
      </main>
    </TodoProvider>
  );
}