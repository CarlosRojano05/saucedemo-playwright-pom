export class ProductsPage {
  constructor(page) {
    this.page = page;
    // Aquí guardamos los "planos" de la página (Selectores)
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
     this.cartBadge = page.locator ('.shopping_cart_badge');
  }

  // Aquí creamos la "acción" (el método)
  async agregarProducto() {
    await this.addToCartButton.click();
    
    
  }
}