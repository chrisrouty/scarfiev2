//Basic
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

//Themes and styles
import { ThemeProvider } from 'styled-components';
import DefaultStyled from './theme/default-styled';
import theme from './theme/index'

//Components
import Header from './components/Layout/Header/Header'; 
import Main from './components/Layout/Main/main'; 
import Footer from './components/Layout/Footer/footer'; 

//ENV
axios.defaults.baseURL = 'http://localhost:3030'; 
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default class App extends Component { 

  render(){

    return(
      <ThemeProvider theme={theme}>
        <Router>
          <Main>
            <Header />
            <Routes />
            <Footer />
            <DefaultStyled />
          </Main>
        </Router>
      </ThemeProvider>
    )
  }
}
