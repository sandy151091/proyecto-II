const productos = [
  { id: 1, nombre: "Laptop", precio: 9500 },
  { id: 2, nombre: "Mouse inalámbrico", precio: 250 },
  { id: 3, nombre: "Teclado mecánico", precio: 1200 },
  { id: 4, nombre: "Audífonos Bluetooth", precio: 700 },
];

let carrito = [];

const productosContainer = document.getElementById("productos-container");
const carritoLista = document.getElementById("carrito-lista");
const totalSpan = document.getElementById("total");
const carritoModal = document.getElementById("carrito-modal");
const verCarritoBtn = document.getElementById("verCarrito");
const cerrarCarritoBtn = document.getElementById("cerrarCarrito");
const comprarBtn = document.getElementById("comprarBtn");

function mostrarProductos() {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;
    productosContainer.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  alert(${producto.nombre} agregado al carrito.);
}

function mostrarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = ${item.nombre} - $${item.precio};
    carritoLista.appendChild(li);
  });
  totalSpan.textContent = total;
  carritoModal.classList.remove("hidden");
}

function cerrarCarrito() {
  carritoModal.classList.add("hidden");
}

function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert("Compra realizada con éxito. ¡Gracias por tu pedido!");
  carrito = [];
  cerrarCarrito();
}

verCarritoBtn.addEventListener("click", mostrarCarrito);
cerrarCarritoBtn.addEventListener("click", cerrarCarrito);
comprarBtn.addEventListener("click", comprar);

mostrarProductos();