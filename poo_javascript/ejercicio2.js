

// Función constructora Mascota
function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.peso = peso;

  this.presentarse = function() {
    return `Mascota: ${this.nombre} | Especie: ${this.especie} | Edad: ${this.edad} años | Peso: ${this.peso} kg`;
  };
}

// se declaran 3 nuevas mascotas
const mascota1 = new Mascota("Lucas", "leon", 4, 12.5);
const mascota2 = new Mascota("Misa", "Gato", 2, 4.1);
const mascota3 = new Mascota("Rocco", "patroclo", 6, 0.8);


console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());

console.log(mascota1)