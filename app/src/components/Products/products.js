//Basic
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

//Style
import {Styled} from './styled';

//Partials
import {WrapperProduct, params} from './Partials';


const Products = ({products, imgs, ...props}) => {
  
    function shuffleItem(products) {
      products.sort(() => Math.random() - 0.5);
    }
    
    if(props.isSlider){
      return(
        <Swiper {...params}>
          {
            products.slice(0, 10).map((product, index) => (
              <Styled key={index} {...props}>
                <WrapperProduct product={product} img={imgs.find(item => item.id === product.imageIdDefault).url} />
              </Styled>
            ))
          }
        </Swiper>
      )
    } else {
      shuffleItem(products);
      return products.slice(0, 23).map((product, index) => (
          <Styled key={index} {...props}>
            <WrapperProduct product={product} img={imgs.find(item => item.id === product.imageIdDefault).url} />
          </Styled>
      ));
    }

};

export default Products;


