document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        
        {
            titulo: 'Colombia Compra Eficiente promueve la inclusión laboral con requisitos de mano de obra local en los Documentos Tipo (Sara Nuñez 23/04/2024)',
            contenido: 'El artículo 80 de la Ley 2294 del 19 de mayo de 2023, en el marco de las medidas adoptadas dentro del Plan Nacional de Desarrollo 2022-2026 para el fortalecimiento de la economía popular, establece la siguiente obligación: “Todas las inversiones y programas proyectados a ejecutarse en las regiones deberán contratar como mínimo el 50% de mano de obra local, siempre y cuando exista la mano de obra con las capacidades que requiere la ejecución de las inversiones y programas”. <br>Mediante el <i>Concepto C-068 del 18 de abril de 2024</i>, la Agencia Nacional de Contratación Pública funda la línea para entender el alcance de esta medida de inclusión social. En primer lugar, explica que el objetivo de la disposición es que los beneficiarios de las inversiones y programas participen en su ejecución, lo que cumple un propósito de inserción en doble vía. Añade que este deber no aplica automáticamente, por lo que se sujeta al análisis realizado por las entidades de acuerdo con las necesidades de ejecución, aspecto que Colombia Compra Eficiente sugiere motivar en los documentos del proceso.<br>Por otro lado, se explica que, al ser una norma de carácter sustancial, su implementación coincide, por ejemplo, con el requisito de industria nacional establecido en la Ley 816 de 2013 y/o con los criterios sociales especificados en el Decreto 142 de 2023. Se añade que la consideración de estos u otros criterios diferenciales no exime la obligación de contratar mano de obra local, siempre y cuando se cumplan las condiciones necesarias para eso. Consecuentemente, en los términos del inciso primero del artículo 38 de la Ley 153 de 1887, la Agencia estima su incidencia en los contratos estales suscritos después de la expedición de la Ley del Plan Nacional de Desarrollo; razón por la cual, conforme al principio de irretroactividad de las leyes, no cobija los negocios celebrados con anterioridad. En otras palabras, siempre existan los requisitos para eso, aquellos firmados durante el 19 de mayo de 2023 y los días siguientes a la vigencia de la Ley 2294 de 2023 deben adoptar los mecanismos necesarios para el cumplimiento de la norma en la respectiva minuta.<br>Por otro lado, para Colombia Compra Eficiente, la obligación de contratar mano de obra local no está sujeta a la reglamentación previa del Gobierno Nacional, por lo que es aplicable directamente sin necesidad de un complemento normativo posterior. <br>Finalmente, la Agencia estima que no es necesaria una modificación de los Documentos Tipo, pues la norma no impacta en el régimen de los procedimientos de selección adelantados bajo la Ley 2022 de 2022 y 2195 de 2021. Dicho deber no influye en los requisitos habilitantes, los factores de evaluación o en los trámites estandarizados para las modalidades de selección que se priorizaron en materia de infraestructura de transporte, agua potable y saneamiento básico, gestión catastral, infraestructura social o convenios solidarios para la ejecución de obras hasta la menor cuantía con organismos de acción comunal. Por tanto, considerando que “El uso de los Documentos Tipo no exime a la entidad estatal de la obligación que le asiste de aplicar la normativa […] al proceso de contratación […]”, la Agencia estima que no es necesario expedir una resolución modificatoria para incorporar el mandato establecido en la Ley de Plan Nacional de Desarrollo 2022-2026. Esto teniendo en cuenta que el artículo 80 de la Ley 2294 de 2023 regula condiciones de ejecución del negocio jurídico, el cual puede desarrollarse en la respectiva minuta del contrato, pues permite incluir condiciones adicionales que no sean contrarias al contenido mínimo del documento y que obedezcan a las necesidades de la entidad contratante.<br>En resumen, la contratación de mano de obra local incorpora un aspecto novedoso al sistema de compras públicas, por lo que el concepto reseñado es un punto de partida importante para comprender su alcance.',
            imagen: 'blog__9.jpg'
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