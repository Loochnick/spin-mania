import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-up">
        <div className="cartitems-format-main text-left">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0)
          {
            return <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <Link to={`/product/${e.id}`}>
                  <img src={e.image1} alt="" className='carticon-product-icon' />
                </Link>
                <Link className='cartitems-name' to={`/product/${e.id}`}>
                  <p>{e.name}</p>
                </Link>
                <p>{e.new_price}&#8364;</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}&#8364;</p>
                <div><img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" /></div>
              </div>
              <hr />
            </div>
          }
          return null;
        })}
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}&#8364;</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>{getTotalCartAmount()}&#8364;</p>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          {/* <div className="cartitems-promobox"> */}
            <input type="text" placeholder='promo code' />
            
          {/* </div> */}
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems;