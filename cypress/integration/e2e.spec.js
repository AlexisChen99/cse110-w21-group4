describe('Testing task creation', () => {
    beforeEach(() => {
        cy.visit('https://alexischen99.github.io/cse110-w21-group4/source/potato.html');
    });

    it('Check that a task is correctly added to empty task list', () => {
        cy.get('#enterTask').clear().type('Write essay');
        cy.get('#taskAdder').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(1);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(1);
            }
        );
    });

    it('Check that "overflow" tasks are not shown on page by default', () => {
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 3');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 4');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 5');
        cy.get('#taskAdder').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(5);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(3);
            }
        );
    });

    it('Check that empty tasks cannot be created', () => {
        cy.get('#enterTask').clear();
        cy.get('#taskAdder').click();
        cy.get('#taskListContainer').children().should('not.exist');
        cy.get('#mainTasks').children().should('not.exist');
    });
});

describe('Testing task deletion', () => {
    beforeEach(() => {
        cy.visit('https://alexischen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 3');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 4');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 5');
        cy.get('#taskAdder').click();
    });

    it('Check for successful pinned task deletion', () => {
        cy.get('#3pin').children('#singleDel').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(4);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#3pin').should('not.exist');
    });

    it('Check for successful unpinned task deletion', () => {
        cy.get('#taskBtn').click();
        cy.get('#5').children('#singleDel').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(4);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(3);
            }
        );
        cy.get('#5').should('not.exist');
    });

    it('Check for successful total task deletion', () => {
        cy.get('#taskBtn').click();
        cy.get('#deleteAll').click();
        cy.get('#confirm').click();
        cy.get('#taskListContainer').children().should('not.exist');
        cy.get('#mainTasks').children().should('not.exist');
    });
});