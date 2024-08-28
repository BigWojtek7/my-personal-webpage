import styles from './App.module.css';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import MyServices from './components/MyServices/MyServices';
import MyWork from './components/MyWork/MyWork';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Intro />
        <MyServices />
        <About />
        <MyWork />
      </main>
      <Footer />
    </>
  );
}

export default App;
