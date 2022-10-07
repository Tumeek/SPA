import './App.css';
import Navbar from './Pages/Navbar'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import NotFound from './Pages/NotFound'
import Footer from './Pages/Footer'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    <Footer />
    </>
  
  );
}

export default App;
