describe("Accessibility", () => {
	it("should skip to main content", () => {
		cy.visit("/");
		cy.realType("Tab");
		cy.contains("Skip to main content").focus();
		cy.realPress("Enter");
		cy.findByRole("main").should("be.visible").should("have.focus");
		cy.url().should("include", "#main");
	});
});
