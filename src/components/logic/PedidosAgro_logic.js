import { useState } from "react";

export function usePedidoAgroLogic() {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [hayError, setHayError] = useState(false);
  const [contador, setContador] = useState(0);
  const [ultimoPedido, setUltimoPedido] = useState(null);
  const [historial, setHistorial] = useState([]);

  function registrarPedido() {
    if (cliente.trim() === "") {
      mostrarError("Debe ingresar el nombre del cliente");
    } else if (producto.trim() === "") {
      mostrarError("Debe ingresar un producto");
    } else {
      const cantidadNum = Number(cantidad);
      const cantidadValida =
        cantidad.trim() !== "" &&
        Number.isInteger(cantidadNum) &&
        cantidadNum > 0;
      if (!cantidadValida) {
        mostrarError("Ingrese una cantidad válida");
      } else {
        const precioNum = Number(precio);
        if (precio.trim() === "" || isNaN(precioNum) || precioNum <= 0) {
          mostrarError("Ingrese un precio unitario válido");
        } else {
          const total = cantidadNum * precioNum;
          const pedido = {
            cliente: cliente.trim(),
            producto: producto.trim(),
            cantidad: cantidadNum,
            precio: precioNum,
            total: total,
          };

          setUltimoPedido(pedido);
          setHistorial([pedido, ...historial]);
          setContador(contador + 1);
          setHayError(false);
          setMensaje("Pedido registrado correctamente");
        }
      }
    }
  }

  function mostrarError(texto) {
    setHayError(true);
    setMensaje(texto);
    setUltimoPedido(null);
  }

  function limpiarFormulario() {
    setCliente("");
    setProducto("");
    setCantidad("");
    setPrecio("");
    setMensaje("");
    setHayError(false);
    setUltimoPedido(null);
  }

  function formatoDinero(numero) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(numero);
  }

  return {
    mostrarBienvenida,
    setMostrarBienvenida,
    cliente,
    setCliente,
    producto,
    setProducto,
    cantidad,
    setCantidad,
    precio,
    setPrecio,
    mensaje,
    hayError,
    contador,
    ultimoPedido,
    historial,
    registrarPedido,
    limpiarFormulario,
    formatoDinero,
  };
}
