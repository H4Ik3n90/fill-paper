import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';

import axios from "axios";

const App = () => {
  const [name,setName] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(res => {
        setName(res.data);
      });
  }, [])

  if(!name) return null;

  return (
    <div>
      <h1>Hello</h1>
      <h3>{name.id}</h3>
    </div>
  );
}

export default App;


ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />)