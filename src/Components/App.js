import React from 'react';
import { Route } from 'react-router-dom';
import SearchBar from './SearchBar';

function App() {


  return (
    <div>
     <Route path='/' exact component={SearchBar} />
    </div>
  )
}

export default App
