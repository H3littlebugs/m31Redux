const initialState = {
    productos: [
      { id: 1, nombre: 'Producto 1', precio: 10 },
      { id: 2, nombre: 'Producto 2', precio: 15 },
      { id: 3, nombre: 'Producto 3', precio: 20 }
    ],
    carrito: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AGREGAR_PRODUCTO':
        return {
          ...state,
          carrito: [...state.carrito, action.payload]
        };
      case 'ELIMINAR_PRODUCTO':
        return {
          ...state,
          carrito: state.carrito.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  