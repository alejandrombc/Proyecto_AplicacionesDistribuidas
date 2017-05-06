<?php
	function CrearConexion() {
		if(BASE_DE_DATOS == "MYSQL"){

			// Crear la conexion a la Base de datos MYSQL
			$conn = new mysqli(HOST, USUARIO, CLAVE);

			// Revisar la conexion
			if ($conn->connect_error) {
			    die("Conexion fallida: " . $conn->connect_error);
			} 
			// echo "Conectado Exitosamente"; //Puede descomentar esta linea para verificar que la conexion se hizo satifactoriamente

			//Para cerrar la conexion puede usar "$conn->close();"
			return $conn;

		}elseif (BASE_DE_DATOS == "MONGO"){
			$conn = new MongoClient();

			return $conn;
		}

	}

	function CerrarConexion($conn) {
		if(BASE_DE_DATOS == "MYSQL"){
			$conn->close();
		}elseif (BASE_DE_DATOS == "MONGO"){
			//Cerrar la conexion en Mongo
		}
	}

	function UsarBaseDeDatos($conn, $BD){

		if(BASE_DE_DATOS == "MYSQL"){
			if ($conn->query("USE DATABASE "+$BD) === TRUE) {
			    echo "Cambio de base de datos exitoso"; //Este print lo puede quitar
			} else {
			    echo "Error al usar la base de datos: " . $conn->error;
			}
		}elseif (BASE_DE_DATOS == "MONGO"){
			$db = $conn->selectDB($BD);
		}
	}

	function CrearBaseDeDatos($conn, $BD){

		if(BASE_DE_DATOS == "MYSQL"){
			if ($conn->query("CREATE DATABASE "+$BD) === TRUE) {
			    echo "Base de datos creada exitosamente"; //Este print lo puede quitar
			} else {
			    echo "Error al crear la base de datos: " . $conn->error;
			}
		}elseif (BASE_DE_DATOS == "MONGO"){
			//Crear coleccion de Mongo
		}
	}

	function EjecutarQuery($conn, $query){

		if(BASE_DE_DATOS == "MYSQL"){
			$stmt = $conn->prepare($query); //Prepara el query para evitar el SQL Injection
			$stmt->bind_param('s', $name); //"s" de que la Base de datos espera un "string"
			if ($stmt->execute() === TRUE) {
			    echo "Query ejecutado exitosamente"; //Este print lo puede quitar
			} else {
			    echo "Error al ejecutar el query: " . $conn->error;
			}
		}elseif (BASE_DE_DATOS == "MONGO"){
			//Usar un query en Mongo
		}
	}

	function Commit($conn){

		if(BASE_DE_DATOS == "MYSQL"){
			if (!$mysqli->commit()) {
				echo "Error al ejecutar la transaccion"; //Este print lo puede quitar
			}
		}elseif (BASE_DE_DATOS == "MONGO"){
			//Realizar commit en mongo
		}
	}

	function RollBack($conn){

		if(BASE_DE_DATOS == "MYSQL"){
			if (!$mysqli->rollback()) {
				echo "Error al hacerle rollback a la transaccion"; //Este print lo puede quitar
			}
		}elseif (BASE_DE_DATOS == "MONGO"){
			//Realizar roll back en mongo
		}
	}

	// $conexion = CrearConexion(); //Descomentar esta linea para crear la conexion

?>