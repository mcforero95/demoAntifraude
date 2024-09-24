# Proyecto de Validación de Fraudes

Este proyecto es una aplicación de validación de fraudes que utiliza Amazon Connect, Amazon Lex y Amazon Comprehend para realizar llamadas, hacer preguntas de seguridad y validar respuestas utilizando inteligencia artificial.

## Requisitos

- Node.js
- AWS SDK v3
- Una cuenta de AWS con acceso a Amazon Connect, Amazon Lex y Amazon Comprehend

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```plaintext
    AWS_ACCESS_KEY_ID=your_access_key_id
    AWS_SECRET_ACCESS_KEY=your_secret_access_key
    CONTACT_FLOW_ID=your_contact_flow_id
    SOURCE_PHONE_NUMBER=your_source_phone_number
    INSTANCE_ID=your_instance_id
    ```

## Uso

1. Inicia el servidor:

    ```sh
    node index.js
    ```

2. Envía una solicitud de prueba utilizando `curl`:

    ```sh
    curl -X POST http://localhost:3000/validate-transaction \
         -H "Content-Type: application/json" \
         -d '{"userId": "user1"}'
    ```

## Estructura del Proyecto

- `index.js`: Archivo principal que inicia el servidor.
- `controllers/fraudController.js`: Controlador que maneja las solicitudes de validación de fraudes.
- `services/connectService.js`: Servicio que interactúa con Amazon Connect.
- `services/lexService.js`: Servicio que interactúa con Amazon Lex.
- `services/validateResponse.js`: Servicio que valida las respuestas utilizando Amazon Comprehend.
- `utils/questionBank.js`: Banco de preguntas de seguridad.
- `data/mockTransactions.js`: Datos simulados de transacciones.
- `config/awsConfig.js`: Configuración del SDK de AWS.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.