import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react'
import ImageFunction from './ImageFunction';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Privacy from './Privacy';
import TermsUse from './TermsUse';


class App extends React.Component {
  render() {
    return (
      // If the user is authenticated
      this.props.auth0.isAuthenticated ?
        <>
          <Router>
            <Header />
            <Logout />
            <Profile />
            <Routes>
              <Route path="/" element={< ImageFunction />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/termsuse" element={<TermsUse />} />
            </Routes>
            <Footer />
          </Router>
        </>
        :
        <>
          <Login />
          <Router>
            <Header />
            <Routes>
            </Routes>
            <Footer />
          </Router>
        </>
    );
  }
}
export default withAuth0(App);