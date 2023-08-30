// Función para mostrar los productos en pantalla
function mostrarProductos() {
  // Obtener la lista de productos del almacenamiento local
  const productos = JSON.parse(localStorage.getItem('productos')) || [];

  // Obtener el elemento donde se mostrarán los productos
  const listaProductos = document.querySelector('#lista-productos');

  // Limpiar cualquier contenido anterior
  listaProductos.innerHTML = ' ';

  // Recorrer la lista de productos y mostrarlos en pantalla
  productos.forEach((producto, index) => {
    const productoElement = document.createElement('div');
    productoElement.innerHTML = `
      <li>
       <h1 class="product-name">${producto.nombre}</h1>
       <p>${producto.descripcion}</p>
       <p>Precio: $${producto.precio}</p>
       <img src="${producto.imagen || 'placeholder.jpg'}" alt="${producto.nombre}" />
       <button class="add-button"><span >agregar</span></button>
      </li>
    `;
    listaProductos.appendChild(productoElement);
  });
}

// Controlador de envío del formulario
function handleSubmit(event) {
  event.preventDefault(); // Evitar la recarga de la página

  // Obtener los valores de los campos
  const nombre = document.querySelector('#nombre').value;
  const descripcion = document.querySelector('#descripcion').value;
  const precio = document.querySelector('#precio').value;
  const imagen = document.querySelector('#imagen').files[0]; // Obtener el archivo de imagen

  // Crear un objeto con los datos
  const producto = {
    nombre,
    descripcion,
    precio,
    imagen: imagen ? URL.createObjectURL(imagen) : undefined, // URL de la imagen o undefined si no se selecciona una
  };

  // Obtener la lista de productos existente en el almacenamiento local
  const productosExistente = JSON.parse(localStorage.getItem('productos')) || [];

  // Agregar el nuevo producto a la lista
  productosExistente.push(producto);

  // Guardar la lista actualizada en el almacenamiento local
  localStorage.setItem('productos', JSON.stringify(productosExistente));

  // Mostrar un SweetAlert para indicar que el producto se ha agregado correctamente
  swal("Producto Agregado", "El producto se ha agregado correctamente.", "success").then(() => {
    
   
    // Limpiar los campos del formulario
        document.querySelector('#nombre').value = '';
        document.querySelector('#descripcion').value = '';
        document.querySelector('#precio').value = '';
        document.querySelector('#imagen').value = '';
    
        // Actualizar la visualización de la lista de productos
        mostrarProductos();
      });
    }

// Agregar el controlador de envío de formulario
const formElement = React.createElement("form", { onSubmit: handleSubmit },
  // Otros campos de entrada de texto
  React.createElement("input", { type: "text", id: "nombre", placeholder: "Ingresa el nombre del Producto" }),
  React.createElement("input", { type: "text", id: "descripcion", placeholder: "Ingresa una descripcion" }),
  React.createElement("input", { type: "number", id: "precio", placeholder: "Ingresa el precio" }),
  React.createElement("input", { type: "file", id: "imagen", accept: "image/*" }),
  React.createElement("button", { type: "submit" }, "Enviar")
);

// Encontrar el elemento HTML donde se renderizará el formulario
const appContainer = document.getElementById('app');

// Renderizar el formulario en el contenedor especificado
ReactDOM.render(formElement, appContainer);

// Mostrar los productos almacenados en pantalla
mostrarProductos();
