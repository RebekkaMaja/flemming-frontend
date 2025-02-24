import React from 'react';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="grid grid-rows-layout h-screen">
      {/* Top sektion med billede */}
      <header className="row-span-1">
        <img src={`${process.env.PUBLIC_URL}/hedgehogs.jpg`} className="w-full h-full object-cover" alt="Animals" />
        <h2 className="text-overlay">My Pet</h2> {/* Tekst overlay */}
      </header>

      {/* Hovedindhold */}
      <div className="grid grid-cols-layout flex-1">
        {/* Venstre side til navn */}
        <div className="bg-gray-300 p-4">
          {/* Teksten "My Pet" kan også være her, hvis du ønsker det som en separat sektion */}
        </div>

        {/* Højre side til indhold */}
        <div className="bg-gray-100 p-4">
          <h2 className="text-2xl font-bold">Indhold</h2>
          <p>Her kan du tilføje andet indhold.</p>
          {/* Tilføj mere indhold her */}
        </div>
      </div>
    </div>
  );
}

export default App;
