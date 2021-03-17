//End to End tests, divided by action/task
describe('Testing task creation', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
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

    it('Check that a task is correctly added to empty task list on dark theme', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
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

    it('Check that a task is correctly added to empty task list on light theme', () => {
        cy.get('#settingsIcon').click();
        cy.get('#lightTheme').click();
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
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
    });

    it('Check for successful unpinned task deletion', () => {
        cy.get('#enterTask').clear().type('Write essay 3');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 4');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 5');
        cy.get('#taskAdder').click();
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
        cy.get('#enterTask').clear().type('Write essay 3');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 4');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 5');
        cy.get('#taskAdder').click();
        cy.get('#taskBtn').click();
        cy.get('#deleteAll').click();
        cy.get('#confirm').click();
        cy.get('#taskListContainer').children().should('not.exist');
        cy.get('#mainTasks').children().should('not.exist');
    });

    it('Check for successful last task deletion', () => {
        cy.get('#taskBtn').click();
        cy.get('#del-2').click();
        cy.get('#taskBtn').click();
        cy.get('#del-1').click();
        cy.get('#taskListContainer').children().should('not.exist');
        cy.get('#mainTasks').children().should('not.exist');
    });

    it('Check for successful completed task deletion', () => {
        cy.get('#taskBtn').click();
        cy.get('#mark-2').click();
        cy.get('#taskBtn').click();
        cy.get('#del-2').click();
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

describe('Testing theme change', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
    });

    it('Check dark theme change', () => {
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
        cy.get('#mark-1-copy').click();
        cy.get('#taskBtn').click();
        cy.get('#pin-2').click();
        cy.get('#closeTasks').click();
        cy.get('#settingsIcon').click();
        cy.get("#volumeIcon").click();
        cy.get('#settingsIcon').click();
        cy.get('#volume').clear().type('0{enter}');
        cy.get('#darkTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Dark');
        cy.get('#pin-1').should('have.attr', 'src').should('include','dark');
        cy.get('#mark-1-copy').should('have.attr', 'class').should('include','markDark');
        cy.get('#volumeIcon').should('have.attr', 'src').should('include','dark');

    });

    it('Check light theme change', () => {
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
        cy.get('#mark-1-copy').click();
        cy.get('#settingsIcon').click();
        cy.get("#volumeIcon").click();
        cy.get('#settingsIcon').click();
        cy.get('#volume').clear().type('0{enter}');
        cy.get('#lightTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Light');
        cy.get('#pin-1').should('have.attr', 'src').should('not.contain','dark');
        cy.get('#mark-1-copy').should('have.attr', 'class').should('include','markLight');
        cy.get('#volumeIcon').should('have.attr', 'src').should('not.contain','dark');
    });

    it('Check potato theme change', () => {
        cy.get('#settingsIcon').click();
        cy.get('#potatoTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Potato');
    });
});

describe('Testing volume change', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
    });

    it('Check general volume change', () => {
        cy.get('#settingsIcon').click();
        cy.get('#volume').clear().type('20{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('volume').should('equal', '20');
    });

    it('Check volume 0', () => {
        cy.get('#settingsIcon').click();
        cy.get('#volume').clear().type('0{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('volume').should('equal', '0');
    });

    it('Check volume max', () => {
        cy.get('#settingsIcon').click();
        cy.get('#volume').clear().type('200{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('volume').should('equal', '100');
    });

    it('Check volume min', () => {
        cy.get('#settingsIcon').click();
        cy.get('#volume').clear().type('-10{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('volume').should('equal', '0');
    });

    it('Check normal mute', () => {
        cy.get('#settingsIcon').click();
        cy.get("#volumeIcon").click();
        cy.get('#volumeIcon').should('have.attr', 'src').should('include','mute');
        cy.get("#closeSettings").click();
    });

    it('Check dark mute', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.get('#settingsIcon').click();
        cy.get("#volumeIcon").click();
        cy.get('#volumeIcon').should('have.attr', 'src').should('include','mute');
        cy.get("#closeSettings").click();
    });

    it('Check normal unmute', () => {
        cy.get('#settingsIcon').click();
        cy.get("#volumeIcon").click();
        cy.get("#volumeIcon").click();
        cy.get('#volumeIcon').should('have.attr', 'src').should('not.contain','mute');
        cy.get("#closeSettings").click();
    });

    it('Check dark unmute', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.get('#settingsIcon').click();
        cy.get("#volumeIcon").click();
        cy.get("#volumeIcon").click();
        cy.get('#volumeIcon').should('have.attr', 'src').should('not.contain','mute');
        cy.get("#closeSettings").click();
    });
});

describe('Testing time change', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
    });

    it('Check general time changes', () => {
        cy.get('#settingsIcon').click();
        cy.get('#workMin').clear().type('1{enter}');
        cy.get('#workSec').clear().type('2{enter}');
        cy.get('#longMin').clear().type('3{enter}');
        cy.get('#longSec').clear().type('4{enter}');
        cy.get('#shortMin').clear().type('5{enter}');
        cy.get('#shortSec').clear().type('6{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('workMin').should('equal', '1');
        cy.getLocalStorage('workSec').should('equal', '2');
        cy.getLocalStorage('longMin').should('equal', '3');
        cy.getLocalStorage('longSec').should('equal', '4');
        cy.getLocalStorage('shortMin').should('equal', '5');
        cy.getLocalStorage('shortSec').should('equal', '6');
    });

    it('Check max time changes', () => {
        cy.get('#settingsIcon').click();
        cy.get('#workSec').clear().type('60{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('workSec').should('equal', '59');
    });

    it('Check min time changes', () => {
        cy.get('#settingsIcon').click();
        cy.get('#workSec').clear().type('-10{enter}');
        cy.get("#closeSettings").click();
        cy.getLocalStorage('workSec').should('equal', '0');
    });
});

describe('Testing task pin', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
    });

    it('Check for pinning unpinned task', () => {
        cy.get('#taskBtn').click();
        cy.get('#pin-2').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#pin-2').should('have.attr', 'src').should('not.contain','unpinned');
    });

    it('Check for unpinning pinned task', () => {
        cy.get('#taskBtn').click();
        cy.get('#pin-1').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#mainTasks').children().should('not.exist');
        cy.get('#pin-2').should('have.attr', 'src').should('include','unpinned');
    });

    it('Check for pinning unpinned task on dark mode', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.get('#taskBtn').click();
        cy.get('#pin-2').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#pin-2').should('have.attr', 'src').should('not.contain','unpinned');
        cy.get('#pin-2').should('have.attr', 'src').should('include','dark');
    });

    it('Check for unpinning pinned task on dark mode', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.get('#taskBtn').click();
        cy.get('#pin-1').click();
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#mainTasks').children().should('not.exist');
        cy.get('#pin-2').should('have.attr', 'src').should('include','unpinned');
        cy.get('#pin-2').should('have.attr', 'src').should('include','dark');
    });
});

describe('Testing task mark', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
    });

    it('Check for un/marking pinned task', () => {
        cy.get('#mark-1-copy').click();
        cy.get('#1').should('have.attr', 'marked').should('equal','true');
        cy.get('#mark-1-copy').should('have.attr', 'class').should('include','markFill');
        cy.get('#mark-1').should('have.attr', 'class').should('include','markFill');
        cy.get('#mark-1-copy').click();
        cy.get('#1').should('have.attr', 'marked').should('equal','false');
        cy.get('#mark-1-copy').should('have.attr', 'class').should('not.contain','markFill');
        cy.get('#mark-1').should('have.attr', 'class').should('not.contain','markFill');
    });

    it('Check for un/marking pinned task on dark mode', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.get('#mark-1-copy').click();
        cy.get('#1').should('have.attr', 'marked').should('equal','true');
        cy.get('#mark-1-copy').should('have.attr', 'class').should('include','markFill');
        cy.get('#mark-1').should('have.attr', 'class').should('include','markFill');
        cy.get('#mark-1-copy').click();
        cy.get('#1').should('have.attr', 'marked').should('equal','false');
        cy.get('#mark-1-copy').should('have.attr', 'class').should('not.contain','markFill');
        cy.get('#mark-1').should('have.attr', 'class').should('not.contain','markFill');
    });

    it('Check for un/marking unpinned task', () => {
        cy.get('#taskBtn').click();
        cy.get('#mark-2').click();
        cy.get('#2').should('have.attr', 'marked').should('equal','true');
        cy.get('#mark-2').should('have.attr', 'class').should('include','markFill');
        cy.get('#mark-2').click();
        cy.get('#2').should('have.attr', 'marked').should('equal','false');
        cy.get('#mark-2').should('have.attr', 'class').should('not.contain','markFill');
    });

    it('Check for un/marking unpinned task on dark mode', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.get('#taskBtn').click();
        cy.get('#mark-2').click();
        cy.get('#2').should('have.attr', 'marked').should('equal','true');
        cy.get('#mark-2').should('have.attr', 'class').should('include','markFill');
        cy.get('#mark-2').click();
        cy.get('#2').should('have.attr', 'marked').should('equal','false');
        cy.get('#mark-2').should('have.attr', 'class').should('not.contain','markFill');
    });
});

describe('Testing localstorage', () => {
    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
    });

    it('Check input changes are preserved', () => {
        cy.get('#settingsIcon').click();
        cy.get('#workMin').clear().type('1{enter}');
        cy.get('#workSec').clear().type('2{enter}');
        cy.get('#longMin').clear().type('3{enter}');
        cy.get('#longSec').clear().type('4{enter}');
        cy.get('#shortMin').clear().type('5{enter}');
        cy.get('#shortSec').clear().type('6{enter}');
        cy.get('#volume').clear().type('20{enter}');
        cy.get('#animationBtn').click();                    
        cy.get("#closeSettings").click();
        cy.getLocalStorage('volume').should('equal', '20');
        cy.getLocalStorage('workMin').should('equal', '1');
        cy.getLocalStorage('workSec').should('equal', '2');
        cy.getLocalStorage('longMin').should('equal', '3');
        cy.getLocalStorage('longSec').should('equal', '4');
        cy.getLocalStorage('shortMin').should('equal', '5');
        cy.getLocalStorage('shortSec').should('equal', '6');
        cy.getLocalStorage('animation').should('equal', 'true');
        cy.reload();
        cy.getLocalStorage('volume').should('equal', '20');
        cy.getLocalStorage('returning').should('equal', 'true');
        cy.getLocalStorage('workMin').should('equal', '1');
        cy.getLocalStorage('workSec').should('equal', '2');
        cy.getLocalStorage('longMin').should('equal', '3');
        cy.getLocalStorage('longSec').should('equal', '4');
        cy.getLocalStorage('shortMin').should('equal', '5');
        cy.getLocalStorage('shortSec').should('equal', '6');
        cy.getLocalStorage('animation').should('equal', 'true');
    });

    it('Check theme changes are preserved', () => {
        cy.get('#settingsIcon').click();
        cy.get('#darkTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Dark');
        cy.reload();
        cy.getLocalStorage('theme').should('equal', 'Dark');
        cy.get('#settingsIcon').click();
        cy.get('#lightTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Light');
        cy.reload();
        cy.getLocalStorage('theme').should('equal', 'Light');
        cy.get('#settingsIcon').click();
        cy.get('#potatoTheme').click();
        cy.getLocalStorage('theme').should('equal', 'Potato');
        cy.reload();
        cy.getLocalStorage('theme').should('equal', 'Potato');
    });

    it('Check tasks are preserved', () => {
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
        cy.get('#taskBtn').click();
        cy.get('#mark-2').click();
        cy.get('#pin-2').click();
        cy.get('#closeTasks').click();
        cy.get('#settingsIcon').click();
        cy.get('#volumeIcon').click();
        cy.get('#animationBtn').click();
        cy.get("#closeSettings").click();
        cy.getLocalStorage('savedTasks').should('equal', '["Write essay 1","Write essay 2"]');
        cy.get('#taskBtn').click();
        cy.get('#2').should('have.attr', 'marked').should('equal','true');
        cy.get('#mark-2').should('have.attr', 'class').should('include','markFill');
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#mainTasks').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );
        cy.get('#pin-2').should('have.attr', 'src').should('not.contain','unpinned');
    });

    it('Check settings are preserved', () => {
        cy.get('#settingsIcon').click();
        cy.get('#workMin').clear().type('1{enter}');
        cy.get('#workSec').clear().type('2{enter}');
        cy.get('#longMin').clear().type('3{enter}');
        cy.get('#longSec').clear().type('4{enter}');
        cy.get('#shortMin').clear().type('5{enter}');
        cy.get('#shortSec').clear().type('6{enter}');
        cy.get('#volume').clear().type('20{enter}');
        cy.get('#volumeIcon').click();
        cy.get('#animationBtn').click();
        cy.get('#animationBtn').click();
        cy.get("#closeSettings").click();
        cy.setLocalStorage('savedSettings', 'true');
        cy.setLocalStorage('pomosDone', 'false');
        cy.reload();
        cy.getLocalStorage('volume').should('equal', '20');
        cy.getLocalStorage('returning').should('equal', 'true');
        cy.getLocalStorage('workMin').should('equal', '1');
        cy.getLocalStorage('workSec').should('equal', '2');
        cy.getLocalStorage('longMin').should('equal', '3');
        cy.getLocalStorage('longSec').should('equal', '4');
        cy.getLocalStorage('shortMin').should('equal', '5');
        cy.getLocalStorage('shortSec').should('equal', '6');
        cy.getLocalStorage('volume').should('equal', '20');
        cy.getLocalStorage('mute').should('equal', 'true')
        cy.getLocalStorage('animation').should('equal', 'false')
    });
    
    it('Sets language in local storage properly', () => {
        cy.get('#settingsIcon').click();
        cy.get('#English').click();
        cy.getLocalStorage('lang').should('equal', 'en');
        cy.reload();
        cy.getLocalStorage('lang').should('equal', 'en');

        cy.get('#settingsIcon').click();
        cy.get('#Spanish').click();
        cy.getLocalStorage('lang').should('equal', 'es');
        cy.reload();
        cy.getLocalStorage('lang').should('equal', 'es');

        cy.get('#settingsIcon').click();
        cy.get('#Chinese').click();
        cy.getLocalStorage('lang').should('equal', 'zh');
        cy.reload();
        cy.getLocalStorage('lang').should('equal', 'zh');

        cy.get('#settingsIcon').click();
        cy.get('#Korean').click();
        cy.getLocalStorage('lang').should('equal', 'ko');
        cy.reload();
        cy.getLocalStorage('lang').should('equal', 'ko');
    });

    it('Check if an English page is loaded', () => {
        cy.get('#settingsIcon').click();
        cy.get('#English').click();
        cy.getLocalStorage('lang').should('equal', 'en');
        cy.get('#title').should('have.text', 'Potato Timer');
        // if(cy.getLocalStorage('animation') == true) {
        //     cy.get('#animationBtn').should('have.text', 'Disable Potato Animation');
        // } else {
        //     cy.get('#animationBtn').should('have.text', 'Enable Potato Animation');
        // }
        cy.get('#notificationBar').should('have.text', 'Welcome Back!');
    });
    
    it('Check if a Spanish page is loaded', () => {
        cy.get('#settingsIcon').click();
        cy.get('#Spanish').click();
        cy.getLocalStorage('lang').should('equal', 'es');
        cy.get('#title').should('have.text', 'Temporizador de Papa');
        cy.get('#notificationBar').should('have.text', 'Bienvenido de nuevo!');
    });
    
    it('Check if a Chinese page is loaded', () => {
        cy.get('#settingsIcon').click();
        cy.get('#Chinese').click();
        cy.getLocalStorage('lang').should('equal', 'zh');
        cy.get('#title').should('have.text', '土豆计时器');
        cy.get('#notificationBar').should('have.text', '欢迎回来');
    });
    
    it('Check if a Korean page is loaded', () => {
        cy.get('#settingsIcon').click();
        cy.get('#Korean').click();
        cy.getLocalStorage('lang').should('equal', 'ko');
        cy.get('#title').should('have.text', '포테이토 타이머');
        cy.get('#notificationBar').should('have.text', '다시 오신 것을 환영합니다!');
    });

});

describe('Testing Intro pages', () => {
    it('Navigate through pages on instructions menu', () => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click(); // Last page when next turns to close
        cy.get("#instrTopic").should('have.text', "About");
        cy.get("#back").click();
        cy.get("#back").click();
        cy.get("#back").click();
        cy.get("#instrTopic").should('have.text', "Introduction");
        cy.get("#back").click(); // Should return nothing bc page == 1
        cy.get("#instrTopic").should('have.text', "Introduction");
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#instrTopic").should('have.text', "About");
        cy.get("#next").click(); // Will close instructions
    });
});

describe('Testing the Timer', () => {

    beforeEach(() => {
        cy.visit('https://AlexisChen99.github.io/cse110-w21-group4/source/potato.html');
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get("#next").click();
        cy.get('#enterTask').clear().type('Write essay 1');
        cy.get('#taskAdder').click();
        cy.get('#enterTask').clear().type('Write essay 2');
        cy.get('#taskAdder').click();
        cy.get('#settingsIcon').click();
        cy.get('#workMin').clear().type('0{enter}');
        cy.get('#workSec').clear().type('1{enter}');
        cy.get('#longMin').clear().type('0{enter}');
        cy.get('#longSec').clear().type('3{enter}');
        cy.get('#shortMin').clear().type('0{enter}');
        cy.get('#shortSec').clear().type('1{enter}');
        cy.get('#closeSettings').click();
    });

    it('Check nothing is done when tasks is empty' , () => {
        cy.get('#taskBtn').click();
        cy.get('#del-2').click();
        cy.get('#del-1').click();
        cy.get('#taskBtn').click();
        cy.get('#start').click();
        cy.get('#phaseDisplay').contains('idle');
    });

    it('Check 5 pomo cycle' , () => {

        cy.get('#phaseDisplay').contains('idle');
        cy.get('#start').click();

        //pomo 1
        //cy.get('#start').contains('stop');
        cy.get('#phaseDisplay').contains('work');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('short break');
        cy.get('#cycle1').should('have.css', 'display', 'block');
        cy.wait(1001);

        //pomo 2
        cy.get('#phaseDisplay').contains('work');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('short break');
        cy.get('#cycle2').should('have.css', 'display', 'block');
        cy.wait(1001);
        
        //pomo 3
        cy.get('#phaseDisplay').contains('work');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('short break');
        cy.get('#cycle3').should('have.css', 'display', 'block');
        cy.wait(1001);

        //pomo 4
        cy.get('#phaseDisplay').contains('work');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('long break');
        cy.get('#cycle0').should('have.css', 'display', 'block');
        cy.wait(3001);  //now we enter a long break

        //pomo 5
        cy.get('#phaseDisplay').contains('work');
        cy.get('#cycle0').should('have.css', 'display', 'none');
        cy.get('#cycle1').should('have.css', 'display', 'none');
        cy.get('#cycle2').should('have.css', 'display', 'none');
        cy.get('#cycle3').should('have.css', 'display', 'none');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('short break');
        cy.get('#cycle1').should('have.css', 'display', 'block');
        cy.wait(200);


        //mark everything as done
        cy.get('#taskBtn').click();
        cy.get('#mark-1').click();
        cy.get('#mark-2').click();
        cy.get('#closeTasks').click();

        //check congrats screen
        cy.get('#congratsScreen').should('have.class', 'modal showing');
        cy.get('#taskListContainer').children().should('not.exist');
        cy.get('#congratsText').contains('It took you 5 pomotatoes to finish all of your tasks!');
        cy.get('#potatoImgs').children().then(
            $el => {
                expect($el).to.have.lengthOf(5);
            }
        );

        //close congrats screen
        cy.get('body').click(1,1);
        cy.get('#congratsScreen').should('have.class', 'modal hidden');
        cy.get('#phaseDisplay').contains('idle');

    });

    it('Check stop after 1 pomo' , () => {

        cy.get('#phaseDisplay').contains('idle');
        cy.get('#start').click();

        //pomo 1
        //cy.get('#start').contains('stop');
        cy.get('#phaseDisplay').contains('work');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('short break');
        cy.get('#cycle1').should('have.css', 'display', 'block');
        cy.wait(250);

        cy.get('#start').click();

        cy.get('#prompt').should('have.class', 'showing themeLight');
        cy.get('#confirmMessage').contains('Are you sure you want to reset the timer\'s cycle?');
        cy.get('#confirm').click();

        cy.get('#phaseDisplay').contains('idle');
        cy.get('#timerDisplay').contains('- - : - -');
        cy.get('#taskListContainer').children().then(
            $el => {
                expect($el).to.have.lengthOf(2);
            }
        );

    });

    it('Check still potato after 1 pomo completion' , () => {

        cy.get('#settingsIcon').click();
        cy.get('#animationBtn').click();
        cy.get('#animationBtn').click(); //jank 
        cy.get('#closeSettings').click();

        cy.get('#phaseDisplay').contains('idle');
        cy.get('#start').click();

        //pomo 1
        //cy.get('#start').contains('stop');
        cy.get('#phaseDisplay').contains('work');
        cy.wait(1001);
        cy.get('#phaseDisplay').contains('short break');
        cy.get('#cycle1').should('have.css', 'display', 'none');
        cy.wait(250);

        //mark everything as done
        cy.get('#taskBtn').click();
        cy.get('#mark-1').click();
        cy.get('#mark-2').click();
        cy.get('#closeTasks').click();

        cy.get('#potatoImgs').children().first().should('have.attr', 'src', 'img/pomotato.png')

    });

});
