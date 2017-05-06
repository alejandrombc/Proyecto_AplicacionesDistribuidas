<?php
	// DEFINICION DE VARIABLES GLOBALES DE COLORES
	
	define("BASE_DE_DATOS", "MYSQL"); //Cual base de datos se usara (MYSQL, MONGO, ORACLE)

	define("HOST", "localhost"); //Definicion del host para la conexion de la base de datos

	define("USUARIO", "root"); //Definicion del usuario para la conexion de la base de datos

	define("CLAVE", "1234"); //Definicion de clave para la conexion de la base de datos

	include('conexion_BD.php'); //Crear la conexion con la base de datos

?>