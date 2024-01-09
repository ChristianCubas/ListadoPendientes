let contenedor = document.getElementById("actividades")

function agregarTarea(){
    let bloque_actividad = document.createElement('div')
    bloque_actividad.textContent = actividad.value
    bloque_actividad.classList.add("actividad_registrada")
    contenedor.appendChild(bloque_actividad)
    actividad.value=""
}

añadir.addEventListener('click',agregarTarea)



