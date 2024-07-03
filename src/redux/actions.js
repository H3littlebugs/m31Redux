export const agregarProducto = (producto) => ({
    type: 'AGREGAR_PRODUCTO',
    payload: producto
  });
  
  export const eliminarProducto = (id) => ({
    type: 'ELIMINAR_PRODUCTO',
    payload: id
  });
  