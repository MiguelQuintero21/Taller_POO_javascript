

function Estudiante(nombre, curso, nota) {
  this.nombre = nombre;
  this.curso = curso;
  this.nota = nota;
  
  // Propiedad calculada automáticamente durante la instanciación
  this.aprobado = this.nota >= 3.0;

  this.mostrarResultado = function() {
    const estado = this.aprobado ? "APROBADO" : "REPROBADO";
    console.log(`El estudiante ${this.nombre} del curso ${this.curso} tiene una nota de ${this.nota}: [${estado}]`);
  };
}

const est1 = new Estudiante("pedrito", "JavaScript", 4.2);
const est2 = new Estudiante("camilo", "Java", 2.8);
const est3 = new Estudiante("Sofía", "React", 3.0);
const est4 = new Estudiante("michalle", "Python", 1.5);


est1.mostrarResultado();
est2.mostrarResultado();
est3.mostrarResultado();
est4.mostrarResultado();