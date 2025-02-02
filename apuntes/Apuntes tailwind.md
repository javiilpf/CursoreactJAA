# **APUNTES TAILWIND** #
## **Guía de comandos para usar taiwind css, de forma básica** ##

---

### Instalación de tailwind en un proyecto ###
Para instalar tailwind en un proyecto de node y javascript es necesario seguir los siguientes pasos:
1. Entrar a [esta](https://tailwindcss.com/docs/guides/vite) página, es la oficial de tailwindcss y en el enlace lleva directamente a los proyectos que se crean con vite.
2. En caso de no tener un proyecto de node todavía creado introducimos el siguiente comando:

   ``` 
   npm create vite@latest my-project -- --template react 
   cd my-project
3. Introducimos el comando para proceder a la instalación de tailwind:
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
4. Nos dirigimos al archivo *tailwind.config.js* e introducimos cuatro líneas **(content:[...])**:
```
/** @type {impor('tailwindcss').Config} */export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
        plugins: [],
    }
```
5. Borramos todo el contenido del archivo *'./src/index.css'* y añadimos las directivas de tailwind:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. Comenzar a usar los comandos de tailwind con toda libertad por el proyecto.

---

### Color del fondo: ###
- Se introduce bg + nombre_color + intensidad_color.

**Ejemplo:**

``` <div class="bg-green-200"> ```

---

### Color del texto: ###
- Se introduce text + nombre_color + intensidad_color

**Ejemplo:**

``` <div class="text-green-200"> ```

---

### Para poner padding: ###
- Para poner padding simplemente tenemos que introducir una p + número que indica la separación

|   Número de separación    |   Separacion en rem (1 rem = 16 píxeles)  |
|---------------------------|-------------------------------------------|
|          p-1              |                0.25 rem                   |
|          p-2              |                 0.5 rem                   |
|          p-4              |                   1 rem                   |
|          p-6              |                 1.5 rem                   |


---

### Márgenes ###
A continuación se exponen los diferentes tipos de márgen aplicados en tailwind:
- Margen General: Consigue un margen en todos los lados
  Con un único m conseguimos tener márgenes a todos los lados

  ```
  <div class="m-4">Contenido con margen de 1rem (16px) en todos lados</div>
- Márgenes Específicos
  En ellos indicamos donde queremos que se haga efectivo el margen que establecemos

  ```
  <div class="mt-4">(Margin top)Margen superior de 1rem (16px)</div>
  <div class="mr-4">(Margin rigth)Margen derecho de 1rem (16px)</div>
  <div class="mb-4">(Margin button)Margen inferior de 1rem (16px)</div>
  <div class="ml-4">(Margin left)Margen izquierdo de 1rem (16px)</div>
- Márgenes horizontales y verticales
  Permiten establecer el mismo margen tanto a derecha e izquierda como arriba y abajo, de la siguiente forma:

  ```
  <div class="mx-4">Margen horizontal de 1rem (16px)</div>
  <div class="my-4">Margen vertical de 1rem (16px)</div
---
### Tamaños en tailwind ###
A continuación se muestra una tabla en la que se pueden observar todos los tamaños que tiene disponibles tailwind css:

|      Tamaño        |    Descripción del tamaño    |
|--------------------|------------------------------|
|       none         |      Sin nada de tamaño      |
|        sm          |        Tamaño ligero         |
|        md          |        Tamaño mediano        |
|        lg          |        Tamaño grande         |
|        xl          |      Tamaño extragrande      |
|        2xl         |      Todavía más grande      |
|        3xl         |         Súper grande         |
|        full        |        Todo el tamaño        |

---
### Bordes redondeados a elementos ###
Para aplicar bordes redondeados a elementos con tailwind lo hacemos mediante el comando rounded, dentro de este comando existen diferentes variantes que son las siguientes:

**Ejemplo:**

 ```
 rounded-none
 rounded-xl
```

---

### Sombreado ###
La clase shadow permite aplicar sombra a los elementos, esto ayuda a darles un efecto de profundidad y elevarlos visualmente sobre el fondo, su utilización es la misma que la de los bordes redondeados shadow-md, etc...


