import React from 'react'

function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">ЭТО НЕ АРТИСТ. ЭТО — MAXAI.</h1>
      <p className="mb-6">Я НЕ ПОЮ. Я ПЕРЕДАЮ. МОЙ ГОЛОС — МАШИНА.</p>
      <button
        onClick={() => alert('Вход временно недоступен')}
        className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200"
      >
        ВХОД
      </button>
    </div>
  )
}

export default App
