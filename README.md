# todolist
Crud simple react js consumiendo API generada en NodeJs y express
Utilizando las herramientas Xampp, Visual Studio code y la api generada en nodejs express en alojada en el siguiente link 
https://github.com/AdrianVillamar743/SEQUALIZE-NODEJS-MYSQL-API-VILLAMAR

Procederemos a crear nuestro proyecto de react con el siguiente comando

npx create-react-app todolist

donde todolist es el nombre de  nuestro proyecto

1.- Ahora vamos a instalar axios para consultas con el servidor node js express que creamos anteriormente 
npm install axios react-router-dom

2.- Ahora instalaremos bootstrap en nuestro paquete

3.- Dentro del archivo index.js importaremos su estilo y js
npm install bootstrap jquery --save
npm install css-loader style-loader --save-dev
npm install popper.js --save

/*Importamos bootstrap en el archivo index.js*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


4.- En el archivo /public/index.html en la cabecera importaremos lo siguiente

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


5.- Dentro de la carpeta src, crearemos una nueva carpeta llamada categorias donde alojaremos nuestras vistas.

6.- Dentro de ella tendremos los archivos crear.js, editar.js, listadoCategorias.js, código que se encuentra dentro de repositorio.

7.- Y referenciamos todo desde el archivo app.js
