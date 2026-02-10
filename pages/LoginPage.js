// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    // Aquí guardamos los "planos" de la página (Selectores)
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  // Aquí creamos la "acción" (el método)
  async login(user, pass) {
    await this.userNameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}