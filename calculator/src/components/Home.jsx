import React from 'react';
import Nav from './Nav';
import Buttons from './Buttons';
import '../css/Home.css';

function Home() {
  return(
    <section className="home">
      <header>
        A simple CalculatorT
        <Nav />
      </header>
      <div className="buttons">
        <Buttons />
      </div>
    </section>
  );
}

export default Home;
