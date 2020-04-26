//Basic
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from "react-router-dom";

//Themes and styles


//Components
import Title from '../components/Title/title';
 
const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then(res1 => {
      setProduct(res1.data);
    });
  }, []);
  if(product){
    return (
      <>
        <Title>{product.name}</Title>
      </>
    );
  } else {
    return null;
  }

};

export default DetailProduct;