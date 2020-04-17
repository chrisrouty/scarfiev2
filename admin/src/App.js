// in src/App.js
import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin'; 

//Components
import products from './products';
import images from './images';
import productImages from './productImages';
import { Layout } from './layout';
import Dashboard from './dashboard';


// import jsonServerProvider from 'ra-data-json-server';  
import lb4Provider from 'react-admin-lb4';

 
require('dotenv').config();

const API_URL = 'http://localhost:3000';

const dataProvider = lb4Provider(API_URL);
// const dataProvider = lb4Provider(API_URL);   

class App extends Component {
  render() {
    return (
      <Admin
        dataProvider={dataProvider} 
        layout={Layout}
        dashboard={Dashboard}
      >
        <Resource name="products" {...products} /> 
        <Resource name="images" {...images} /> 
        <Resource name="product-images" {...productImages} />
      </Admin>
    );
  }
}
export default App; 