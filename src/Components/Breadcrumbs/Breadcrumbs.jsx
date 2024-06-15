import React from 'react';
import './Breadcrumbs.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const { product } = props;
  
  return (
    <div className='breadcrumbs'>
      <Link className='breadcrumbs-link' to={'/'}>
        HOME
      </Link>
      <img src={ arrow_icon } alt="" />
      <Link className='breadcrumbs-link' to={`/${product.category}`}>
        { product.category }
      </Link>
      <img src={ arrow_icon } alt="" />
      { product.name }
    </div>
  )
}

export default Breadcrumbs;