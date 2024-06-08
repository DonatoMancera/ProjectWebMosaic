# WebMosaic

## Descripción

WebMosaic es una aplicación web moderna que utiliza una variedad de librerías y frameworks para proporcionar una experiencia de usuario interactiva y dinámica. Este documento describe las dependencias del proyecto y su propósito.

## Dependencias

### @emailjs/browser

**Versión:** ^4.3.3

**Descripción:** EmailJS permite enviar correos electrónicos directamente desde el navegador utilizando servicios de correo populares como Gmail, Outlook, etc.

**Uso:** Se utiliza para enviar correos electrónicos desde la aplicación web sin necesidad de un backend dedicado.

### @fortawesome/free-brands-svg-icons

**Versión:** ^6.5.2

**Descripción:** Colección de iconos de marcas populares en formato SVG de Font Awesome.

**Uso:** Se utiliza para añadir iconos de marcas (como logotipos de redes sociales) a la interfaz de usuario.

### @fortawesome/free-solid-svg-icons

**Versión:** ^6.5.2

**Descripción:** Colección de iconos sólidos en formato SVG de Font Awesome.

**Uso:** Se utiliza para añadir iconos sólidos a la interfaz de usuario.

### @fortawesome/react-fontawesome

**Versión:** ^0.2.0

**Descripción:** Librería que permite utilizar los iconos de Font Awesome en proyectos de React.

**Uso:** Facilita la integración de los iconos de Font Awesome en componentes de React.

### @testing-library/jest-dom

**Versión:** ^5.17.0

**Descripción:** Extensiones para Jest que proporcionan matchers personalizados para probar el estado del DOM.

**Uso:** Se utiliza para realizar pruebas en la interfaz de usuario de manera más intuitiva.

### @testing-library/react

**Versión:** ^13.4.0

**Descripción:** Herramientas para probar componentes de React.

**Uso:** Permite realizar pruebas unitarias en componentes de React.

### @testing-library/user-event

**Versión:** ^13.5.0

**Descripción:** Simula eventos de usuario para pruebas con Testing Library.

**Uso:** Se utiliza para simular interacciones del usuario en pruebas unitarias.

### animate.css

**Versión:** ^4.1.1

**Descripción:** Biblioteca de animaciones CSS listas para usar.

**Uso:** Añade animaciones CSS a la interfaz de usuario para mejorar la experiencia visual.

### aos

**Versión:** ^2.3.4

**Descripción:** Biblioteca de animaciones CSS para efectos de scroll.

**Uso:** Se utiliza para aplicar animaciones a elementos en la página cuando el usuario hace scroll.

### bootstrap

**Versión:** ^5.3.3

**Descripción:** Framework CSS popular para el desarrollo de interfaces responsivas y modernas.

**Uso:** Proporciona estilos y componentes prediseñados para construir una interfaz de usuario responsiva.

### cors

**Versión:** ^2.8.5

**Descripción:** Middleware para habilitar CORS (Cross-Origin Resource Sharing) en aplicaciones de Express.

**Uso:** Se utiliza en el backend para permitir solicitudes de recursos desde diferentes dominios.

### express

**Versión:** ^4.19.2

**Descripción:** Framework minimalista para aplicaciones web en Node.js.

**Uso:** Proporciona la infraestructura para construir el backend de la aplicación.

### font-awesome

**Versión:** ^4.7.0

**Descripción:** Conjunto de iconos vectoriales y logotipos sociales.

**Uso:** Se utiliza para añadir iconos a la interfaz de usuario.

### gsap-trial

**Versión:** ^3.12.5

**Descripción:** Librería de animaciones en JavaScript.

**Uso:** Se utiliza para crear animaciones avanzadas en la interfaz de usuario.

### hamburger-react

**Versión:** ^2.5.1

**Descripción:** Componente React para menús hamburguesa.

**Uso:** Se utiliza para añadir un menú hamburguesa interactivo a la interfaz de usuario.

### loaders.css

**Versión:** ^0.1.2

**Descripción:** Conjunto de animaciones CSS para mostrar loaders.

**Uso:** Se utiliza para mostrar animaciones de carga en la interfaz de usuario.

### nodemailer

**Versión:** ^6.9.13

**Descripción:** Módulo para enviar correos electrónicos desde Node.js.

**Uso:** Se utiliza en el backend para enviar correos electrónicos.

### react

**Versión:** ^18.3.1

**Descripción:** Biblioteca para construir interfaces de usuario.

**Uso:** Es el núcleo de la aplicación, utilizado para construir componentes de interfaz de usuario.

### react-bootstrap

**Versión:** ^2.9.0-beta.1

**Descripción:** Componentes de Bootstrap construidos con React.

**Uso:** Facilita la integración de Bootstrap con React.

### react-dom

**Versión:** ^18.3.1

**Descripción:** Proporciona métodos específicos del DOM que pueden ser utilizados en la parte superior de la biblioteca React.

**Uso:** Se utiliza para manejar el DOM en aplicaciones React.

### react-icons

**Versión:** ^5.2.0

**Descripción:** Incluye iconos populares como Font Awesome, Ionicons, Material Design Icons, entre otros.

**Uso:** Facilita la inclusión de iconos en componentes de React.

### react-leaflet

**Versión:** ^4.2.1

**Descripción:** Componentes de React para Leaflet, una biblioteca de mapas interactivos.

**Uso:** Se utiliza para integrar mapas interactivos en la aplicación.

### react-loaders

**Versión:** ^3.0.1

**Descripción:** Componentes de React para Loaders.css.

**Uso:** Facilita el uso de animaciones de carga en proyectos React.

### react-router-dom

**Versión:** ^5.3.4

**Descripción:** Enrutador para aplicaciones React.

**Uso:** Se utiliza para manejar la navegación entre diferentes páginas o vistas de la aplicación.

### react-scripts

**Versión:** 5.0.1

**Descripción:** Conjunto de scripts y configuraciones utilizadas por Create React App.

**Uso:** Proporciona comandos para ejecutar y construir la aplicación.

### styled-components

**Versión:** ^6.1.11

**Descripción:** Librería para aplicar estilos a componentes en React.

**Uso:** Permite escribir estilos CSS directamente en los componentes de React.

### web-vitals

**Versión:** ^2.1.4

**Descripción:** Herramientas para medir la calidad de la experiencia de usuario en la web.

**Uso:** Se utiliza para recolectar métricas esenciales de rendimiento en la web.

## COMPONENTES PRINCIPALES

### `App.js`

El archivo `App.js` es el punto de entrada principal de la aplicación React. Aquí se configuran las rutas de la aplicación y se integran los componentes principales como la barra de navegación, el pie de página y las diferentes vistas.

#### Componentes

 #### Home.jsx
Componente que representa la página de inicio de la aplicación. Se muestra cuando el usuario navega a la ruta /.
 #### AboutUs.jsx
Componente que representa la página "Acerca de Nosotros". Se muestra cuando el usuario navega a la ruta /aboutus.

 #### NavBar.jsx
Componente de la barra de navegación que permite al usuario navegar entre las diferentes secciones de la aplicación.

 #### Footer.jsx
Componente del pie de página que proporciona información adicional o enlaces en la parte inferior de la página.

 #### ContactUs.jsx
Componente que representa la página de "Contáctanos". Se muestra cuando el usuario navega a la ruta /contactus.

### `Home`

 #### FirstSection
    useEffect: Utilizado para inicializar las animaciones de AOS una vez que el componente se ha montado.
    .homeContainer: Clase CSS que define el estilo del contenedor del título principal, incluyendo el tamaño, color y espaciado del texto.
    .buttonContainer: Clase CSS que define el estilo del contenedor de los botones de llamada a la acción, incluyendo la disposición y el espaciado de los botones.
    <svg>: Elemento SVG que representa una imagen de fondo para la sección. Este SVG se posiciona absolutamente para crear un efecto visual atractivo.
 #### SecondSection
    El componente SecondSection.jsx utiliza un efecto de máquina de escribir para animar el mensaje y mostrar palabras clave que se alternan automáticamente. Además, presenta un diseño visual atractivo con imágenes posicionadas estratégicamente.

    Animación de texto dinámico: Utiliza un efecto de máquina de escribir para mostrar un mensaje que se dirige a diferentes audiencias.
    Imágenes posicionadas: Muestra imágenes de fondo vertical y horizontal que complementan el diseño visual de la sección.
    Diseño responsive: Se adapta a diferentes tamaños de pantalla para garantizar una experiencia de usuario consistente en dispositivos móviles y de escritorio.
    Este componente utiliza la librería styled-components para definir los estilos CSS directamente en el código de React, lo que facilita la creación de componentes con estilos personalizados y responsive.
 #### thirdSection
    El componente ThirdSection.jsx es responsable de mostrar una sección que presenta información sobre los servicios ofrecidos por la empresa, junto con una serie de tarjetas deslizantes que muestran ejemplos de dichos servicios.

    Características Principales
    Información sobre Servicios: Se muestra un mensaje introductorio que invita al usuario a descubrir más sobre los servicios ofrecidos por la empresa.

    Tarjetas Deslizantes: Utiliza un componente de carrusel (Carousel) para mostrar una serie de tarjetas que representan ejemplos de los servicios ofrecidos. Cada tarjeta incluye un título y una breve introducción.

    Diseño Responsive: El diseño se adapta de manera óptima a diferentes dispositivos y tamaños de pantalla, garantizando una presentación visualmente atractiva en dispositivos móviles y de escritorio.


### `AboutUs`

 El componente AboutUs es una función de React que devuelve la estructura de la página "Acerca de Nosotros". Esta página está compuesta por dos secciones:

 #### <FirstSectionAboutUs/>: La primera sección que contiene información relevante sobre la empresa.

        useEffect: Utilizado para inicializar las animaciones de AOS una vez que el componente se ha montado.
        useState: Utilizado para gestionar el estado de cont.
        data: Array de objetos que contiene la información de los servicios ofrecidos por la empresa.
        <InicioContainer>: Contenedor principal que organiza la estructura de la sección.
        .Container: Clase CSS que define el estilo de cada elemento de servicio, incluyendo el título, la descripción y el ícono.
        Media Queries: Se aplican estilos diferentes según el tamaño de la pantalla para asegurar la visualización adecuada en dispositivos de diferentes tamaños.

 #### <Services/>: La sección donde aparecen los integrantes.

        useEffect: Utilizado para inicializar las animaciones de AOS una vez que el componente se ha montado.
        useState: Utilizado para gestionar el estado de cont.
        data: Array de objetos que contiene la información de los servicios ofrecidos por la empresa, incluyendo el nombre, la descripción y la imagen.
        handleSelect: Función que actualiza el estado cont cuando se selecciona un ítem en el carrusel.
        .InicioContainer: Clase CSS que define el estilo del contenedor principal de cada servicio, incluyendo la disposición de los elementos y los estilos responsivos para diferentes tamaños de pantalla.
        .textContainer: Clase CSS que define el estilo del contenedor de texto que muestra el nombre, la descripción y los iconos de cada servicio.
        .Carrusel: Clase CSS que define el estilo del carrusel de imágenes, incluyendo la disposición y el tamaño de las imágenes y los estilos responsivos para diferentes tamaños de pantalla.
        Esta estructura permite mostrar de manera organizada y coherente la información sobre la empresa y sus servicios en la página "Acerca de Nosotros".
