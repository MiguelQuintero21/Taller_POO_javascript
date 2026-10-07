function Vehiculo(marca, modelo, anio, kilometraje, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = Number(anio);
  this.kilometraje = Number(kilometraje);
  this.precio = Number(precio);

  this.obtenerDetalles = function() {
    return `${this.marca} ${this.modelo} (${this.anio}) - ${this.kilometraje} km - $${this.precio}`;
  };

  this.realizarViaje = function(kmRecorridos) {
    this.kilometraje += kmRecorridos;
    console.log(`Viaje registrado. Nuevo kilometraje de ${this.modelo}: ${this.kilometraje} km`);
  };

  this.aplicarDescuento = function(porcentaje) {
    this.precio -= this.precio * (porcentaje / 100);
    console.log(`Descuento aplicado al ${this.modelo}. Nuevo precio: $${this.precio}`);
  };
}

const inventario = [
  new Vehiculo("carro1", "marca pollito1", 2020, 45000, 75000000),
  new Vehiculo("carro2", "marca pollito2", 2022, 15000, 52000000),
  new Vehiculo("carro3", "marca pollito3", 2023, 8000, 98000000)
];

inventario.forEach((auto, index) => {
  console.log(`\n--- Estado del Vehículo ${index + 1} ---`);
  console.log(auto.obtenerDetalles());
  auto.realizarViaje(150);
  auto.aplicarDescuento(10);
});