import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import './css/main.scss';

function App(): any {

  const [user, setUser] = useState("");

  useEffect(() => {

    setUser("John");

  }, [])

  return (
    <Router>
      <div className="">
        <Route path="/" exact component={Main} />
      </div>
    </Router>
  );
}

export default App;
