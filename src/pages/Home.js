import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Calculator', path: '/Calculator' },
    { label: 'TIC TAC TOE', path: '/tictactoe' },
    { label: 'Snake Ladder', path: '/snake_ladder' },
    { label: 'Analog Clock', path: '/analog_clock' },
    { label: 'Todo-list', path: '/test-todo' },
    { label: 'Todo-list-frontend', path: '/test-frontend' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-emerald-200 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-emerald-800 mb-6 text-center underline underline-offset-4 decoration-emerald-500">
        Akshat Choukse's Project Hub
      </h1>

      <p className="text-lg text-gray-700 mb-12 text-center max-w-xl font-medium">
        Explore all my cool projects below — click a button to dive in!
      </p>

      <div className="grid grid-cols-3 gap-8">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => navigate(btn.path)}
            className="h-36 w-36 rounded-xl bg-emerald-600 text-white font-semibold text-md shadow-md border-2 border-white flex items-center justify-center text-center"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
