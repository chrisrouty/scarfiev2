//Basic
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from "react-router-dom";

//Components
import Title from '../../Title/title';

const WrapperProduct = ({product, img}) => {
  let { url } = useRouteMatch();
  let { id } = useParams();
  // let product = find(parseInt(id));
  return(
    <Link to={`product/${product.id}`}>
      <div className="details">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
      </div>
      <Title className="title-product">{product.name}</Title>
      <img src={img} alt={product.name} className="img-item"/>
      <span>{product.likes_count} likes</span>
    </Link>
  )
};

export default WrapperProduct;