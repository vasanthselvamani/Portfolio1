import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Creative"
import Errorpage from "./component/error/Errorpage";
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
