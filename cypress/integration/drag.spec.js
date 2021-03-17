describe("Testing task creation", () => {
  beforeEach(() => {
    cy.visit(
      "https://alexischen99.github.io/cse110-w21-group4/source/potato.html"
    );
  });

  it("Check if the dragging feature works for settings menu", () => {
    // Close the essays
    cy.get("#next").click();
    cy.get("#next").click();
    cy.get("#next").click();
    cy.get("#next").click();

    // Open the Settings Menu
    cy.get("#options").click();

    // Access the Settings Menu
    cy.get("#settingsMenu")
      .trigger("mouseover", 10, 30)
      .trigger("mousedown", 10, 30)
      .trigger("mousemove", 10, 60)
      .trigger("mouseup", 10, 60);

    cy.get("#settingsMenu").then(($el) => {
      let coords = $el[0].getBoundingClientRect();

      expect(coords.y).to.equal(30);
      expect(coords.x).to.equal(0);
    });
  });

  it("Check if the dragging feature works for task list", () => {
    // Close the essays
    cy.get("#next").click();
    cy.get("#next").click();
    cy.get("#next").click();
    cy.get("#next").click();

    // Open the Task list
    cy.get("#taskBtn").click();
    // <div class="menu showing menuLight" id="taskMenu" style="cursor: default; top: 151px; left: 207px;">
    // <div class="headerDark" id="taskMenuHeader" style="cursor: move;"></div>
    
    // Access the Task List
    cy.get("#taskMenu") // The event listener is on the header
      .trigger("mousedown", 10, 30) // Will click down on the header
      .trigger("mousemove", 10, 60) // Translates mouse 30px in the y direction
      .trigger("mouseup", 10, 60);          // Releases drag

    cy.get("#taskMenu").then(($el) => {
      let coords = $el[0].getBoundingClientRect();

      expect(coords.y).to.equal(30);
      expect(coords.x).to.equal(0);
    });
      
  });
});
