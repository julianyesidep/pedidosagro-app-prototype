import { StyleSheet } from "react-native";

export const verde = "#235B45";
export const lima = "#D7EC74";
export const oscuro = "#1F2D27";
export const gris = "#6B726E";
export const fondo = "#FBFBF7";

export const estilos = StyleSheet.create({
  bienvenida: {
    flex: 1,
    backgroundColor: fondo,
    padding: 28,
    paddingTop: 60,
    justifyContent: "space-between",
  },
  marca: { color: verde, fontWeight: "bold", letterSpacing: 3, fontSize: 13 },
  linea: { width: 56, height: 6, backgroundColor: lima, marginBottom: 24 },
  tituloGrande: { fontSize: 44, fontWeight: "bold", color: oscuro },
  descripcion: { fontSize: 17, color: gris, marginTop: 20, lineHeight: 26 },
  botonEmpezar: {
    backgroundColor: lima,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 32,
  },

  fondo: { flex: 1, backgroundColor: fondo },
  contenido: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  marcaPequena: {
    color: verde,
    fontWeight: "bold",
    letterSpacing: 3,
    fontSize: 12,
  },
  titulo: { fontSize: 30, fontWeight: "bold", color: oscuro, marginTop: 8 },
  contador: {
    color: verde,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 24,
  },
  subtitulo: { fontSize: 22, fontWeight: "bold", color: oscuro },
  ayuda: { color: gris, fontSize: 15, marginTop: 6, marginBottom: 12 },
  ayudaPequena: { color: gris, fontSize: 13, marginTop: 6, marginBottom: 8 },
  etiqueta: { fontSize: 16, color: oscuro, marginTop: 14, marginBottom: 6 },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DADDD8",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },

  botonPrincipal: {
    backgroundColor: lima,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 16,
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: verde,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  textoBoton: { color: oscuro, fontWeight: "bold", fontSize: 17 },
  textoSecundario: { color: verde, fontWeight: "bold", fontSize: 16 },

  mensajeError: { color: "#B3261E", fontWeight: "bold", marginTop: 12 },
  mensajeExito: { color: verde, fontWeight: "bold", marginTop: 12 },
  resumen: {
    backgroundColor: "#EEF6D0",
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
  },
  resumenLinea: { color: oscuro, fontSize: 15, marginBottom: 2 },
  resumenTotal: {
    color: verde,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 6,
  },

  tarjeta: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E3E6E1",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  tarjetaNombre: { fontSize: 18, fontWeight: "bold", color: oscuro },
  estado: { color: verde, fontSize: 13 },
  miniEtiqueta: { color: gris, fontSize: 11, letterSpacing: 1 },
  tarjetaTexto: { fontSize: 16, color: oscuro, marginTop: 2 },
  tarjetaCantidad: { fontSize: 28, fontWeight: "bold", color: verde },
  nota: { color: gris, fontSize: 13, marginTop: 16 },
});
