# Taller Tic 
# Documentación del Proyecto

## Conceptos de API y Servidor
Durante el desarrollo, es fundamental entender las respuestas del servidor:

### 1. ¿Qué significa "Status 201 Created"?
Es un código de éxito que indica que la solicitud fue completada y resultó en la **creación de un nuevo recurso**.
* **Uso común:** Aparece tras enviar un formulario exitoso o registrar un nuevo dato en la base de datos.

### 2. Verificación de Datos (Terminal)
Para comprobar que los datos se actualizaron correctamente sin usar la interfaz gráfica:
* **Comando cURL:** `curl -X GET http://localhost:[puerto]/api/recurso`
* **Consulta SQL:** `SELECT * FROM nombre_tabla ORDER BY id DESC LIMIT 1;`

### 3. Códigos de Estado HTTP Comunes
| Código | Nombre | Significado |
| :--- | :--- | :--- |
| **200** | OK | La consulta fue exitosa. |
| **201** | Created | Se creó un nuevo registro. |
| **400** | Bad Request | Error en los datos enviados por el cliente. |
| **401** | Unauthorized | Falta autenticación o permisos. |
| **404** | Not Found | El recurso no existe. |
| **500** | Internal Error | El servidor falló al procesar la petición. |