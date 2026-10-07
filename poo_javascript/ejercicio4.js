

function Libro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.prestado = false; 

  this.prestar = function() {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" ha sido prestado con éxito.`);
    } else {
      console.log(`ALERTA: El libro "${this.titulo}" ya se encuentra prestado.`);
    }
  };

  this.devolver = function() {
    if (this.prestado) {
      this.prestado = false;
      console.log(`El libro "${this.titulo}" ha sido devuelto correctamente.`);
    } else {
      console.log(`ERROR: El libro "${this.titulo}" no figuraba como prestado.`);
    }
  };
}


const miLibro = new Libro("Satanás", "mario mendoza", 678);

miLibro.prestar();  
miLibro.prestar();  
miLibro.devolver(); 
miLibro.devolver(); 