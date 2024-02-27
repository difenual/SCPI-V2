document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        
        {
            titulo: 'Entender los fundamentos constitucionales para comprender nuestro deber como veedores en los procesos de contratación pública (Diego Nuñez (27/02/2024)',
            contenido: 'Para entender cómo la participación activa de la sociedad civil en los procesos de contratación estatal es indispensable para fortalecer la democracia y combatir la corrupción, explicaré cuáles son los fundamentos normativos obligantes de esta participación. Además, reflexionaré sobre nuestra posición como ciudadanxs inmersos en maquinarias macro políticas que limitan los esfuerzos por denunciar irregularidades o crear procesos más éticos.<br><br>La Constitución Política de Colombia establece claramente el derecho y el principio fundamental de la participación ciudadana como pilar de la democracia participativa (1). Asimismo, la Ley 80 de 1993 explícitamente ordena a las entidades estatales facilitar y promover la participación de las veedurías ciudadanas en todas las etapas de los procesos contractuales (2). Estos mandatos legales reflejan un consenso contemporáneo en la teoría democrática sobre la importancia de la participación pública para la consolidación de la democracia. Como plantea Robert Dahl, el involucramiento activo de la ciudadanía en los asuntos públicos es una condición necesaria en cualquier sistema democrático (3). Por lo tanto, la intervención de la sociedad civil en las licitaciones públicas no es solo un derecho sino un deber cívico. En sumatoria, tanto los dictámenes establecidos dentro de la Constitución Política de Colombia, como los lineamientos dictados por la ley y nuestro propio interés por integrar una sociedad abiertamente democrática son estímulos suficientes para ser parte de los procesos de contratación con fines de desarrollar económicamente el país.<br><br>Sin embargo, al querer trasladar este ideal cívico a la práctica nos encontramos con obstáculos para estimular una participación efectiva más allá de una mera formalidad. O, en otras palabras, contentarnos con exigir una publicación de la información de las licitaciones en buscadores poco intuitivos, difíciles de usar o después de ser entregados los proyectos en informes densos para asegurar una veeduría popular. Si no se tiene una herramienta más eficiente para denunciar irregularidades con el fin de presionar a los entes de control, no se realizará una participación ciudadana acorde a los fundamentos normativos. Realmente después de ser gastado el dinero es iluso pensar recuperarlo. En ese sentido, idealmente necesitamos ser más precisos en las maneras cómo invertimos el gasto público y tener un detalle mucho más minucioso sobre las operaciones diarias de las entidades.<br><br>Un caso ilustrativo ocurrió en un proceso de licitación en 2022 para un contrato de $17 mil millones de pesos para el mantenimiento de redes eléctricas en Bogotá por parte de CODENSA (4). Si bien la veeduría ciudadana “Fiscalía Cívica” estuvo presente como observadora, denunció múltiples irregularidades que viciaron el proceso, incluyendo falta de planeación, estrechez de tiempos y direccionamientos del contrato (5). Sin embargo, sus esfuerzos no tuvieron un impacto significativo en la ejecución del proyecto, no se evitaron sobrecostos ni se mitigaron los inconvenientes derivados por una ineficiencia detectada desde el inicio de la licitación.<br><br>Lo peor es que este no es un hecho aislado. De acuerdo a “Transparencia por Colombia” se calcula que la corrupción le cuesta al país $17 billones de pesos al año. Dato significativo, puesto que su principal razón deriva de los marcos establecidos de la contratación estatal (6). En esta línea, las veedurías juegan un papel crucial en evidenciar estas problemáticas, pero su capacidad real de incidencia efectiva e institucional sigue siendo muy limitada.<br><br>Así, considero fundamental visibilizar la tarea de estas organizaciones que tienen una finalidad por mejorar el bien común. Pero también invito como ciudadano a no sólo sentirnos cómodos con la disposición de dichas entidades por mantener una presión en las entidades operantes del gasto. Aquí postulo que, al ser parte colectiva de un Estado, debemos ampliar nuestra información sobre los proyectos estipulados por las organizaciones derivadas del Gobierno Nacional; sin importarnos nuestra afinidad con su ideología política.<br><br>Es importante tener conocimiento de las estructuraciones de los proyectos para tener razones objetivas con el fin de evaluar su ejecución. De esta manera, le atribuiremos los méritos a aquellas líneas gobernantes comprometidas con la ejecución de sus políticas y ampliaremos nuestra capacidad crítica. En este sentido no sólo ampliamos nuestro conocimiento de las obras públicas, sino que también estamos mejor informados al decidir políticamente. Además, la mirada vigilante de 50 millones de habitantes tiene un poder innegable.',
            imagen: 'blog__5.jpg'
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