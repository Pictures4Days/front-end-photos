import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react'
import ImageFunction from './ImageFunction';
import Header from './Header';
import Footer from './Footer';
// import About from './About';
import Login from './Login';
import Logout from './Logout';



class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <Header />
        <Login />
        <Routes>
          <Route path="/" element={< ImageFunction />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Logout />
        <Footer />
      </Router>
      </>
    );
  }
}
export default withAuth0(App);