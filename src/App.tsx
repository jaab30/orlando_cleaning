import React, { useState, useEffect } from 'react';
import Header from "./pages/Header";
import About from "./pages/About";
import './css/main.scss';

function App() {

  const [user, setUser] = useState("");

  useEffect(() => {

    setUser("John");

  }, [])

  return (
    <div className="">
      <Header />
      <About />
    </div>
  );
}

export default App;
