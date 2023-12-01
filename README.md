

# Water Jug Challenge API

Este proyecto fue desarrollado utilizando Express como framework de Node.js. Se ha instalado el middleware CORS para permitir el acceso a la API desde repositorios de terceros.

## Instalación

Para ejecutar el proyecto, asegúrate de tener Node.js instalado y sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jeremyagnz/WaterJugChallenge)https://github.com/jeremyagnz/WaterJugChallenge

2. Instala las dependencias:
    `npm install`

3. Inicia el servidor:
   `npm run start`



## Tipos de solicitud

POST /api/challenge
Este endpoint permite realizar el Water Jug Challenge. Se deben proporcionar los siguientes parámetros en formato JSON:

`curl --location 'http://localhost:8000/api/challenge' \
--header 'Content-Type: application/json' \
--data '{
    "x": 2,
    "y": 10,
    "z": 4
}'`


## WaterJugController
El WaterJugController valida que se proporcionen los parámetros requeridos para ejecutar la acción correctamente. 
En caso de error, emite un error a través de la acción InvalidKeysActions y devuelve el mensaje de error correspondiente.




