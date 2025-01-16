import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
