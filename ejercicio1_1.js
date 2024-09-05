// 1. Estructura de datos compleja
const gestorDeTareas = {
    categorias: []
};

// Función para agregar categorías
function agregarCategoria(nombre) {
    gestorDeTareas.categorias.push({
        nombre,
        subcategorias: []
    });
}

// Función para agregar subcategorías a una categoría específica
function agregarSubcategoria(nombreCategoria, nombreSubcategoria) {
    const categoria = gestorDeTareas.categorias.find(cat => cat.nombre === nombreCategoria);
    if (categoria) {
        categoria.subcategorias.push({
            nombre: nombreSubcategoria,
            tareas: []
        });
    } else {
        console.error(`Categoría ${nombreCategoria} no encontrada`);
    }
}

// Función para agregar tareas a una subcategoría
function agregarTarea(nombreCategoria, nombreSubcategoria, nombreTarea) {
    const categoria = gestorDeTareas.categorias.find(cat => cat.nombre === nombreCategoria);
    if (categoria) {
        const subcategoria = categoria.subcategorias.find(sub => sub.nombre === nombreSubcategoria);
        if (subcategoria) {
            subcategoria.tareas.push({
                nombre: nombreTarea,
                estado: false // false = no completado, true = completado
            });
        } else {
            console.error(`Subcategoría ${nombreSubcategoria} no encontrada en la categoría ${nombreCategoria}`);
        }
    } else {
        console.error(`Categoría ${nombreCategoria} no encontrada`);
    }
}

// 2. Operaciones CRUD
// Función para actualizar el estado de una tarea
function actualizarEstadoTarea(nombreCategoria, nombreSubcategoria, nombreTarea, nuevoEstado) {
    const categoria = gestorDeTareas.categorias.find(cat => cat.nombre === nombreCategoria);
    if (categoria) {
        const subcategoria = categoria.subcategorias.find(sub => sub.nombre === nombreSubcategoria);
        if (subcategoria) {
            const tarea = subcategoria.tareas.find(t => t.nombre === nombreTarea);
            if (tarea) {
                tarea.estado = nuevoEstado;
            } else {
                console.error(`Tarea ${nombreTarea} no encontrada`);
            }
        } else {
            console.error(`Subcategoría ${nombreSubcategoria} no encontrada`);
        }
    } else {
        console.error(`Categoría ${nombreCategoria} no encontrada`);
    }
}

// Función para eliminar una tarea
function eliminarTarea(nombreCategoria, nombreSubcategoria, nombreTarea) {
    const categoria = gestorDeTareas.categorias.find(cat => cat.nombre === nombreCategoria);
    if (categoria) {
        const subcategoria = categoria.subcategorias.find(sub => sub.nombre === nombreSubcategoria);
        if (subcategoria) {
            subcategoria.tareas = subcategoria.tareas.filter(t => t.nombre !== nombreTarea);
        } else {
            console.error(`Subcategoría ${nombreSubcategoria} no encontrada`);
        }
    } else {
        console.error(`Categoría ${nombreCategoria} no encontrada`);
    }
}

// 3. Iteración compleja y copias
// Función para listar todas las tareas 
function listarTareas() {
    gestorDeTareas.categorias.forEach(categoria => {
        console.log(`Categoría: ${categoria.nombre}`);
        categoria.subcategorias.forEach(subcategoria => {
            console.log(`Subcategoría: ${subcategoria.nombre}`);
            subcategoria.tareas.forEach(tarea => {
                console.log(`Tarea: ${tarea.nombre} - Estado: ${tarea.estado ? 'Completado' : 'No Completado'}`);
            });
        });
    });
}


agregarCategoria('Exàmen');
agregarSubcategoria('Exàmen', 'Proyecto A');
agregarTarea('Exàmen', 'Proyecto A', 'Aprobar exàmen');
actualizarEstadoTarea('Exàmen', 'Proyecto A', 'Aprobar exàmen', false);

agregarCategoria('Personal');
agregarSubcategoria('Personal', 'Compras');
agregarTarea('Personal', 'Compras', 'Comprar leche');
listarTareas();


