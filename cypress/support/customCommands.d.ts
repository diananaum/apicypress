declare namespace Cypress {
    interface Chainable<Subject> {
        /* Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })*/
        user(id: any, username: any, userStatus: any): Chainable<any>
        updateUser(id: any, username: any, userStatus: any): Chainable<any>
        deleteUser(username: any): Chainable<any>
  }
}