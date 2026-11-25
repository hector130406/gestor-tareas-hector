import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

// Mini-Reto 1: querySelector, texto y clases
const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

const pendientes = contarPendientes(estado.tareas);
const resumen = document.querySelector("#resumen");
resumen.textContent = `Tienes ${pendientes} tareas pendientes.`;

// Mini-Reto 2: crear e insertar temporalmente tres <li class="demo"> en #lista
const lista = document.querySelector("#lista");
const textosDemo = ["Primera tarea demo", "Segunda tarea demo", "Tercera tarea demo"];

textosDemo.forEach((texto) => {
  const li = document.createElement("li");
  li.classList.add("demo");
  li.textContent = texto;
  lista.append(li);
});

// Seleccionarlos con querySelectorAll y anteponer "- " a cada textContent
const demosNodeList = document.querySelectorAll(".demo");
demosNodeList.forEach((li) => {
  li.textContent = `- ${li.textContent}`;
});

// Mini-Reto 2b: getElementById, getElementsByClassName y HTMLCollection
// getElementById NO lleva "#" en el argumento, porque recibe directamente el id del elemento, no un selector CSS.
const listaPorId = document.getElementById("lista");

const demosCollection = listaPorId.getElementsByClassName("demo");

// Al intentar recorrer la HTMLCollection con .forEach() se produce en consola el error:
// Uncaught TypeError: demosCollection.forEach is not a function
// demosCollection.forEach((li) => console.log(li.textContent));

// Recorrido correcto convirtiendo HTMLCollection a Array con Array.from(...)
Array.from(demosCollection).forEach((li) => {
  li.textContent = li.textContent.replace("- ", "✓ ");
});

// Respuestas sobre colecciones del DOM:
// - La HTMLCollection devuelta por getElementsByClassName es VIVA: se actualiza automáticamente si el DOM cambia.
// - La NodeList devuelta por querySelectorAll es ESTÁTICA: guarda una instantánea del momento de la consulta y no se actualiza automáticamente si cambia el DOM.
