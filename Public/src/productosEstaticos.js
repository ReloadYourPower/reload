// Función para crear elementos <li> a partir de un arreglo de productos
function crearListaDeProductos(productos) {
  return productos.map((producto, index) => (
    React.createElement("li", { key: index },
      React.createElement("h1", { className: "product-name" }, producto.nombre),
      React.createElement("p", null, producto.descripcion),
      React.createElement("p", null, "Precio: $" + producto.precio),
      React.createElement("img", { src: producto.imagen || 'placeholder.jpg', alt: producto.nombre }),
      React.createElement("button", { className: "add-button" },
        React.createElement("span", null, "agregar")
      )
    )
  ));
}

// Función principal para mostrar los productos
function staticProducts() {
  // Aquí deberías importar tu archivo JSON de productos
  // Reemplaza 'productos' con tu arreglo de productos reales
  const productos = [
    {
      nombre: "Producto 1",
      descripcion: "Descripción del Producto 1",
      precio: 10,
      imagen: "../Imagenes/ecomerde.jpg"
    },
    {
      nombre: "Producto 2",
      descripcion: "Descripción del Producto 2",
      precio: 15,
      imagen: "imagen2.jpg"
    },
    // Agrega más productos según tus necesidades
  ];

  const listaProductos = crearListaDeProductos(productos);

  // Renderiza la lista de productos en un contenedor
  const appContainer2 = document.getElementById('Products1');
  ReactDOM.render(
    React.createElement("div", null,
      React.createElement("nav", null,
        React.createElement("ul", null, listaProductos)
      )
    ),
    appContainer2
  );
}

// Llama a la función principal para mostrar los productos
staticProducts();
