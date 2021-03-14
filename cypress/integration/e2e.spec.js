//End to End tests, divided by action/task
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
                expect($el).to.have.lengthOf(1);
            }
        );
    });

    it('Check that empty tasks cannot be created', () => {
        cy.get('#enterTask').clear();
        cy.get('#taskAdder').click();
        cy.get('#taskListContainer').children().should('not.exist');
        cy.get('#mainTasks').children().should('not.exist');
    });

    it('Check that enter can create task', () => {
        cy.get('#enterTask').clear().type('Write essay{enter}');
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
});

describe('Testing task deletion', () => {
    beforeEach(() => {
        cy.visit('https://alexischen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
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
        cy.get('#del-1-copy').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(4);
            }
        );
        cy.get('#1-copy').should('not.exist');
    });

    it('Check for successful unpinned task deletion', () => {
        cy.get('#taskBtn').click();
        cy.get('#del-5').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(4);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(1);
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

describe('Testing theme change', () => {
    beforeEach(() => {
        cy.visit('https://alexischen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
    });

    it('Check dark theme change', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Dark');
    });

    it('Check light theme change', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Dark');
    });

    it('Check potato theme change', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Dark');
    });
});

describe('Testing volume change', () => {
    beforeEach(() => {
        cy.visit('https://alexischen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
    });

    it('Check general volume change', () => {
        cy.get('#settingsIcon').click();
        cy.get('#volume').type('20{enter}');
        cy.getLocalStorage('volume').should('equal', '20');
    });

    it('Check mute', () => {
        cy.get('#settingsIcon').click();
        cy.get('#volume').type('0{enter}');
        cy.getLocalStorage('volume').should('equal', '0');
        cy.get('#volumeIcon').contains('mute');
    });
});