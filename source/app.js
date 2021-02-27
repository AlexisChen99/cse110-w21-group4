
/**
 * Phases: idle, work, short break, long break (lowercase)
 * 
 * i = idle, W = work, b = short break, B = long break
 * 
 * i-W-b-W-b-W-b-W-B (1 cycle)
 * i-0-1-0-1-0-1-0-2
 */
// UNUSED
// var pushEvent = function(arr, callback) {
//     arr.push = function(e) {
//         Array.prototype.push.call(arr,e);
//         callback(arr);
//     };
// };
//
// var popEvent = function(arr, callback) {
//     arr.shift = function(e) {
//         Array.prototype.shift.call(arr,e);
//         callback(arr);
//     };
// };
// pushEvent(tasks, function(tasks) {
//     displayArray();
// });
// popEvent(tasks, function(tasks) {
//     displayArray();
// });


let potatoesEaten = 0;      // Number of pomo 'work' phases completed.
let phase = 'idle';         // idle, work, short break, long break, stopped
let workLength;             // work time (seconds)   15 mins (900)
let shortBreakLength;       // short break time      5 mins  (300)
let longBreakLength;        // long break time       25 mins (1500)
let timer;                  // Represents the interval change of 1s
let secondsRemaining = 0;   // Displays on timer
let MMSS;                   // {string} MM:SS format
let tasksDone = 0;          // TODO: Change its application
let taskCount = 0;          // Used to keep track of all active tasks
var uniqueID = 1;           // Used to assign uniqueID's when deleting specific tasks 
                            // (may be copied from task list to main)
let volume;
let theme;                  // Potato, Dark, Light, undefined (Capitalized)

window.onload = function() {
    const volumeIcon = document.getElementById('volumeIcon');
    volumeIcon.addEventListener('click', mute);
    const settings = document.getElementById('settingsIcon');
    settings.addEventListener('click', function () { show('settingsMenu'); });
    const closeSettings = document.getElementById('closeSettings');
    closeSettings.addEventListener('click', function () { hide('settingsMenu'); });
    const closeTasks = document.getElementById('closeTasks');
    closeTasks.addEventListener('click', function () { hide('taskMenu'); });

    const resetBtn = document.getElementById('reset');
    resetBtn.onclick = function() { confirmationPrompt('Reset'); };
    const deleteAll = document.getElementById('deleteAll');
    deleteAll.addEventListener('click', function () { confirmationPrompt('Delete'); });      // deleteAllTasks
    const cancelBtn = document.getElementById('cancel');
    cancelBtn.onclick = function() { hide('prompt'); };
    
    // Load's users theme, TODO previous input settings, taskList, language
    loadData();

}

/**
 * Mute currently does nothing
 */
function mute() {
    const volumeIcon = document.getElementById('volumeIcon');
    volumeIcon.src = 'img/volume-mute.png';
    const volume = document.getElementById('volume');
    volume.value = 0;
}

/**
 * MIGHT CHANGE TO LISTEN TO AN 'INPUT' EVENT LISTENER
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 * Sets the input times when the cycle isn't in progress.
 * @param {string} phase The phase to set the input times
 * @returns {number} The input time in seconds associated with the phase
 */
function setInputTimes(phase) {
    let minutes = document.getElementById(phase+'Min').value;
    let seconds = document.getElementById(phase+'Sec').value;
    return (+minutes) * 60 + (+seconds);
}

/**
 * Starts the timer and decrements the timer's MM:SS every second.
 * If the timer was stopped and resumed, the input times are not modified.
 */
function start() {
    if(phase != 'stopped') {
        console.log('Setting input times');
        workLength = setInputTimes('work');
        shortBreakLength = setInputTimes('short');
        longBreakLength = setInputTimes('long');
    }

    secondsRemaining = setTimeRemaining();
    document.getElementById('reset').disabled = true;
    document.getElementById('start').innerHTML = 'Stop';
    document.getElementById('start').onclick = stop;
    phase = 'work';
    document.getElementById('phaseDisplay').innerHTML = phase;
    // Still synchronous
    if (taskCount > 0) {    
        timer = setInterval(function () {
            // once all the tasks have ended, clear the timer
            if (taskCount == 0) {   // FIXME
                clearInterval(timer);
                phase = 'idle';
                // Update the phase
                document.getElementById('phaseDisplay').innerHTML = phase;
                // Disable the reset button
                document.getElementById('reset').disabled = true;
            } else {
                // Display the time MM:SS
                MMSS = convertSeconds(secondsRemaining);
                document.getElementById('timerDisplay').innerHTML = MMSS;
                setPageTitle(MMSS);
                secondsRemaining--;

                if (secondsRemaining < 0) {
                    if (phase == 'work') {
                        // Update the tasks array (shift)

                        // tasks.shift();
                        // document.getElementById('mainTasks').innerHTML = tasks;
                        potatoesEaten++;

                        var audio = new Audio('audio/Rooster Crow.wav');
                        audio.play();
                    }

                    updatePhase();
                    secondsRemaining = setTimeRemaining();
                    document.getElementById('phaseDisplay').innerHTML = phase;

                    // To change to dark background, need to create a new class
                    const background = document.getElementById('background');
                    if(theme == 'Potato' && phase == 'short break' || phase == 'long break') {
                        background.classList.replace('potatoWork', 'potatoBreak');
                    } else if (theme == 'Potato') {
                        background.classList.replace('potatoBreak', 'potatoWork');
                    }
                }
           }
        }, 1000); //update the timer every second
    }
}

/**
 * Converts the seconds in the remaining time to the format {min}:{sec}
 * MM:SS
 * 
 * @param {time of the webapp} secondsRemaining 
 */
function convertSeconds(secondsRemaining) {
    minutes = Math.floor(secondsRemaining / 60);
    seconds = secondsRemaining - (60 * minutes);

    var timerString ='';
    if (minutes < 10) { timerString = '0'; }
    timerString += minutes + ':';
    if (seconds < 10) { timerString += '0'; }
    timerString += seconds;

    return timerString;
}

/**
 * Stops the timer. The current time remaining in the phase is saved. 
 */
function stop() {
    clearInterval(timer);
    phase = 'stopped';
    setPageTitle(MMSS);
    document.getElementById('phaseDisplay').innerHTML = phase;
    document.getElementById('reset').disabled = false;
    document.getElementById('start').innerHTML = 'Start';
    document.getElementById('start').onclick = start;
}
/**
 * Resets the pomodoro cycle to the beginning.
 */
function reset() {
    console.log('reset timer');
    phase = 'idle';
    document.getElementById('timerDisplay').innerHTML='00:00';
    taskCount = 0;
    uniqueID = 1;
    hide('prompt');
}

/** 
 * Adds a non-blank task to the list of tasks. 
 * TODO: If the taskCount is less than 4, add the task to the main page.
 */
function addTask() {
    const task = document.getElementById('enterTask').value;
    if(task != '') {
        createTask(task);
        taskCount++;
        console.log('Created task with ID ' + uniqueID);
        console.log('Task count: ' + taskCount);
    }
}

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!1
 *          INCOMPLETE: POTATO THEME MARK TASK TO POTATO IMAGE
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Creates a userTask in the taskListContainer. 
 * This does not display a task on the main page.
 * A userTask is identified with a unique numerical ID.
 * Has four child elements: mark to mark as done, pin a copy to main page,
 * delete from task list and main page, if pinned, and task content.
 * 
 * @event addTask()
 * @param {string} text The task the user entered.
 */
function createTask(text) {
    let taskList = document.getElementById('taskListContainer');
    let newTask = document.createElement('div');
    newTask.className = 'userTask';
    newTask.id = uniqueID++;

    let mark = document.createElement('div');
    mark.id = 'markDone';
    mark.classList.add('markCircle');
    let pin = document.createElement('img');
    pin.id = 'pin';
    pin.src = 'img/unpinned.png';
    let del = document.createElement('img');
    del.id = 'singleDel';
    if(theme == 'Dark') {
        mark.classList.add('markDark');
        del.src = 'img/delete-task-dark.png';
    } else {
        mark.classList.add('markLight');
        del.src = 'img/delete-task.png';
    }
    let content = document.createElement('p');
    content.innerHTML = text;

    mark.addEventListener('click', function() {
        if(newTask.children[0].classList.contains('markFill')) {
            unmark(newTask.id);
        } else {
            markDone(newTask.id);
        }
    });

    pin.addEventListener('click', function() {
        pinnedTask = document.getElementById(newTask.id+'pin');
        if(!pinnedTask) {
            createExistingTask(text, newTask.id);
            pin.src = 'img/pinned.png';
        } else {
            pin.src = 'img/unpinned.png';
            unpinTask(newTask.id);
        }
    });

    del.addEventListener('click', function() {
        deleteTask(newTask.id);
    });

    newTask.appendChild(mark);
    newTask.appendChild(pin);
    newTask.appendChild(del);
    newTask.appendChild(content);
    taskList.appendChild(newTask);
}

/** 
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!1111
 * INCOMPLETE: POTATO THEME MARK TASK TO POTATO IMAGE
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Creates 'pinned' userTask in the mainTasks container. 
 * This display an existing task on the main page.
 * A pinned task is identified as '#pin' where # is the uniqueID.
 * Inherits the four userTask components, 
 * The eventListener for pin is different.
 * 
 * @param {string} text     A copy of the user's task.
 * @param {string} uniqueID The existing task's id.
 */
function createExistingTask(text, uniqueID) {
    let mainTasks = document.getElementById('mainTasks');
    let pinTask = document.createElement('div');
    pinTask.className = 'userTask';
    pinTask.id = uniqueID + 'pin';

    let mark = document.createElement('div');
    mark.id = 'markDone';
    mark.classList.add('markCircle');
    let pin = document.createElement('img');
    pin.id = 'pin';
    pin.src = 'img/pinned.png';
    let del = document.createElement('img');
    del.id = 'singleDel';

    if(theme == 'Dark') {
        mark.classList.add('markDark');
        del.src = 'img/delete-task-dark.png';
    } else {
        mark.classList.add('markLight');
        del.src = 'img/delete-task.png';
    }

    let content = document.createElement('p');
    content.innerHTML = text;

    mark.addEventListener('click', function() {
        if(pinTask.children[0].classList.contains('markFill')) {
            unmark(uniqueID);
        } else {
            markDone(uniqueID);
        }
    })

    pin.addEventListener('click', function() {
        unpinTask(uniqueID);
    });

    del.addEventListener('click', function() {
        deleteTask(uniqueID);
    });

    pinTask.appendChild(mark);
    pinTask.appendChild(pin);
    pinTask.appendChild(del);
    pinTask.appendChild(content);
    mainTasks.appendChild(pinTask);
}

/**
 * Visually marks a task if a user completes the task.
 * This affects the task list and main display, if possible.
 * Increments the number of tasks completed.
 * @param {string} uniqueID The existing task's (task list) id.
 */
function markDone(uniqueID) {
    let originalTask = document.getElementById(uniqueID);
    originalTask.children[0].classList.add('markFill');
    pinnedTask = document.getElementById(uniqueID+'pin');

    if(pinnedTask) {
        pinnedTask.children[0].classList.add('markFill');
    }
    tasksDone++;
    console.log('Tasks done: ' + tasksDone);
}

/**
 * Visually unmarks a task if a user did not complete the task.
 * This affects the task list and main display, if possible.
 * Decrements the number of tasks complete.
 * @param {string} uniqueID The existing task's (task list) id.
 */
function unmark(uniqueID) {
    let originalTask = document.getElementById(uniqueID);
    originalTask.children[0].classList.remove('markFill');
    pinnedTask = document.getElementById(uniqueID+'pin');
    if(pinnedTask) {
        pinnedTask.children[0].classList.remove('markFill');
    }
    tasksDone--;
    console.log('Tasks done: ' + tasksDone);
}

/**
 * Unpins a task from the main display by deleting the pinned copy.
 * @param {string} uniqueID The existing task's (task list) id.
 * 
 * @example Unpin pinned task '1pin' calls function with '1pin'
 */
function unpinTask(uniqueID) {
    let pinnedTask = document.getElementById(uniqueID+'pin');
    const mainTasks = document.getElementById('mainTasks');
    mainTasks.removeChild(pinnedTask);
    let originalTask = document.getElementById(uniqueID).children;
    originalTask[1].src = 'img/unpinned.png';
}

/**
 * Deletes a task from both the task list and the main display, if possible.
 * Decreases the number of tasks by one.
 * @param {string} uniqueID The existing task's (task list) id.
 * 
 * @example Delete pinned task '1pin' calls function with '1'.
 */
function deleteTask(uniqueID) {    
    const pinnedTask = document.getElementById(uniqueID+'pin');
    if(pinnedTask) {
        const mainTasks = document.getElementById('mainTasks');
        mainTasks.removeChild(pinnedTask);
        console.log('Deleted a pinned task.');

    }
    const taskList = document.getElementById('taskListContainer');
    taskList.removeChild(document.getElementById(uniqueID));
    taskCount--;
    console.log('Task count: ' + taskCount);
}

/**
 * 
 * Called by the deleteAll button.
 */
function deleteAllTasks() {
    const taskList = document.getElementById('taskListContainer');
    while(taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }

    const mainTasks = document.getElementById('mainTasks');
    while(mainTasks.firstChild) {
        mainTasks.removeChild(mainTasks.lastChild);
    }

    taskCount = 0;
    uniqueID = 1;
    hide('prompt');
    console.log('Deleted all tasks.');
    console.log('Task Count: ' + taskCount);
}

/**
 * Update the phase and number of tasks complete.
 */
function updatePhase() {
    if (phase == 'work') {
        tasksDone++;

        if (tasksDone % 4 != 0) {
            // If the tasks completed is less than 4 (1-3)
            phase = 'short break';
        } else {
            // If the tasks completed is 4
            phase = 'long break';
        }
    } else {
        phase = 'work';
    }
}

/**
 * Checks what the current timer state is from 
 * 'work', 'short break', 'long break', 'stopped'
 * to know what the timer should start counting down with.
 * 
 * @return {number} The time remaining for the current timer state.
 */
function setTimeRemaining() {
    return (phase == 'work') ? workLength :     
        (phase == 'short break') ? shortBreakLength : 
        (phase == 'stopped') ? secondsRemaining :
        longBreakLength;                        
}

/**
 * Sets the <title> element for users to see remaining time off-page.
 * 
 * @param {string} MMSS 'MM:SS' form
 */
function setPageTitle(MMSS) {
    let phaseSymbol;
    switch(phase) {
        case 'work':
            phaseSymbol = ' Work - ';
            break;
        case 'short break':
        case 'long break':
            phaseSymbol = ' Break -';
            break;
        case 'stopped':
            phaseSymbol = ' Stopped - '
            break;
    }

    document.title = MMSS + phaseSymbol + 'Potato Timer';
}


/**
 * Confirms a user's action to prevent major accidents. 
 * @param {string} action The action to confirm. Either 'Reset' or 'Delete' all.
 */
 function confirmationPrompt(action) {
     console.log('prompt');
    show('prompt');
    let message = document.getElementById('confirmMessage');
    let confirmBtn = document.getElementById('confirm');

    if(action == 'Reset') {
        message.innerHTML = 'Are you sure you want to reset the timer\'s cycle?';
        confirmBtn.onclick = reset;
    } else if (action == 'Delete') {
        message.innerHTML = 'Are you sure you want to delete all tasks?';
        confirmBtn.onclick = deleteAllTasks;
    }        


 }

/**
 * Shows an element by changing its display to block.
 * 
 * @param {string} id The id of the element to show.
 */
function show(id) {
    const elem = document.getElementById(id);
    // console.log('showing');
    elem.classList.replace('hidden', 'showing');
}

/**
 * Hides an element by changing its display to none.
 * CHANGE TO .CLASSLIST REPLACE .SHOW WITH .HIDE
 * @param {string} id The id of the element to hide.
 */
function hide(id) {
    const elem = document.getElementById(id);
    // console.log('hiding');
    elem.classList.replace('showing', 'hidden');
}

/** 
 * Save user's last theme selected locally 
 * TODO: Previous input settings, taskList, language
 */
function loadData() {
    theme = window.localStorage.getItem('theme');
    switch(theme) {
        case 'Potato':
            changeTheme('Potato');
            // console.log(theme);
            break;
        case 'Dark':
            changeTheme('Dark');
            // console.log(theme);
            break;
        case 'Light':
            changeTheme('Light');
            // console.log(theme);
            break;
        default: 
            console.log('no previous theme');
            changeTheme('Potato');
    }
}

/**
 * Changes the theme.
 * 
 * @event loadData() When the website is loaded.
 * @event button    When the user selects a theme.
 * @param {string} newTheme The theme to change to.
 */
function changeTheme(newTheme) {
    console.log("Changing theme to: " + newTheme);
    window.localStorage.setItem('theme', newTheme);
    theme = newTheme;
    const body = document.getElementById('background');
    body.className = 'theme' + newTheme;

    if(newTheme == 'Potato') {
        body.classList.add('potatoWork');
    }

    const circle = document.getElementById('circleTimer');
    circle.className = 'circle' + newTheme;

    if(newTheme == 'Dark') {
        let settingsIcon = document.getElementById('settingsIcon');
        settingsIcon.src = 'img/settings-dark.png';
        let buttons = document.getElementsByTagName('button');
        for(let i = 0; i < buttons.length; i ++) {
            buttons[i].className = 'darkButton';
        }
    
        let menus = document.getElementsByClassName('menu');
        for(let i = 0; i < menus.length; i++) {
            menus[i].classList.add('themeDark');
            if(menus[i].classList.contains('menuLight')) {
                menus[i].classList.remove('menuLight');
            }
        }

        let userTasks = document.getElementsByClassName('userTask');
        for(let i = 0; i < userTasks.length; i++) {
            
            userTasks[i].children[0].classList.replace('markLight', 'markDark');
            userTasks[i].children[2].src = 'img/delete-task-dark.png';
        }
    } else if (newTheme == 'Potato' || newTheme == 'Light') {
        let settingsIcon = document.getElementById('settingsIcon');
        settingsIcon.src = 'img/settings.png';

        let buttons = document.getElementsByTagName('button');
        for(let i = 0; i < buttons.length; i ++) {
            if(buttons[i].classList.contains('darkButton')) {
                buttons[i].classList.remove('darkButton');
            }
        }
    
        let menus = document.getElementsByClassName('menu');
        for(let i = 0; i < menus.length; i++) {
            menus[i].classList.add('menuLight');
            if(menus[i].classList.contains('themeDark')) {
                menus[i].classList.remove('themeDark');
            }
        }

        let userTasks = document.getElementsByClassName('userTask');
        for(let i = 0; i < userTasks.length; i++) {
            console.log('changing tasks');
            userTasks[i].children[0].classList.replace('markDark', 'markLight');
            userTasks[i].children[2].src = 'img/delete-task.png';
        }
    }

    hide('settingsMenu');
}
