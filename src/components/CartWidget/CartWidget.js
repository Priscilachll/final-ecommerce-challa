import React, { useContext } from 'react';
import './CartWidget.css';
import cart from './assets/cart1.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='Cartwidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt='cart-widget' />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;


// // importamos la img del carrito
// import './CartWidget.css';
// import cart from './assets/cart1.png';

// const CartWidget = () => {
//     return (
//         <div>
//       <img src={cart} alt="cart-widget" style={{ width: '50px', height: '50px' }} />
//       0
//       </div>
//     );
//   };
  
//   export default CartWidget;
  