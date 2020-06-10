import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";

import SearchForm from "./components/SearchForm";


function App() {
  return (
    <div>
      <SearchForm />
      <Table />
    </div>
  );
}

export default App;
