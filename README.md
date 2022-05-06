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

Además, se encuentran en desarrollo y se incluirán próximamente a la plataforma las siguientes funcionalidades:
* Agregar productos a un carrito de compras.
* Visualizar los productos que forman parte del carrito.
* Eliminar productos del carrito.
* Realizar una compra completando un formulario.


---
## Demo:

![Navegabilidad por la app](/src/assets/img/demo.gif "Navegabilidad por la app")

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
    * helpers: directorio que contiene código JavaScript con funciones utilitarias que pueden ser invocadas por los componentes.
    * pages: directorio que contiene componentes React que representan vistas principales dentro del sitio y son utilizados por React Router.
* Los estilos visualizados en el sitio son 100% desarrollados en hojas de estilo CSS propias y no se han utilizado hasta el momento librerías o frameworks externos para este propósito.    
* Las dependencias incluidas en el proyecto e incorporadas vía NPM son exclusivamente las trabajadas en clase (react, react-dom y react-router-dom).
* Los componentes React desarrollados son todos *componentes funcionales*, que son el estándar de la industria en la actualidad para los nuevos proyectos.
* Para cada componente se creó un directorio propio, indicando su definición y lógica asociada en un archivo .JSX y su apariencia en una hoja de estilos .CSS personalizada.
* Siguiendo las convenciones de React, se utilizaron PascalCase para los nombres de componentes, y camelCase para eventos.
* Se utilizó el hook useState para administrar el estado de los componentes.
* Se utilizó el hook useEffect para evitar el desmontaje y montaje innecesario de componentes al cambiar de categoría o de item en el sitio.
* La lista de productos utilizada en el proyecto se obtiene mediante un mock asíncrono, haciendo uso de Promise. Dado que esta simulación se usa en dos componentes, este comportamiento fue aislado dentro del directorio *helpers* bajo el nombre de *ProductsAsyncMock*. 
* Se implementó un loader con forma de spinner, a través del componente *SpinnerLoader*, para los tiempos de carga.
* Las rutas navegables del sitio se implementaron mediante la librería *React Router*.
* Los enlaces clickeables presentados en el sitio (navbar y botones) hacen uso del componente *Link* en vez de utilizar el tag de HTML < a >.
* Se implementó un Route dedicado a contemplar URLs que representan recursos inexistentes en el sitio, visualizando un mensaje de error y la posibilidad de regresar al home a través del componente *NotFound*.