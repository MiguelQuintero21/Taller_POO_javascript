// aqui empezamos a hacer la función constructora Computador
function Computador(marca, procesador, ram, precio) {


  this.marca = marca;
  this.procesador = procesador;
  this.ram = ram; 
  this.precio = precio;

}

//aqui empezamos a crear los objetos unicos
let pc1 = new Computador("wawei", "Interdebogota", 16, 3500000);
const pc2 = new Computador("apull", "AMD Ryzen 5", 8, 2200000);
const pc3 = new Computador("samsun", "M2", 16, 5800000);
const pc4 = new Computador ("lenovo", "interdemiami", 6, 4000000 )

// impresion de cada uno 
console.log(pc1);
console.log(pc2);
console.log(pc3);
console.log(pc4); 