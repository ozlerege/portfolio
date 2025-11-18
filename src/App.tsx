import React from 'react';
import Awards from './components/Awards';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>Some about text.</p>
        </section>
        <Awards />
        <section id="contact">
          <h2>Contact</h2>
          <p>Contact info.</p>
        </section>
      </main>
    </div>
  );
}

export default App;