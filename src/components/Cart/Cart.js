// import React, { useContext } from 'react';
// import './CartWidget.css';
// import cart from './assets/cart1.png'; 
// import { CartContext } from '../../context/CartContext';
// import { Link } from 'react-router-dom';

// const CartWidget = () => {
//   const { totalQuantity } = useContext(CartContext);

//   return (
//     <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
//       <img className="CartImg" src={cart} alt='cart-widget' />
//       {totalQuantity}
//     </Link>
//   );
// }

// export default CartWidget;

 import React from 'react';
 import './Cart.css';
 import { useContext } from "react";
 import { CartContext } from '../../context/CartContext';
 import CartItem from '../CartItem/CartItem';
 import { Link } from 'react-router-dom';

 const Cart = () => {
   const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

   if (totalQuantity === 0) {
     return (
       <div>
         <h1>No hay items en el carrito</h1>
         <Link to='/' className='Option'>Productos</Link>
       </div>
     );
   }

   return (
     <div>
       {cart.map(item => <CartItem key={item.id} {...item} />)}
       <h3>Total: ${total}</h3>
       <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
       <Link to='/checkout' className='Option'>Checkout</Link>
     </div>
   );
 }

 export default Cart;
