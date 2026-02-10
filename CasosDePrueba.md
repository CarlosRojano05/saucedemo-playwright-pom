# 📋 Especificación de Casos de Prueba

## 📌 Proyecto
**Nombre:** SauceDemo – Shopping Flow  
**URL:** https://www.saucedemo.com/  
**Herramienta de Automatización:** Playwright  
**Lenguaje:** JavaScript  
**Patrón de Diseño:** Page Object Model (POM)

---

## 🧪 Caso de Prueba: TC-01 – Compra Exitosa de un Producto (E2E)

**Tipo de Prueba:** End-to-End (E2E)  
**Nivel de Prueba:** Sistema  
**Prioridad:** Alta  
**Severidad:** Crítica  
**Automatizado:** Sí  

---

### ✅ Precondiciones
- El usuario debe contar con credenciales válidas.
- La aplicación debe estar disponible y operativa.
- El navegador debe abrirse correctamente.

---

### 🧾 Datos de Prueba (Variables de Entorno)

| Variable | Valor |
|--------|-------|
| USER_NAME | standard_user |
| PASSWORD | secret_sauce |
| FIRST_NAME | Juan |
| LAST_NAME | Pérez |
| POSTAL_CODE | 12345 |

---

### 📑 Pasos de Prueba

| ID | Paso | Acción | Datos de Prueba | Resultado Esperado | Resultado Real | Estado |
|----|------|--------|----------------|-------------------|----------------|--------|
| 1 | Acceder a la aplicación | Navegar a `https://www.saucedemo.com/` | URL | Se muestra la página de Login correctamente | Página cargada | Pass |
| 2 | Autenticación | Ingresar usuario y contraseña válidos | USER_NAME / PASSWORD | El usuario accede al dashboard de productos | Acceso exitoso | Pass |
| 3 | Agregar producto | Clic en “Add to cart” de un producto | Sauce Labs Backpack | El contador del carrito aumenta a 1 | Contador actualizado | Pass |
| 4 | Visualizar carrito | Clic en el ícono del carrito | — | Se visualiza el producto agregado | Producto visible | Pass |
| 5 | Iniciar checkout | Clic en el botón “Checkout” | — | Se muestra el formulario de información | Formulario visible | Pass |
| 6 | Completar formulario | Ingresar nombre, apellido y código postal | FIRST_NAME / LAST_NAME / POSTAL_CODE | Los datos se ingresan sin errores | Datos aceptados | Pass |
| 7 | Finalizar compra | Clic en “Continue” y luego “Finish” | — | Se muestra el mensaje “Thank you for your order!” | Compra exitosa | Pass |

---

### 📌 Criterio de Aceptación
- El flujo de compra debe completarse sin errores.
- El mensaje **“Thank you for your order!”** debe mostrarse correctamente.
- No deben presentarse errores visuales ni funcionales durante el flujo.

---

### 🎥 Evidencias Automatizadas
- Video y verificación de la ejecución del test.
  
<img width="1914" height="990" alt="check" src="https://github.com/user-attachments/assets/d8d201ed-3a43-4df2-ad0f-cbe09383b831" />

![b27db3fc903b7c2b2db5df4fc1fbef12a3556dd9](https://github.com/user-attachments/assets/7de6a301-e00b-4e90-8eb4-42f1a150b458)



---

### 🛠️ Notas Técnicas
- Se implementó Page Object Model (POM) para mejorar la mantenibilidad del código.
- Las credenciales se manejan mediante variables de entorno para mayor seguridad.
- El test valida el flujo completo del sistema desde login hasta la confirmación de compra.

---
