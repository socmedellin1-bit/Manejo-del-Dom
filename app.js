console.log("✅ app.js cargado correctamente");


const btnBuscar = document.getElementById("btnBuscar");
const inputNombre = document.getElementById("nombreLibro");
const inputAutor = document.getElementById("autor");
const selectCategoria = document.getElementById("categoria");
const divResultados = document.getElementById("resultados");


const libros = [
  { nombre: "Cien años de soledad", autor: "Gabriel García Márquez", categoria: "novela" },
  { nombre: "La Odisea", autor: "Homero", categoria: "ensayo" },
  { nombre: "Platero y yo", autor: "Juan Ramón Jiménez", categoria: "poesia" },
  { nombre: "El Principito", autor: "Antoine de Saint-Exupéry", categoria: "infantil" },
  { nombre: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", categoria: "novela" },
  { nombre: "Hamlet", autor: "William Shakespeare", categoria: "novela" },
  { nombre: "Orgullo y prejuicio", autor: "Jane Austen", categoria: "novela" },
  { nombre: "Crimen y castigo", autor: "Fiódor Dostoyevski", categoria: "novela" },
  { nombre: "1984", autor: "George Orwell", categoria: "novela" },
  { nombre: "La divina comedia", autor: "Dante Alighieri", categoria: "poesia" },
  { nombre: "Hojas de hierba", autor: "Walt Whitman", categoria: "poesia" },
  { nombre: "Meditaciones", autor: "Marco Aurelio", categoria: "ensayo" },
  { nombre: "Cuentos de la selva", autor: "Horacio Quiroga", categoria: "infantil" },
  { nombre: "Alicia en el país de las maravillas", autor: "Lewis Carroll", categoria: "infantil" },
  { nombre: "Pinocho", autor: "Carlo Collodi", categoria: "infantil" },
  { nombre: "Las aventuras de Tom Sawyer", autor: "Mark Twain", categoria: "infantil" }
];


btnBuscar.addEventListener("click", buscarLibro);

function buscarLibro() {
  const nombre = inputNombre.value.toLowerCase();
  const autor = inputAutor.value.toLowerCase();
  const categoria = selectCategoria.value;

  
  const resultados = libros.filter(libro =>
    (nombre === "" || libro.nombre.toLowerCase().includes(nombre)) &&
    (autor === "" || libro.autor.toLowerCase().includes(autor)) &&
    (categoria === "" || libro.categoria === categoria)
  );

  mostrarResultados(resultados);
}

function mostrarResultados(lista) {
  divResultados.innerHTML = ""; 

  if (lista.length === 0) {
    divResultados.textContent = "⚠️ No se encontraron libros.";
    return;
  }

  const ul = document.createElement("ul");

  lista.forEach(libro => {
    const li = document.createElement("li");
    li.textContent = `${libro.nombre} — ${libro.autor} [${libro.categoria}]`;
    ul.appendChild(li);
  });

  divResultados.appendChild(ul);
}
