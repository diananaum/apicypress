const data = require("../fixtures/data");

describe("User api", () => {
  it("Should create user", () => {
    cy.user(data.id, data.username, data.userStatus).then((result) => {
      expect(result.status).is.equal(200);
      expect(result.body).is.eqls({ 
        code: 200, 
        type: "unknown", 
        message: "1" 
      });
    });
  });

  it("Should update user", () => {
    cy.user(data.id, data.username, data.userStatus);
    cy.updateUser(data.id, data.updateName, data.userStatus).then((result) => {
      expect(result.status).is.equal(200);
      expect(result.body).is.eqls({ 
        code: 200, 
        type: "unknown", 
        message: "1" 
      });
    });
  });

  it("Should delete user", () => {
    cy.user(data.id, data.username, data.userStatus);
    cy.updateUser(data.id, data.updateName, data.userStatus);
    cy.deleteUser(data.updateName).then((result) => {
      expect(result.status).is.equal(200);
      expect(result.body).is.eqls({
        code: 200,
        type: "unknown",
        message: "qazwsx"
      });
    });
  });
});
