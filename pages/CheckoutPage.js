export class CheckoutPage {
    constructor(page){
        
        this.page = page;
        this.cartButton = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.successMessage = page.locator('.complete-header');
    }

        async completarFormulario(nombre, apellido, zip) {
        await this.cartButton.click();
        await this.checkoutButton.click();
        await this.firstNameInput.fill(nombre);
        await this.lastNameInput.fill(apellido);
        await this.postalCodeInput.fill(zip);
        await this.continueButton.click();
    }

    async finalizarCompra() {
        await this.finishButton.click();
    }
}