
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// komponentler gelecek
import Navbar from './components/navbar'
import Header from './components/header'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutMe/>
    </>

  );
}

export default App;
