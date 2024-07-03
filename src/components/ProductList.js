import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { agregarProducto } from '../redux/actions';

const ProductList = () => {
  const productos = useSelector(state => state.productos);
  const dispatch = useDispatch();

  const handleClick = (producto) => {
    dispatch(agregarProducto(producto));
  };

  return (
    <div>
      <h2>Productos disponibles:</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => handleClick(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
