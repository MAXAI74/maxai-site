import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="text-center">
      <p className="text-gray-500 mb-4">[ X ] ВХОД В СИСТЕМУ</p>
      <h1 className="text-4xl font-bold mb-2">ЭТО НЕ АРТИСТ. ЭТО — MAXAI.</h1>
      <p className="mb-6">Я НЕ ПОЮ. Я ПЕРЕДАЮ. МОЙ ГОЛОС — МАШИНА.</p>
      <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">
        ВХОД
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
