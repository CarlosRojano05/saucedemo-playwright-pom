#  Especificación de Casos de Prueba

**Proyecto:** SauceDemo Shopping Flow
**Herramienta:** Playwright
**Ambiente:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

## TC-01: Compra Exitosa de un Producto (E2E)

**Precondiciones:**
- El usuario debe tener credenciales válidas.
- La aplicación debe estar disponible.

| ID | Paso | Acción | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| 1 | Navegar a la URL de inicio | Se muestra la página de Login correctamente. |
| 2 | Ingresar `standard_user` y password | El usuario ingresa al dashboard de productos. |
| 3 | Clic en "Add to cart" de un producto | El contador del carrito aumenta a '1'. |
| 4 | Clic en el ícono del carrito | Se visualiza el producto seleccionado en la lista. |
| 5 | Clic en "Checkout" | Se muestra el formulario "Checkout: Your Information". |
| 6 | Completar Nombre, Apellido y CP | Los datos se ingresan correctamente. |
| 7 | Clic en "Continue" y luego en "Finish" | Se muestra el encabezado "Thank you for your order!". |

**Datos de Prueba (Variables de Entorno):**
- `USER_NAME`: standard_user
- `PASSWORD`: secret_sauce

**Evidencias Automatizadas:**
- El framework genera automáticamente un video de la ejecución y capturas de pantalla en caso de fallo.
