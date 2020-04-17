//Basic
import React, { Component } from 'react';
import axios from 'axios';

//Themes and styles
import { ThemeProvider } from 'styled-components';
import Styled from '../components/Layout/Main/styled' 
import DefaultStyled from '../theme/default-styled';
import theme from '../theme/index'

//Components
import Header from '../components/Layout/Header/Header'; 
import Products from '../components/Products/products';
import Container from '../components/Container/Container';
import Title from '../components/Title/title';

//ENV
axios.defaults.baseURL = 'http://localhost:3030'; 
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default class App extends Component { 

  constructor(props){
    super()
    this.state = {
      products: [],
      imgs: [],
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/products`).then(res1 => {
      this.setState({ products: res1.data })
    }) 
    axios.get(`http://localhost:3000/images`).then(res2 => {
      this.setState({ imgs: res2.data }) 
    })
  }

  render(){
    const isLoadData = this.state.products.length > 0 && this.state.imgs.length > 0;

    return(
      <ThemeProvider theme={theme}>
        <Styled>
          <Header />
          <Container>
            <section style={{
              background: `url('img/interface/shape_cloud.svg') no-repeat`,
              backgroundSize: '100%',
              padding: '10%',
              backgroundPosition: 'center center',
            }}>
              <Title isH2 bgWhite isTitleSlider>Les plus likées !</Title>
              {isLoadData &&
                <Products isSlider isBorderRadius isPadding isShadow products={this.state.products} imgs={this.state.imgs} />
              }
            </section>
          </Container>
          <Container isWidthFull>
            <Title isH3 isCenter>Le wall des écharpes</Title> 
            <section style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
            }}>
              {isLoadData &&
                <Products isHideLike isHideTitle products={this.state.products} imgs={this.state.imgs} />
              }
            </section>
          </Container>
          <DefaultStyled />
        </Styled>
      </ThemeProvider>
    )
  }
}
