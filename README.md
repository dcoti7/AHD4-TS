# Gestor de Tareas

Este proyecto es un simple gestor de tareas desarrollado en JavaScript, diesñado para permitir a los usuarios agregar, completar y eliminar tareas. 

## Estructura del proyecto 

El proyecto está organizado de la siguiente manera: 

- `index.html`: Contiene la estructura básica de la página web con el formulario para agregar tareas y la lista de tareas.
- `css/`: 
    - `style.css`: Archivo de estilos para dar formato a la página. 
- `src/`
    - `task.ts`: Clase TypeScript para representar una tareas.
    - `main.ts`: Código principal TypeScript que maneja la lógica de la aplicación. 

## Uso 

Una vez que el proyecto este funcionando en el navegador, el usuario puede: 

- Agregar nuevas tareas utilizando el formulario proporcionado. 
- Marcar las tareas como completadas haciendo clic sobre la tareas correspondiente. 
- Eliminar tareas haciendo click en el botón de eliminar junto a cada tarea. 

# Configuración de TypeScript
El archivo `tsconfig.json` es utilizado para configurar el compilador de TypeScript. Aquí están las principales opciones de configuración

- `"target: ES5"`: Indica que el código TypeScript se compilará a JavaScript compatible con ES5, asegura una mayor compatibilidad con navegadores y entornos antiguos. 
- `"module: ES6"`: Indica que se utilizarán módulos de ES6 en el código TypeScript, esto permite utilizar las características de importación/exportación de ES6 en tu código.
- `"outDir: ./dist"`: Especifica el directorio de salida para los archivos compilados.
- `"strict: true"`: Habilita todas las opciones estrictas del compilador de TypeScript para mejorar la seguridad y calidad del código.
- `"include": ["src/**/*.ts"]`: Especifica que archivos TypeScript deben ser incluidos en la compilación.