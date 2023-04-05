import React from 'react';
import Header from "./components/Header"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
