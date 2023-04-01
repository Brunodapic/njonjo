import styles from './App.module.css';
import Navigation from './components/Navigation';
import Register from './scenes/Register';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Inventory from './scenes/Inventory';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;