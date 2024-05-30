//Definir la clase Task
var Tarea = /** @class */ (function () {
    //Constructor de la clase tarea
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Metodo para marcar la tarea completada
    Tarea.prototype.tareaCompletada = function () {
        this.completado = !this.completado;
    };
    return Tarea;
}());
export { Tarea };
