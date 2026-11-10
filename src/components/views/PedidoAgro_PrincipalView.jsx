import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { usePedidoAgroLogic } from "../logic/PedidosAgro_logic";
import { estilos, verde } from "../styles/PedidosAgro_styles";

export default function PedidoAgro() {
  const {
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
  } = usePedidoAgroLogic();

  if (mostrarBienvenida) {
    return (
      <View style={estilos.bienvenida}>
        <Text style={estilos.marca}>PEDIDOS AGRO</Text>

        <View>
          <View style={estilos.linea} />
          <Text style={estilos.tituloGrande}>Bienvenido a</Text>
          <Text style={[estilos.tituloGrande, { color: verde }]}>
            Pedidos Agro
          </Text>
          <Text style={estilos.descripcion}>
            Registra los pedidos realizados, ten un control de las cantidades y
            ten un historial limpio
          </Text>

          <TouchableOpacity
            style={estilos.botonEmpezar}
            onPress={() => setMostrarBienvenida(false)}
          >
            <Text style={estilos.textoBoton}>Empezar</Text>
          </TouchableOpacity>
        </View>

        <View />
      </View>
    );
  }

  return (
    <ScrollView style={estilos.fondo} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.marcaPequena}>PEDIDOS AGRO</Text>
      <Text style={estilos.titulo}>Tus pedidos, en orden</Text>
      <Text style={estilos.contador}>
        Pedidos registrados en esta sesión: {contador}
      </Text>

      <Text style={estilos.subtitulo}>Registrar pedido</Text>
      <Text style={estilos.ayuda}>
        Completa los datos para guardar tu pedido.
      </Text>

      <Text style={estilos.etiqueta}>Nombre *</Text>
      <TextInput
        style={estilos.input}
        placeholder="Escribe el nombre del cliente"
        value={cliente}
        onChangeText={setCliente}
      />

      <Text style={estilos.etiqueta}>Producto *</Text>
      <TextInput
        style={estilos.input}
        placeholder="Escribe el producto"
        value={producto}
        onChangeText={setProducto}
      />

      <Text style={estilos.etiqueta}>Cantidad *</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ej. 25"
        keyboardType="numeric"
        value={cantidad}
        onChangeText={setCantidad}
      />
      <Text style={estilos.ayudaPequena}>
        Ingresa una cantidad mayor que 0.
      </Text>

      <Text style={estilos.etiqueta}>Precio unitario *</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ej. 3000"
        keyboardType="numeric"
        value={precio}
        onChangeText={setPrecio}
      />

      {mensaje !== "" && (
        <Text style={hayError ? estilos.mensajeError : estilos.mensajeExito}>
          {mensaje}
        </Text>
      )}

      {ultimoPedido !== null && (
        <View style={estilos.resumen}>
          <Text style={estilos.resumenLinea}>
            Cliente: {ultimoPedido.cliente}
          </Text>
          <Text style={estilos.resumenLinea}>
            Producto: {ultimoPedido.producto}
          </Text>
          <Text style={estilos.resumenLinea}>
            Cantidad: {ultimoPedido.cantidad}
          </Text>
          <Text style={estilos.resumenTotal}>
            Total: {formatoDinero(ultimoPedido.total)}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={estilos.botonPrincipal}
        onPress={registrarPedido}
      >
        <Text style={estilos.textoBoton}>Registrar pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botonSecundario}
        onPress={limpiarFormulario}
      >
        <Text style={estilos.textoSecundario}>Limpiar</Text>
      </TouchableOpacity>

      <Text style={[estilos.subtitulo, { marginTop: 32 }]}>
        Historial de pedidos
      </Text>
      <Text style={estilos.ayuda}>
        Solo pedidos registrados con todos los datos.
      </Text>
      <Text style={estilos.ayudaPequena}>{historial.length} pedidos</Text>

      {historial.map((p, indice) => (
        <View key={indice} style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <Text style={estilos.tarjetaNombre}>{p.cliente}</Text>
            <Text style={estilos.estado}>Registrado</Text>
          </View>
          <View style={estilos.fila}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.miniEtiqueta}>PRODUCTO</Text>
              <Text style={estilos.tarjetaTexto}>{p.producto}</Text>
            </View>
            <View>
              <Text style={estilos.miniEtiqueta}>CANTIDAD</Text>
              <Text style={estilos.tarjetaCantidad}>{p.cantidad}</Text>
            </View>
          </View>
        </View>
      ))}

      <Text style={estilos.nota}>
        * Todos los campos son obligatorios. Los pedidos incompletos no se
        guardan en el historial.
      </Text>
    </ScrollView>
  );
}
