document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        
        {
            titulo: 'Desafiando la normativa: las batallas cotidianas de las Asociaciones bajo la Ley 2294 de 2023 (Sara Núñez (20/12/2024))',
            contenido: 'La Ley 2294 de 2023 crea tres tipos de asociaciones para impulsar la contratación de los actores populares: <b>i) asociaciones público-populares</b>, <b>ii) asociaciones de iniciativa público popular</b> y, <b>iii) proyectos de asociaciones público -- privadas</b>. En este texto se expondrán las principales características de cada una y los desafíos que enfrentan.<br><br><b>i) Participación en contratación y compras públicas mediante Asociaciones Público-Populares</b><br><br>El artículo 100 de la Ley 2294 de 2023 permite a las Entidades Estatales celebrar directamente contratos hasta por la mínima cuantía con personas naturales o entidades sin ánimo de lucro de la economía popular y comunitaria. Estos contratos se denominan Asociaciones Público Populares y se podrán realizar para ejecutar obras o adquirir bienes y servicios relacionados con infraestructura social, vías terciarias, cultura, eficiencia energética, suministro de bienes y servicios, entre otros(1).<br>El primer reto del Gobierno es definir quiénes hacen parte de la economía popular y comunitaria, estableciendo criterios claros y objetivos para identificar a los sujetos con quienes es posible celebrar estos contratos. Al definir concretamente los sujetos que hacen parte de la economía popular y comunitaria, se mejorará la labor de los órganos de control para verificar y vigilar que se use en debida forma esta asociación en la continua celebración de contratos. En otras palabras, esto facilitará la labor de control y vigilancia sobre el uso adecuado de esta asociación.<br>El segundo desafío es determinar las condiciones mínimas de experiencia, capacidad financiera y organizacional que deberían cumplir las personas naturales o entidades sin ánimo de lucro de la economía popular y comunitaria para ejecutar estos proyectos de manera óptima. Para lo cual, resulta primordial recordar que el artículo 3 de la Ley 80 de 1993 señala que la finalidad de la contratación es garantizar el cumplimiento de los fines estatales, la continua y eficiente prestación de los servicios públicos y la efectividad de los derechos e intereses de los administrados. Por tanto, debería plantearse el tiempo mínimo y máximo de experiencia que debería solicitarles a estos procesos de contratación, al igual que los índices de atributos claves para la correcta medición y comparación.<br>Por último, en situaciones de emergencia se habilita la compra directa de productos agropecuarios de pequeños productores afectados para donarlos al Fondo Nacional de Gestión del Riesgo de Desastres(2). Es clave que el Gobierno defina qué situaciones se consideran emergencia o desastre, para realizar un adecuado seguimiento.<br><br><b>ii) Asociaciones de iniciativa público - popular</b><br><br>El artículo 101 de la Ley 2264 de 2023 define estas asociaciones como una modalidad de vinculación entre entidades públicas y los diferentes instrumentos asociativos de origen comunitario, tales como, las unidades de economía popular, organismos de acción comunal, social o comunitaria  u otras formas de organización social, grupos y/o comunidades étnicas, negras, afrocolombianas, raizales y palenqueras, mujeres y víctimas, para el desarrollo de proyectos de infraestructura vial, educativa, medio ambiente, agrícola, pesca y pecuaria y de servicios públicos(3). Simultáneamente, los organismos comunitarios deberán financiar parcial o totalmente los proyectos mediante aportes en dinero o en especie.<br>La mencionada normativa define los requisitos que las Entidades deberán cumplir para la celebración de estos contratos:<br>1. Se podrá desarrollar el diseño, construcción, renovación, reparación, mejoramiento, equipamiento, gestión, operación y mantenimiento de proyectos de infraestructura y demás actividades técnicas necesarias para el cumplimiento del contrato en el respectivo territorio de la respectiva comunidad.<br>2. El valor de las inversiones no podrá ser superior a seis mil salarios mínimos legales mensuales vigentes (6.000 smmlv)<br>3. El aporte que realice la entidad pública no podrá ser superior al cincuenta por ciento (50%) del valor de la inversión.<br>4.	La selección del adjudicatario deberá realizarse mediante la modalidad de selección abreviada.<br>5. El interesado deberá cumplir con la capacidad, experiencia e idoneidad de la que trata la normativa vigente y acreditar los requisitos para la celebración.<br>6. La asunción de compromisos presupuestales por parte de las entidades públicas se regirá por las normas presupuestales aplicables.<br>7. El contrato mediante se realiza la asociación deberá identificar los riesgos que asumirá cada una de las partes.<br>8. Los órganos de control ejercerán todas las facultades legales sobre los recursos que destinen las entidades públicas.<br>El primer desafío en la reglamentación es definir cómo serán procedentes los aportes en especie, lo que evitaría endeudamientos y mejoraría la eficiencia. Además, se deberían plantear beneficios cuando los aportes sean en dinero proveniente de préstamos bancarios.<br>El segundo reto es cumplir el plazo de 6 meses para adoptar la reglamentación requerida, que venció el 19 de noviembre de 2023, por lo que es urgente que el Gobierno la expida para dar claridad a las Entidades Estatales sobre estas y se entienda la forma cómo deben crearse estas asociaciones(4).',
            imagen: 'blog__4.jpg'
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
