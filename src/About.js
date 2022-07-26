import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar.js';

function App() {
  const [accounts,setAccounts] = useState([]);


  return (
  <div className='Overlay'>
  <div className='App'>
    <NavBar accounts = {accounts} setAccounts={setAccounts} />
    <MainMint accounts = {accounts} setAccounts={setAccounts} />
  </div>
  <div className='background'></div>
  </div>
  );
}

export default App;
