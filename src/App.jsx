import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
