//Importar la case tarea desde task.ts
import { Tarea } from "./task.js";

//Obtener elementos del DOM
const tareaForm: HTMLFormElement = document.getElementById('task-form') as HTMLFormElement;
const tareaInput: HTMLInputElement = document.getElementById('task-input') as HTMLInputElement;
const tareaList: HTMLUListElement = document.getElementById('task-list') as HTMLUListElement;


//Crear array para almacenar las tareas.
let tareas: Tarea[] = [];

//Función para agregar una nueva tarea
function addTask(descripcion: string): void{
    //crear una nueva instancia de la clase Tarea
    const nuevaTarea: Tarea = new Tarea(descripcion);

    //Agregar la tarea al aray de tareas
    tareas.push(nuevaTarea);

    //actualizar lista de tareas ODm
    renderTareas(); 
}

//funcion para renderizar la lista de tareas en el DOM
function renderTareas(): void{
    //limpiar la lista de tareas en el DOM.
    tareaList.innerHTML="";
    //Iterar sobre todas las tareas
    tareas.forEach(tarea => {
        const li: HTMLLIElement = document.createElement("li");
        li.textContent = tarea.descripcion;
        //botón para eliminar tareas
        const eliminarBtn: HTMLButtonElement = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add('eliminar-btn');
        eliminarBtn.addEventListener('click', () => {
            eliminarTarea(tarea);
        });

        //Agregar clase completado si la tarea esta completa 
        if(tarea.completado){
            li.classList.add('completada');
        }

        //agregar un evento clic para marcar una tarea completada
        li.addEventListener('click', () => {
            tarea.tareaCompletada();
            renderTareas();
        })



        li.appendChild(eliminarBtn);
        tareaList.appendChild(li);
    });

}
//Función para eliminar una tarea
function eliminarTarea(tareaEliminar: Tarea){
    tareas = tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
} 


//Agregar un evento de envío al formulario para agregar nuevas tareas
tareaForm.addEventListener('submit', event => {
    event.preventDefault();
    const descripcion: string = tareaInput.value.trim();
    if(descripcion!= ''){
        addTask(descripcion);
        tareaInput.value = "";
    }
})




//Renderizar la lista de tareas al cargar la pagina
renderTareas();
