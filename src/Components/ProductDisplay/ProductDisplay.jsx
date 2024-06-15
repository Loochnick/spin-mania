import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [currentImage, setCurrentImage] = useState(product.image1);
 
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image1} alt="" onMouseOver={e => setCurrentImage(product.image1)} />
          <img src={product.image2} alt="" onMouseOver={e => setCurrentImage(product.image2)} />
          <img src={product.image3} alt="" onMouseOver={e => setCurrentImage(product.image3)} />
          <img src={product.image4} alt="" onMouseOver={e => setCurrentImage(product.image4)} />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={currentImage} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price}&#8364;
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price}&#8364;
          </div>
        </div>
        <div className="productdisplay-right-parameters">
          {product.parameters}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>XUL</div>
            <div>UL</div>
            <div>L</div>
            <div>ML</div>
            <div>M</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Spinning, Rockfishing, Trout
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Area, Freshwater, Stream
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay;