import styles from './App.module.css';
import Navigation from './components/Navigation';
import Register from './scenes/Register';
import Login from './scenes/Login';
import Home from './scenes/Home';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;