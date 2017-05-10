<!-- Para las validaciones del cross site scripting  -->

<?php

// En este ejemplo tenemos estas variables que vendrian de algun formulario
$nombre = $correo = $genero = $comentario = "";


//Si el metodo es POST (La mayoria de los formularios deberian ser post)
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  $nombre = validacion_de_datos($_POST["nombre"]); //
  $correo = validacion_de_datos($_POST["correo"]);
  $genero = validacion_de_datos($_POST["genero"]);
  $comentario = validacion_de_datos($_POST["comentario"]);

  /*
  	Una vez validada todas las entradas del usuario, puedo guardar en la base de dato 
  	o desplegar las variables por pantalla.
  */
}

//En caso que la peticion sea GET
if ($_SERVER["REQUEST_METHOD"] == "GET") { 
  $nombre = validacion_de_datos($_GET["nombre"]); //
  $correo = validacion_de_datos($_GET["correo"]);
  $genero = validacion_de_datos($_GET["genero"]);
  $comentario = validacion_de_datos($_GET["comentario"]);

  /*
  	Una vez validada todas las entradas del usuario, puedo guardar en la base de dato  
  	o desplegar las variables por pantalla.
  */
}


//Funcion que valida los datos para evitar el XSS
function validacion_de_datos($input) {
  $input = trim($input); //Quitamos espacios
  $input = stripslashes($input); // Quitamos backslashes
  $input = strip_tags($input); // Quitamos cualquier tag HTML
  $input = htmlspecialchars($input); //Quitamos caracteres especiales
  return $input;
}
?>