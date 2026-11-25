import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  lista.replaceChildren();

  estado.tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    if (tarea.completada) {
      li.classList.add("completada");
    }
    lista.append(li);
  });

  const completadas = contarCompletadas(estado.tareas);
  const pendientes = contarPendientes(estado.tareas);
  resumen.textContent = `${completadas} completadas · ${pendientes} pendientes`;
}
