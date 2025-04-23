import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Dining from './components/Dining';
import Pool from './components/Pool';
import Explore from './components/Explore';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Pool />
        <Dining />
        <Explore />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;