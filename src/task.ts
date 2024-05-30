//Definir la clase Task
export class Tarea{
    descripcion : string;
    completado: boolean;

    //Constructor de la clase tarea
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Metodo para marcar la tarea completada
    tareaCompletada(){
        this.completado = !this.completado;
    }

}


