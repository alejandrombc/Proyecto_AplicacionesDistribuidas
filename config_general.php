<?php
	// DEFINICION DE VARIABLES GLOBALES
	function readG(){
		$string = file_get_contents("http://localhost:8080/config_general.json");
		$json_a = json_decode($string, true);
		return $json_a;
	}

	define("MENU_SUPERIOR",  true);
	define("MENU_DERECHO",  true);

	// DEFINICION DEL TITULO DE LA PAGINA
	define("TITULO_DE_LA_PAGINA",  "PROYECTO DAD - 2-2016");

	include('config_colores.php');

	include('config_tamanos.php');

	include('config_bd.php');

?>
