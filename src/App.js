import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageFunction from './ImageFunction';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={< ImageFunction />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
export default App;