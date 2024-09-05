### Ejercicio 1:
### 1. Estructura de datos compleja

El código organiza las tareas en una estructura jerárquica compuesta por **categorías**, **subcategorías** y **tareas**. Las **categorías** son objetos que contienen arrays de **subcategorías**, y cada subcategoría contiene un array de **tareas**. Cada tarea es un objeto que tiene dos propiedades: 
- **nombre**: para identificar la tarea.
- **estado**: un valor booleano (`true` o `false`) que indica si la tarea está completada.


#### Ejemplo:
- Una categoría es “Trabajo”.
- Dentro de “Trabajo” puede haber subcategorías como “Proyecto A” y “Proyecto B”.
- Cada subcategoría tiene tareas como “Terminar informe” o “Enviar correos”, y cada tarea puede estar completada o pendiente.

---

### 2. Operaciones CRUD

Se implementan las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar las tareas dentro de la estructura:

#### **Crear**:
- Se pueden **agregar** nuevas categorías, subcategorías y tareas mediante funciones dedicadas. 
  - Para agregar una nueva categoría, se inserta en el array principal de categorías.
  - Las subcategorías se añaden a su categoría correspondiente, buscando por nombre de categoría.
  - Las tareas se añaden a una subcategoría específica, dentro de la categoría correspondiente, asignando un nombre y un estado por defecto (no completada).

#### **Leer**:
- La operación de lectura permite visualizar todas las categorías, subcategorías y tareas en formato jerárquico. 
  - Una función recorre el array de categorías, y para cada una de ellas recorre también sus subcategorías y tareas, imprimiendo su estado y su nombre.

#### **Actualizar**:
- El código incluye la capacidad de **actualizar** el estado de una tarea específica. 
  - La función localiza la categoría, luego la subcategoría, y finalmente la tarea en cuestión. Una vez encontrada, actualiza su estado a `true` (completada) o `false` (pendiente).

#### **Eliminar**:
- Para **eliminar** una tarea, se busca dentro de una categoría y subcategoría específicas y se remueve la tarea del array de tareas mediante un filtro, que excluye la tarea a eliminar.



### 3. Iteración compleja y copias

LA funcion maneja la iteración sobre la estructura jerárquica (categorías → subcategorías → tareas) de manera eficiente para listar todas las tareas de forma organizada:

#### Iteración:
- Se crea la función que recorre todas las **categorías**, dentro de cada categoría recorre las **subcategorías**, y dentro de cada subcategoría recorre las **tareas**.
  - Esta iteración permite mostrar todas las tareas organizadas, facilitando la lectura y administración de las mismas. Se imprime el nombre de la tarea y su estado (completada o no).
    

### EJERCICIO 2
### 1. Manejo de números y tipos de datos
- El código valida que todos los elementos de un array sean números antes de realizar cálculos estadísticos. Las operaciones incluyen:
  - **Media**: Se calcula sumando todos los elementos del array y dividiendo por la cantidad de números.
  - **Mediana**: Se ordenan los números y se encuentra el valor central. Si la cantidad de números es par, se promedia el par central.
  - **Moda**: Se cuenta la frecuencia de aparición de cada número y se identifican los valores que ocurren más veces.
  - **Desviación estándar**: Se calcula midiendo qué tanto varían los números respecto a la media, usando la fórmula matemática para varianza y raíz cuadrada.
  - Se utiliza el método **reduce** para sumar los elementos del array y **sort** para ordenarlos.

### 2. Iteración avanzada y destructuring
- Se emplea **destructuring** para acceder a las propiedades de objetos (en este caso, `valor` de un objeto que contiene arrays de números). La función **map** itera sobre el array de objetos y aplica la función `calcularEstadisticas` a cada conjunto de valores. Esto permite procesar de manera eficiente varios grupos de datos sin tener que acceder manualmente a cada elemento.

### 4. Uso de fechas y tiempos
- Se utiliza el objeto **Date** de JavaScript para convertir cadenas de texto en fechas y calcular la diferencia entre dos fechas en milisegundos. Luego, esta diferencia se convierte en días, dividiendo por el número de milisegundos que hay en un día. El uso de **Math.abs** asegura que la diferencia siempre sea un valor positivo, independientemente del orden en que se introduzcan las fechas.


