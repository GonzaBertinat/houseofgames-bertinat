# House of Games
---
## Descripción del Proyecto:

Proyecto realizado con propósitos académicos, para el curso *React Js* dictado por *CoderHouse* en el año 2022.

Consiste en una plataforma e-commerce desarrollada en JavaScript haciendo uso de la biblioteca *React*.

La idea elegida para este proyecto es un emprendimiento ficticio, dedicado a la venta de consolas, videojuegos y todo tipo de artículos *gamer*. 
Su nombre de fantasía es ***House of Games***, haciendo un paralelismo con la reconocida serie de televisión *House of Cards*.

La plataforma cuenta con las siguientes funcionalidades:
* Visualizar un catálogo con todos los productos ofrecidos por la cadena House of Games.
* Acceder a distintas categorías de productos, mostrando sólo los correspondientes a la categoría elegida por el usuario. La tienda cuenta con tres categorías: *Consolas*, *Videojuegos* y *Accesorios Gamer*.
* Acceder a una página con el detalle de cada uno de los productos para visualizar más información del mismo.
* Agregar productos a un carrito de compras.
* Visualizar los productos que forman parte del carrito.
* Eliminar productos del carrito.
* Realizar una compra completando un formulario.

---
## Instalación de entorno

Para poder trabajar con el proyecto y ejecutarlo de forma local, se deben realizar los siguientes pasos:

#### 1. Descargar el proyecto

En esta misma página ir hacia la parte superior y presionar el botón verde con la leyenda 'Code':

![Descarga - Paso 1](/src/assets/img/readme/step1.jpeg)


A continuación en 'Download ZIP':

<img src="/src/assets/img/readme/step2.jpeg" style="width: 330px;"></img>

Una vez descargado, descomprimir el archivo zip e importar la carpeta generada dentro de nuestro IDE de preferencia para poder acceder al código fuente.

#### 2. Instalar dependencias

Abrir una terminal y posicionarse dentro del directorio generado en el paso anterior.

Para poder ejecutar el proyecto se deben instalar las dependencias necesarias. Para este propósito se debe ejecutar el comando:

`npm install`

#### 3. Asignar variables de entorno

Solicitar al administrador de este repositorio el fichero `.env` que contiene las variables de entorno necesarias para poder ejecutar el proyecto en un servidor local y conectarse correctamente a Firebase. 

Una vez obtenido, copiar el archivo dentro del directorio raíz del repositorio.

#### 4. Ejecutar el proyecto

Por último, para iniciar el proyecto en un servidor local se debe ejecutar el comando:

`npm start`

---
## Demos:

### Navegar por la app

![Navegar por la app](/src/assets/img/readme/demo1.gif "Navegar por la app")

### Realizar una compra

![Realizar una compra](/src/assets/img/readme/demo2.gif "Realizar una compra")

---
## Datos del alumno:

**Nombre:** Gonzalo Bertinat

**Curso:** React Js

**Profesor:** Diego Medina

**Comisión:** 31150

**Año:** 2022

---
## Decisiones de diseño

De acuerdo a los lineamientos y buenas prácticas presentadas a lo largo de la cursada, se tomaron las siguientes decisiones en el diseño y desarrollo del proyecto:

* Los archivos dentro de la carpeta src fueron organizados en subdirectorios para mantener una estructura de proyecto ordenada y fácil de escalar y mantener:
    * assets: directorio que contiene archivos estáticos del proyecto como imágenes y videos.
    * components: directorio que contiene todos los componentes React utilizados en el proyecto.
    * pages: directorio que contiene componentes React que representan vistas principales dentro del sitio y son utilizados por React Router.
    * services: directorio que contiene la invocación a servicios externos a la app. Para este proyecto se incluye un subdirectorio 'firebase' con la configuración, inicialización y operaciones realizadas en Firebase.
    * store: directorio que contiene el contexto global de la aplicación.
* Los estilos visualizados en el sitio son 100% desarrollados en hojas de estilo CSS propias y no se han utilizado librerías o frameworks externos para este propósito.    
* Las dependencias incluidas en el proyecto e incorporadas vía NPM son exclusivamente las trabajadas en clase (react, react-dom y react-router-dom).
* Los componentes React desarrollados son todos *componentes funcionales*, que son el estándar de la industria en la actualidad para los nuevos proyectos.
* Para cada componente se creó un directorio propio, indicando su definición y lógica asociada en un archivo .JSX y su apariencia en una hoja de estilos .CSS personalizada.
* Siguiendo las convenciones de React, se utilizaron PascalCase para los nombres de componentes, y camelCase para eventos.
* La lista de productos utilizada en el proyecto se obtiene a través de una colección en Firestore.
* Se implementó un loader con forma de spinner, a través del componente *SpinnerLoader*, para los tiempos de carga.
* Las rutas navegables del sitio se implementaron mediante la librería *React Router*.
* Se implementó un Route dedicado a contemplar URLs que representan recursos inexistentes en el sitio, visualizando un mensaje de error y la posibilidad de regresar al home a través del componente *NotFound*.