import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Profile from './Components/Profile';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <Container fluid className="text-light min-vh-100 body">
      <Profile />
      <Searchbar />
    </Container>
  );
}

export default App;
