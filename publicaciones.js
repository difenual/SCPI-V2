document.addEventListener('DOMContentLoaded', function () {
    // Simula obtener datos de un servidor o base de datos
    var publicaciones = [
        {
            titulo: '¿Sabías que a partir de la expedición del artículo 353 de la Ley 2294 de 2023 es viable contratar directamente la ejecución de obras públicas de actividades de mantenimiento y/o mejoramiento de infraestructura social y de transporte? (01/02/2024 - Sara Nuñez)',
            contenido: 'La Ley 2294 de 2023, “Por el cual se expide el Plan Nacional de Desarrollo 2022-2026 “Colombia Potencia Mundial de Vida”, tiene como propósito incluir nuevos actores en las compras públicas del Estado. Así las cosas, el artículo 353 de la mencionada norma, modificó el literal l) del numeral 4 del artículo 2 de la Ley 1150 de 2007, habilitando la suscripción de contratos o convenios directamente con comunidades indígenas para la ejecución de proyectos relacionados con el Plan Nacional de Desarrollo.<br> Para la suscripción de estos contratos, el literal l) del numeral 4 del artículo 2 de la Ley 1150 de 2007 prevé la acreditación de los siguientes requisitos: i) una de las partes del contrato sea cabildo indígena, autoridad tradicional indígena, consejo indígena u organización indígena, ii) el contrato a celebrar tenga como objeto el fortalecimiento del gobierno propio, la identidad cultural, el ejercicio de la autonomía, la garantía de los derechos, satisfacción de necesidades y/o servicios públicos de las comunidades indígenas. En otras palabras, es fundamental no solo que la Entidad Estatal celebre el contrato con un miembro de la comunidad indígena – en alguna de las condiciones previamente descritas-, sino, además, que el objeto tenga relación con los planes, programas y proyectos del Plan Nacional de Desarrollo.<br> En todo caso, el artículo 353 de la Ley 2294 de 2023 establece que en la ejecución de estos contratos es viable contratar la ejecución de obras públicas, en específico, actividades de mejoramiento y/o mantenimiento de infraestructura social y transporte, siempre que la Entidad verifique la idoneidad para ejecutar el proyecto teniendo como criterio el enfoque diferencial. Situación que, sin duda, demuestra la posibilidad de ejecutar contratos de obra pública por la modalidad de contratación directa.'
        },
        // Aquí puedes agregar más objetos de publicaciones según sea necesario
        {
            titulo: '¿Por qué creo que la Agencia Nacional de Contratación Pública - Colombia Compra Eficiente (ANCP – CCE) no debe descuidar su objeto misional? (06/02/2024 - Sara Nuñez)',
            contenido: 'Antes de presentar las razones por las cuales considero que la ANCP – CCE a lo largo de 2023 demostró un trabajo deficiente en relación con su objeto misional, conviene recordar que el principal propósito de Colombia Compra Eficiente es impulsar políticas públicas y herramientas para los procesos de compra y contratación estatal, con el fin de generar una mayor eficiencia, transparencia y optimización de los recursos del Estado (Colombia Compra Eficiente, 2023).<br>Ahora bien, durante la creación de esta Entidad Estatal se han instaurado distintas herramientas para incentivar la transparencia en las Compras Públicas del Estado, entre las que se destacan:<br><b>i) la implementación de los Documentos Tipo para combatir la corrupción en el país</b>(Ley 2022, 2020).<br><b>ii) la creación de instrumentos de agregación de demanda para producir economías de escala e incrementar el poder de negociación del Estado</b> (Decreto 4170, 2011) y,<br><b>iii) la creación de la plataforma del SECOP como una herramienta para facilitar al ciudadano la presentación de ofertas desde una plataforma transaccional</b> (Decreto 1510, 2013).<br>En los siguientes apartados se analizará el avance en cada una de estas herramientas creadas por la Agencia.<br><b>i) Implementación de los Documentos Tipo.</b><br>Atendiendo el mandato de la Ley 2022 de 2020, los documentos tipo son de obligatorio cumplimiento por parte de las Entidades sometidas al Estatuto General de Contratación de la Administración Pública. Su finalidad consiste en estandarizar los requisitos habilitantes, los factores técnicos, económicos y otros factores de escogencia para combatir la corrupción en el país y el direccionamiento de los contratos a un único oferente.<br>A partir de la expedición de la mencionada norma, la ANCP-CCE ha adoptado quince (15) documentos tipo para cuatro (4) sectores de infraestructura distintos: transporte, agua potable y saneamiento básico, infraestructura social -educativo, salud y cultura, recreación y deporte- y gestión catastral con enfoque multipropósito. Evidentemente, esta herramienta permitió abarcar a los sectores que mayor ejecución de recursos públicos causan al Estado y de esta manera aumentar la participación de los oferentes en los procesos de contratación.<br>Sin embargo, la adopción de nuevos documentos tipo se vio atrasada durante 2023. Si bien en vigencias anteriores (desde 2020, 2021 y 2022) se adoptaron trece (13) documentos tipo, sin dejar de lado las modificaciones transversales a los pliegos, en la última vigencia sólo se expidieron dos (2) documentos tipo nuevos (Colombia Compra Eficiente, 2022). Además, de acuerdo con la información reportada en la página web de Colombia Compra Eficiente, por medio de la plataforma “Tablero de Control de Documentos Tipo”, ya no se realiza el seguimiento mensual de cumplimiento por parte de las entidades sometidas al Estatuto General de Contratación Pública de los documentos tipo (Colombia Compra Eficiente, 2023).<br>Esto demuestra el retraso en la política pública de los documentos tipo, puesto que la ANCP-CCE no realiza un seguimiento del nivel de cumplimiento por parte de las Entidades obligadas a implementar los pliegos tipo. Tampoco se tiene conocimiento por parte del público sobre si efectivamente para los nuevos documentos tipo adoptados se ha evidenciado un aumento en la pluralidad de oferentes o cuáles han sido las principales modificaciones adelantadas a los pliegos tipo, al menos en lo que respecta a 2023.<br>En conclusión, durante 2023 no se consolidó adecuadamente la política pública de documentos tipo como una herramienta para combatir la corrupción. Por el contrario, se demostró que la Agencia dejó de lado el seguimiento a la implementación de documentos tipo y la adopción de nuevos para otros sectores económicos. Esta situación pone de manifiesto la necesidad de la nueva dirección de la Agencia continúe impulsando esta política pública de manera más efectiva, para seguir promoviendo la transparencia y pluralidad de proponentes en distintos sectores  '
        }
    ];

    var listaPublicaciones = document.getElementById('lista-publicaciones');

    // Iterar sobre las publicaciones y crear elementos HTML para cada una
    publicaciones.forEach(function (publicacion, index) {
        var article = document.createElement('article');
        var titulo = document.createElement('h3');
        var contenido = document.createElement('p');
        var shareDiv = document.createElement('div');
        var facebookBtn = document.createElement('a');
        var twitterBtn = document.createElement('a');
        var linkedinBtn = document.createElement('a');
        var compartirTitulo = document.createElement('h4');
        
                
        titulo.textContent = publicacion.titulo;
        contenido.innerHTML = publicacion.contenido;

             
        // Agregar clases y atributos necesarios para los botones de compartir
        
        facebookBtn.href = '#';
        facebookBtn.textContent = 'Compartir en Facebook';
        facebookBtn.classList.add('share-button', 'share-facebook');
        facebookBtn.innerHTML = '<i class="fab fa-facebook-f"></i>';

        twitterBtn.href = '#';
        twitterBtn.textContent = 'Compartir en Twitter';
        twitterBtn.classList.add('share-button', 'share-twitter');
        twitterBtn.innerHTML = '<i class="fa-brands fa-x-twitter"></i>';
        
        linkedinBtn.href = '#';
        linkedinBtn.textContent = 'Compartir en LinkedIn';
        linkedinBtn.classList.add('share-button', 'share-linkedin');
        linkedinBtn.innerHTML = '<i class="fab fa-linkedin-in"></i>';

        // Agregar botones de compartir al contenedor div
        shareDiv.appendChild(facebookBtn);
        shareDiv.appendChild(twitterBtn);
        shareDiv.appendChild(linkedinBtn);

        compartirTitulo.textContent = 'Comparte este artículo en tus redes sociales';

              
        // Agregar contenido y botones al artículo
        article.appendChild(titulo);
        article.appendChild(contenido);
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