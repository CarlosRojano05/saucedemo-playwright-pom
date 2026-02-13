import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { urls } from '../config.js';
// Importamos el JSON y le damos el nombre 'productosData'
import productosData from '../data/producto.json'
import dotenv from 'dotenv';
dotenv.config();

test.describe('Pruebas Dinámicas de Carrito', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(urls.looginPage);

        // Login rápido con el usuario estándar
        await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    });

    productosData.productosAProbar.forEach(({ nombre, id }) => {
        test(`Agregar al carrito: ${nombre}`, async ({ page }) => {
            // Buscamos el botón por el ID que definimos en el JSON
            const btnAgregar = page.locator(`[data-test="${id}"]`);
            await btnAgregar.click();

            // Validamos que el carrito ahora diga "1"
            const badge = page.locator('.shopping_cart_badge');
            await expect(badge).toHaveText('1');
        });
    });
});