document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        
        {
            titulo: '¿Sabías que a partir de la expedición del artículo 353 de la Ley 2294 de 2023 es viable contratar directamente la ejecución de obras públicas de actividades de mantenimiento y/o mejoramiento de infraestructura social y de transporte? (01/02/2024 - Sara Nuñez)',
            contenido: 'La Ley 2294 de 2023, “Por el cual se expide el Plan Nacional de Desarrollo 2022-2026 “Colombia Potencia Mundial de Vida”, tiene como propósito incluir nuevos actores en las compras públicas del Estado. Así las cosas, el artículo 353 de la mencionada norma, modificó el literal l) del numeral 4 del artículo 2 de la Ley 1150 de 2007, habilitando la suscripción de contratos o convenios directamente con comunidades indígenas para la ejecución de proyectos relacionados con el Plan Nacional de Desarrollo.<br> Para la suscripción de estos contratos, el literal l) del numeral 4 del artículo 2 de la Ley 1150 de 2007 prevé la acreditación de los siguientes requisitos: i) una de las partes del contrato sea cabildo indígena, autoridad tradicional indígena, consejo indígena u organización indígena, ii) el contrato a celebrar tenga como objeto el fortalecimiento del gobierno propio, la identidad cultural, el ejercicio de la autonomía, la garantía de los derechos, satisfacción de necesidades y/o servicios públicos de las comunidades indígenas. En otras palabras, es fundamental no solo que la Entidad Estatal celebre el contrato con un miembro de la comunidad indígena – en alguna de las condiciones previamente descritas-, sino, además, que el objeto tenga relación con los planes, programas y proyectos del Plan Nacional de Desarrollo.<br> En todo caso, el artículo 353 de la Ley 2294 de 2023 establece que en la ejecución de estos contratos es viable contratar la ejecución de obras públicas, en específico, actividades de mejoramiento y/o mantenimiento de infraestructura social y transporte, siempre que la Entidad verifique la idoneidad para ejecutar el proyecto teniendo como criterio el enfoque diferencial. Situación que, sin duda, demuestra la posibilidad de ejecutar contratos de obra pública por la modalidad de contratación directa.',
            imagen: 'blog__1.jpeg'
        }
    ];


    



    var listaPublicaciones = document.getElementById('lista-publicaciones');

    // Iterar sobre las publicaciones y crear elementos HTML para cada una
    publicaciones.forEach(function (publicacion, index) {
        var article = document.createElement('article');
        var titulo = document.createElement('h3');
        var contenido = document.createElement('p');
        var imagen = document.createElement('img');
        var shareDiv = document.createElement('div');
        var facebookBtn = document.createElement('a');
        var twitterBtn = document.createElement('a');
        var linkedinBtn = document.createElement('a');
        var compartirTitulo = document.createElement('h4');
        
                
        titulo.textContent = publicacion.titulo;
        contenido.innerHTML = publicacion.contenido;
        imagen.src = publicacion.imagen;

        imagen.classList.add('publicaciones__imagenes');
             
        // Agregar clases y atributos necesarios para los botones de compartir
        
        facebookBtn.classList.add('share-button', 'share-facebook');
        facebookBtn.innerHTML = '<i class="fab fa-facebook-f"></i>';

        twitterBtn.classList.add('share-button', 'share-twitter');
        twitterBtn.innerHTML = '<i class="fa-brands fa-x-twitter"></i>';
        
        linkedinBtn.classList.add('share-button', 'share-linkedin');
        linkedinBtn.innerHTML = '<i class="fab fa-linkedin-in"></i>';

        // Agregar botones de compartir al contenedor div
        shareDiv.appendChild(facebookBtn);
        shareDiv.appendChild(twitterBtn);
        shareDiv.appendChild(linkedinBtn);

        compartirTitulo.textContent = '¡Si te gustó este artículo puedes compartirlo en tus redes sociales!';

              
        // Agregar contenido y botones al artículo
        article.appendChild(titulo);
        article.appendChild(contenido);
        article.appendChild(imagen);
        article.appendChild(compartirTitulo);
        article.appendChild(shareDiv);

        // Agregar clase para aplicar estilos específicos
        article.classList.add('blog-post');

        // Agregar identificador único para cada publicación
        article.id = 'post-' + index;

        // Agregar artículo a la lista de publicaciones
        listaPublicaciones.appendChild(article);
    });

    // Obtener todos los botones de compartir
    var shareButtons = document.querySelectorAll('.share-button');

    // Iterar sobre cada botón y agregar un evento de clic
    shareButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Obtener la URL de la página actual
            var url = window.location.href;

            // Obtener el título de la publicación actual
            var titulo = button.parentNode.parentNode.querySelector('h3').textContent;

            // Obtener la red social correspondiente al botón
            var socialNetwork = button.classList.contains('share-facebook') ? 'facebook' :
                                 button.classList.contains('share-twitter') ? 'twitter' :
                                 button.classList.contains('share-linkedin') ? 'linkedin' : '';

            // Generar el enlace de compartir según la red social
            var shareUrl = '';
            switch (socialNetwork) {
                case 'facebook':
                    shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
                    break;
                case 'twitter':
                    shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(titulo);
                    break;
                case 'linkedin':
                    shareUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(titulo);
                    break;
                default:
                    break;
            }

            // Abrir una ventana emergente para compartir
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
});