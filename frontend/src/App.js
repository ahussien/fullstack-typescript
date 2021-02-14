import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <>
      <Header/>
      <main>
       <SearchPage/>
      </main>
      <Footer/>
    </>

  );
}

export default App;
