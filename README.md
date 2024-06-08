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
        # Dependencias de WebMosaic

Este proyecto hace uso de las siguientes dependencias:

## React

React es una biblioteca de JavaScript para construir interfaces de usuario. Permite a los desarrolladores crear componentes reutilizables que gestionan su propio estado, lo que resulta en interfaces de usuario más dinámicas y eficientes.

- **Versión utilizada:** {insertar versión aquí}
- **Instalación:**
  ```bash
  npm install react
  ```

## React Icons

React Icons es una librería que proporciona una colección de iconos para usar en aplicaciones React. Esto permite a los desarrolladores integrar fácilmente iconos en sus componentes.

- **Iconos utilizados:** FaHome, FaPhoneVolume, FaMailBulk
- **Instalación:**
  ```bash
  npm install react-icons
  ```

## Aos

Aos es una biblioteca de animación en JavaScript que proporciona animaciones suaves al desplazarse por una página web. Facilita la creación de efectos de desplazamiento atractivos y elegantes.

- **Versión utilizada:** {insertar versión aquí}
- **Instalación:**
  ```bash
  npm install aos
  ```

## Styled Components

Styled Components es una biblioteca para React y React Native que permite escribir estilos CSS en JavaScript. Permite a los desarrolladores crear componentes con estilos encapsulados que son fáciles de mantener y reutilizar.

- **Versión utilizada:** {insertar versión aquí}
- **Instalación:**
  ```bash
  npm install styled-components
  ```


## Componente ContactUs

El componente `ContactUs` es un componente funcional de React que se encarga de inicializar la biblioteca Aos para agregar efectos de animación a la página.

### Uso
Para usar este componente, simplemente incorpóralo en el árbol de componentes de tu aplicación donde sea necesario. Asegúrate de haber importado `ContactUs` en el archivo donde lo necesitas.

Este componente garantiza que Aos se inicialice correctamente al cargarse la página, lo que permite la aplicación de animaciones definidas por Aos en otros elementos de la interfaz de usuario.


## Estado del Formulario

El estado `formData` es un objeto que contiene los datos del formulario, incluyendo el nombre, apellido, correo electrónico, número de teléfono y mensaje. Se utiliza para almacenar la información introducida por el usuario en los campos del formulario.

### Estructura del Objeto `formData`

- **name**: Representa el nombre del usuario.
- **lastName**: Representa el apellido del usuario.
- **email**: Representa la dirección de correo electrónico del usuario.
- **phone**: Representa el número de teléfono del usuario.
- **message**: Representa el mensaje enviado por el usuario.

### Uso de `useState`

La función `useState` se utiliza para inicializar el estado `formData` y la función `setFormData`. `useState` toma el estado inicial del formulario como argumento y devuelve una matriz con el estado actual y una función para actualizar dicho estado.

### Actualización del Estado

La función `setFormData` se utiliza para actualizar el estado del formulario. Toma un nuevo objeto de datos como argumento y actualiza el estado `formData` con esos datos.

---

## Manejo de Cambios en el Formulario

La función `handleChange` se utiliza para manejar los cambios en los campos del formulario. Se encarga de actualizar el estado `formData` con los nuevos valores introducidos por el usuario en los campos del formulario.


### Parámetros

- **e**: El evento del cambio, proporcionado por el navegador.
  - `e.target`: El elemento del DOM que desencadenó el evento.
  - `e.target.name`: El nombre del campo del formulario que está siendo modificado.
  - `e.target.value`: El valor introducido por el usuario en el campo del formulario.

### Actualización del Estado del Formulario

La función `handleChange` utiliza la función `setFormData` para actualizar el estado del formulario (`formData`). Utiliza el operador de propagación (`...`) para copiar los datos existentes del estado `formData` y luego actualiza el valor del campo específico que ha cambiado, utilizando el nombre del campo del formulario como clave dinámica.

### Uso

Esta función debe asociarse a los eventos de cambio (`onChange`) de los campos del formulario para que se ejecute cada vez que el usuario introduzca o modifique datos en el formulario.

Aquí tienes la documentación para la función `handleSubmit`:

---

## Manejo del Envío del Formulario

La función `handleSubmit` se encarga de manejar el envío del formulario. Se ejecuta cuando el usuario envía el formulario y se asegura de enviar los datos del formulario al servidor.

### Parámetros

- **e**: El evento del envío del formulario, proporcionado por el navegador.

### Descripción

- La función `preventDefault()` se utiliza para prevenir el comportamiento predeterminado del navegador de enviar el formulario automáticamente.
- Se realiza una solicitud POST al servidor utilizando la función `fetch()`, enviando los datos del formulario como un objeto JSON en el cuerpo de la solicitud.
- Se verifica la respuesta del servidor y se manejan los casos de éxito y error correspondientes.

### Uso

Esta función debe asociarse al evento de envío del formulario (`onSubmit`) para que se ejecute cuando el usuario envíe el formulario.

Vamos a documentar esta sección:

---

## Sección de Contacto

Esta sección representa la parte del formulario de contacto de la página. Incluye un título y un mensaje de ayuda.

### Estructura

- **`<Contactus>`**: Este componente envuelve la sección de contacto, probablemente definido en otro lugar de la aplicación.

- **`<section className="page__title page__contact">`**: Un contenedor `<section>` que encapsula el contenido de la sección de contacto.

- **`<div className="container p-5">`**: Un contenedor `<div>` con espaciado de padding.

- **Título y Mensaje**:
  - **Título**: Un elemento `<h1>` con el texto "Contact Us".
  - **Mensaje de Ayuda**: Un elemento `<p>` con el mensaje "DO YOU NEED HELP?".

### Animaciones

La propiedad `data-aos="zoom-out-down"` se utiliza para aplicar una animación de zoom hacia abajo al título de la sección cuando se carga la página.

## Sección de Formulario de Contacto

Esta sección del formulario de contacto permite a los usuarios enviar consultas y mensajes al propietario del sitio web.

### Estructura

- **Información de contacto**: La columna de la izquierda muestra la información de contacto, incluyendo dirección, teléfono y correo electrónico.
- **Formulario de contacto**: La columna de la derecha contiene el formulario de contacto que los usuarios pueden completar y enviar.

### Campos del Formulario

El formulario incluye campos para:

- Nombre completo
- Apellido
- Correo electrónico
- Teléfono
- Mensaje

### Envío del Formulario

El botón "SEND NOW" permite a los usuarios enviar el formulario. Cuando se hace clic en el botón, se activa la función `handleSubmit`, que se encarga de enviar los datos del formulario al servidor.


## Estilos para ContactUs

El componente `Contactus` está estilizado utilizando la biblioteca `styled-components`. Proporciona estilos CSS para la sección de contacto en la página.

### Descripción

- **`.page__contact`**: Establece el fondo de la sección de contacto.
- **Estilos para el Título y la Información de Contacto**: Define estilos para el título "Contact Us" y la información de contacto como dirección, teléfono y correo electrónico.
- **Estilos para el Formulario**: Define el ancho y los estilos del formulario de contacto.
- **Estilos para los Campos de Entrada**: Define estilos para los campos de entrada del formulario.
- **Estilos para el Botón**: Define estilos para el botón de envío del formulario.
- **Estilos para los Iconos Comunes**: Define estilos para los iconos utilizados en la sección de contacto.



