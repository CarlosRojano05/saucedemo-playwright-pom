//  AQUÍ Aplicaremos POM 

import { test, expect } from '@playwright/test';
import { urls } from '../config.js';
import { LoginPage } from '../pages/LoginPage.js'; 
import dotenv from 'dotenv';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

dotenv.config();

test('Test usando Page Object Model', async ({ page }) => {
   
  const loginPage = new LoginPage(page); 
  const productsPage = new ProductsPage(page); 
  const checkoutPage = new CheckoutPage(page);
  
  // Login
  await page.goto (urls.looginPage);
  await loginPage.login (process.env.USER_NAME, process.env.PASSWORD);

  // Agregar al carrito
  await productsPage.agregarProducto();


  // Checkout
  await checkoutPage.completarFormulario('Juan','Perez','12345');
  await checkoutPage.finalizarCompra()
    

  // Verificación final 
  await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');

});