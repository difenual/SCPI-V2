document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        
        {
            titulo: 'La participación ciudadana en la contratación pública: un imperativo democrático (Diego Nuñez 15/02/2023)',
            contenido: 'Soy bogotano catalogado como ciudadano de un país al que constantemente se le relaciona con problemas de corrupción estatal. Este es un tema que recurrentemente entorpece y desacelera la lucha más importante de nuestra realidad social; crear un mundo menos desigual, enfocado en los cierres de brechas económicas entre los más ricos para ampliar los márgenes de oportunidades de aquellas poblaciones subordinadas.<br>Por un lado, siento una impotencia recurrente ante la expectativa de un voto que termina alimentando mecanismos de poder históricos y tradicionales y que parece no tener final. Cada año, sin importar el tipo de gobierno de turno, somos testigos de abusos de poder en contra de las poblaciones más vulnerables y realmente duele entender cómo cada uno de estos actos egoístas y clasistas entierran profundamente los sueños y aspiraciones materiales de la fuerza trabajadora de este hermoso país. La corrupción es un cáncer constante y mortífero que corrompe y envenena las iniciativas de cambio y transformación.<br>Por eso, escribiré, usando una bandera de científico social, motivado por la importancia de comprender cómo desde una clase popular, entendida como un ciudadano sin conocimientos técnicos ni especializados en jurisprudencia, trato de relevar la importancia por conocer y comprender cómo al entender un poco más a fondo la contratación estatal, podemos desde nuestro lugar en el mundo combatir un poco esa lucha que nos sigue condicionando. Además, ejerzo mi derecho como parte de una sociedad democrática al proponer soluciones de resistencia para continuar en una lucha que, aunque parezca imposible, merece toda nuestra atención. Nuestro compromiso social con el mundo es una obligación política para ampliar las posibilidades de desarrollo y expresión de todxs los seres.<br>Particularmente, la contratación pública involucra una gran proporción de los presupuestos estatales a nivel global. Por ejemplo, en los países de la OCDE se destinan aproximadamente el 12% del Producto Interno Bruto (PIB) a compras gubernamentales, equivalente a USD $9.5 billones anuales. En Colombia específicamente, las adquisiciones y licitaciones estatales superan los $170 billones de pesos al año. Estas cifras ponen en evidencia que la contratación pública trasciende el ámbito gubernamental y concierne a toda la ciudadanía. Sin verlo más lejos, estas son cifras significativas e influyentes en la creación de una sociedad que busca como una de sus prioridades vitales conseguir mejores condiciones de sostenibilidad.<br>El presente artículo plantea que la participación activa de la sociedad civil en los procesos de contratación estatal es indispensable para fortalecer la democracia y combatir la corrupción. En este sentido, expondré muy concisamente cuatro argumentos principales que sustentan esta premisa: <b>(i) el fundamento normativo que obliga la participación</b>, <b>(ii) su contribución a la rendición de cuentas y la transparencia</b>, <b>(iii) el aumento de eficiencia que conlleva</b>, y <b>(iv) la función de contrapeso frente a intereses particulares.</b><br><br><b>i) Fundamento normativo</b><br><br>La Constitución Política de Colombia establece la participación ciudadana como un derecho y un principio fundamental de la democracia participativa. Además, la Ley 80 de 1993 explícitamente ordena a las entidades estatales facilitar y promover la participación de las veedurías ciudadanas en todas las etapas de los procesos contractuales.<br>Desde el punto de vista de la teoría democrática contemporánea, la posibilidad real de participación de la ciudadanía en los asuntos públicos es una condición necesaria para la consolidación de cualquier sistema democrático, tal como plantea Robert Dahl. En consecuencia, la intervención de la sociedad civil en las licitaciones públicas no es solo un derecho sino un deber cívico.<br><br><b>ii)	Rendición de cuentas y transparencia</b><br><br>Una ciudadanía empoderada, informada y participativa refuerza los mecanismos de rendición de cuentas y control sobre las instituciones estatales. La intervención directa en los procesos contractuales permite ejercer vigilancia, exigir transparencia y denunciar posibles irregularidades o actos de corrupción.<br>La supervisión ciudadana incentiva la rectitud y la responsabilidad en el uso de recursos públicos por parte de las autoridades, tal como lo demuestran estudios donde dicha supervisión ha disminuido malas prácticas en licitaciones. En este sentido, la participación de la sociedad equilibra la influencia de grupos de interés sobre las decisiones estatales.<br><br><b>iii) Mayor eficiencia</b><br><br>Investigaciones de la OCDE señalan que los países con mayor apertura y escrutinio público en sus procesos contractuales tienden a alcanzar mejores resultados en términos de eficiencia del gasto. La presión y el control ejercido por actores externos obliga a las autoridades a realizar contrataciones más objetivas, transparentes y ajustadas al interés colectivo.<br><br><b>iv) Contrapeso a intereses particulares</b><br><br>Históricamente, sectores económicos con gran capacidad de presión han logrado incidir en las decisiones contractuales estatales en función de intereses privados. La participación efectiva de la ciudadanía equilibra estas influencias y presiones al representar, deliberar y defender el bien público en las licitaciones.<br><br><b>Conclusión</b><br><br>La participación ciudadana en las licitaciones públicas es entonces no solo un derecho sino un deber cívico esencial para profundizar la democracia, fortalecer la transparencia y proteger el interés general. Una sociedad civil empoderada y comprometida con la vigilancia del gasto público constituye la mejor garantía contra la corrupción. Estos puntos los iré explorando en mayor profundidad en siguientes publicaciones.',
            imagen: 'blog__3.jpg'
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