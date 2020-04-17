//Basic
import React from 'react';
// import {CSSTransitionGroup} from 'react-transition-group';

//Components
import Title from '../../Title/title';

const WrapperProduct = ({product, img}) => 
  <>
    <a href="#" title={product.name}>
        <div className="details">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
        </div>
        <Title className="title-product">{product.name}</Title>
        <img src={img} alt={product.name}  className="img-item"/>
        <span>{product.likes_count} likes</span>
    </a>
  </>
;

export default WrapperProduct;