document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        { titulo: '¿Sabías que a partir de la expedición del artículo 353 de la Ley 2294 de 2023 es viable contratar directamente la ejecución de obras públicas de actividades de mantenimiento y/o mejoramiento de infraestructura social y de transporte? (01/02/2024 - Sara Nuñez)', contenido: 'La Ley 2294 de 2023, “Por el cual se expide el Plan Nacional de Desarrollo 2022-2026 “Colombia Potencia Mundial de Vida”, tiene como propósito incluir nuevos actores en las compras públicas del Estado. Así las cosas, el artículo 353 de la mencionada norma, modificó el literal l) del numeral 4 del artículo 2 de la Ley 1150 de 2007, habilitando la suscripción de contratos o convenios directamente con comunidades indígenas para la ejecución de proyectos relacionados con el Plan Nacional de Desarrollo. Para la suscripción de estos contratos, el literal l) del numeral 4 del artículo 2 de la Ley 1150 de 2007 prevé la acreditación de los siguientes requisitos: i) una de las partes del contrato sea cabildo indígena, autoridad tradicional indígena, consejo indígena u organización indígena, ii) el contrato a celebrar tenga como objeto el fortalecimiento del gobierno propio, la identidad cultural, el ejercicio de la autonomía, la garantía de los derechos, satisfacción de necesidades y/o servicios públicos de las comunidades indígenas. En otras palabras, es fundamental no solo que la Entidad Estatal celebre el contrato con un miembro de la comunidad indígena – en alguna de las condiciones previamente descritas-, sino, además, que el objeto tenga relación con los planes, programas y proyectos del Plan Nacional de Desarrollo En todo caso, el artículo 353 de la Ley 2294 de 2023 establece que en la ejecución de estos contratos es viable contratar la ejecución de obras públicas, en específico, actividades de mejoramiento y/o mantenimiento de infraestructura social y transporte, siempre que la Entidad verifique la idoneidad para ejecutar el proyecto teniendo como criterio el enfoque diferencial.  Situación que, sin duda, demuestra la posibilidad de ejecutar contratos de obra pública por la modalidad de contratación directa.'},
            
       // { titulo: 'Título de la Publicación 2', contenido: 'Contenido de la publicación 2...' },
        // Puedes agregar más publicaciones según sea necesario
    ];

    var listaPublicaciones = document.getElementById('lista-publicaciones');

    // Itera sobre las publicaciones y crea elementos HTML para cada una
    publicaciones.forEach(function (publicacion, index) {
        var article = document.createElement('article');
        var titulo = document.createElement('h3');
        var contenido = document.createElement('p');

        titulo.textContent = publicacion.titulo;
        contenido.textContent = publicacion.contenido;

        article.appendChild(titulo);
        article.appendChild(contenido);

        // Añade una clase para aplicar estilos específicos de cada publicación
        article.classList.add('blog-post');

        // Agrega un identificador único para cada publicación
        article.id = 'post-' + index;

        listaPublicaciones.appendChild(article);
    });
});

function buscarPublicaciones() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var publicaciones = document.querySelectorAll('.blog-post');

    publicaciones.forEach(function (publicacion) {
        var contenido = publicacion.textContent.toLowerCase();

        if (contenido.includes(input)) {
            publicacion.style.display = 'block';
        } else {
            publicacion.style.display = 'none';
        }
    });
}
