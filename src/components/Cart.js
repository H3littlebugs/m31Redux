import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto } from '../redux/actions';

const Cart = () => {
  const carrito = useSelector(state => state.carrito);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(eliminarProducto(id));
  };

  return (
    <div>
      <h2>Carrito de compras:</h2>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>
            {item.nombre} - ${item.precio}
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
