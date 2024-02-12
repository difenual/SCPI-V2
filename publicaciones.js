// Definir el arreglo de publicaciones
var publicaciones = [
    {
      titulo: "¿Por qué creo que la Agencia Nacional de Contratación Pública - Colombia Compra Eficiente (ANCP – CCE) no debe descuidar su objeto misional? (06/02/2024 - Sara Nuñez) En este artículo, se argumenta sobre la importancia de que la Agencia Nacional de Contratación Pública mantenga su enfoque en su objeto misional para cumplir efectivamente con su rol en la optimización de la contratación pública en Colombia.",
      enlace: "publicaciones__blog__2.html"
    },
    {
      titulo: "¿Sabías que a partir de la expedición del artículo 353 de la Ley 2294 de 2023 es viable contratar directamente la ejecución de obras públicas de actividades de mantenimiento y/o mejoramiento de infraestructura social y de transporte? (01/02/2024 - Sara Nuñez) Este artículo explora las implicaciones del artículo 353 de la Ley 2294 de 2023 en la contratación de obras públicas en Colombia, destacando su impacto en la eficiencia y la transparencia de los procesos de contratación" , 
      enlace: "publicaciones__blog__1.html"
    }
  ];
  

function buscarPublicaciones() {
    var busqueda = document.getElementById('search-input').value.toLowerCase();
    
    // Asegúrate de que publicaciones esté definida y sea un arreglo
    // Si publicaciones no está definida o no es un arreglo, este código causará un error
    var resultados = publicaciones.filter(function(pub) {
        return pub.titulo.toLowerCase().includes(busqueda); 
    });

    console.log(resultados);
  
    // Asegúrate de que listaPublicaciones esté definida y apunte al elemento HTML correcto
    mostrarPublicaciones(resultados, busqueda); 
}




function mostrarPublicaciones(publicacionesAMostrar, busqueda) {
    var listaPublicaciones = document.querySelector('.lista__publicaciones'); // Agrega esta línea si listaPublicaciones no está definida
    
    if(publicacionesAMostrar.length === 0) {
        listaPublicaciones.innerHTML = "<p class='sin__coincidencias'>No se encontraron coincidencias</p>";
        return;
    }
    
    // Limpiar contenido anterior
    listaPublicaciones.innerHTML = '';
  
    // Iterar y añadir las publicaciones filtradas
    publicacionesAMostrar.forEach(function(pub) {
        var tituloFormateado = pub.titulo.replace(new RegExp(busqueda, 'ig'), "<span class='resaltado'>$&</span>");
        // Agrega el código para agregar las publicaciones al HTML
        // Por ejemplo:
        var elementoPublicacion = document.createElement('div');
        elementoPublicacion.innerHTML = '<a href="' + pub.enlace + '">' + tituloFormateado + '</a>';
        listaPublicaciones.appendChild(elementoPublicacion);
    });
}
