import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';

import Sidebar from "./Components/Sidebar";
import Notes from './Pages/Notes';
import AddNote from "./Pages/AddNote";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-scroll">
        <Routes>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/add" element={<AddNote />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )