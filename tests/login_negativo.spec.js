import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { urls } from '../config.js';
// Importamos el JSON y le damos el nombre 'data'
import data from '../data/usuarios.json';

test.describe('Pruebas Negativas de Login', () => {
    let loginPage; // Declaramos la variable arriba para que todos los tests la vean

    // Este es el HOOK: Se ejecuta antes de cada test
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(urls.looginPage);
    });

    data.usuariosInvalidos.forEach(({ user, pass, error }) => {
        test(`Debería mostrar error para el usuario: ${user}`, async () => {
            // Ya no necesitas crear loginPage ni navegar aquí, el Hook ya lo hizo
            await loginPage.login(user, pass);
            
            const errorMsg = await loginPage.page.locator('[data-test="error"]').textContent();
            expect(errorMsg).toContain(error);
        });
    });
});