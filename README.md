#  SauceDemo E2E Automation - Playwright POM

Este proyecto es un framework de automatización para la tienda **SauceDemo**, desarrollado con **Playwright** y **JavaScript**. Implementa las mejores prácticas de la industria como el patrón **Page Object Model (POM)**.

##  Escenario de Prueba Principal
Se ha automatizado el flujo completo de compra (End-to-End):
1. **Login:** Acceso con credenciales seguras.
2. **Selección de Productos:** Adición de artículos al carrito.
3. **Checkout:** Completado de formulario de envío y confirmación.
4. **Verificación:** Validación del mensaje de éxito "Thank you for your order!".

## 🛠️ Tecnologías y Arquitectura
- **Playwright:** Motor de ejecución de pruebas.
- **JavaScript (ES6+):** Lenguaje de programación.
- **POM:** Estructura organizada por páginas (`LoginPage`, `ProductsPage`, `CheckoutPage`) para facilitar el mantenimiento.
- **Dotenv:** Manejo de variables de entorno para proteger datos sensibles.

## 📁 Estructura del Proyecto
- `pages/`: Clases con locators y métodos de cada página.
- `tests/`: Scripts de prueba automatizados.
- `.env`: (Excluido en .gitignore) Contiene las credenciales.
- `playwright.config.js`: Configuración de reportes, videos y navegadores.

## 📄 Documentación Detallada
- [Ver Casos de Prueba Detallados](./CasosDePrueba.md)

---
*Desarrollado por Carlos Manuel Rojano Camargo como parte de mi portafolio de QA Automation.*


EVIDENCIA DEL TEST - PASS
<img width="1909" height="905" alt="image" src="https://github.com/user-attachments/assets/52a77c25-9db1-4b08-8118-c97b9dee3c2c" />

