import styles from './App.module.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      This is where we start
    </div>
  );
}

export default App;