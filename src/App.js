

// function App() {
//   return (
//     <div className="App text-xl bg-black h-screen">
//       h
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Faculty from './components/Faculty';
import Admissions from './components/Admission';
import Gallery from './components/Gallery';
import Contact from './components/Contact';  
import Birthday from './components/Birthday';
// import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
