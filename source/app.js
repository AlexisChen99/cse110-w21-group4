/**
 * Phases: idle, work, short break, long break (lowercase)
 * 
 * i = idle, W = work, b = short break, B = long break
 * 
 * i-W-b-W-b-W-b-W-B (1 cycle)
 * i-0-1-0-1-0-1-0-2
 */
let lang;
let phase = 'idle';         // idle, work, short break, long break, stopped
let workLength = 5;             // work time (seconds)   15 mins (900)
let shortBreakLength = 5;       // short break time      5 mins  (300)
let longBreakLength = 10;        // long break time       25 mins (1500)
let timer;                  // Represents the interval change of 1s
let secondsRemaining = 0;   // Displays on timer
let MMSS;                   // {string} MM:SS format
let tasksDone = 0;          // TODO: Change its application
let pomosDone = 0;          // Number of pomo 'work' phases completed.
let taskCount = 0;          // Used to keep track of all active tasks
var uniqueID = 1;           // Used to assign uniqueID's when deleting specific tasks 
// (may be copied from task list to main)
let savedTasks = [];
let volume = 25;
let theme;                  // Potato, Dark, Light, undefined (Capitalized)
let mute = false;
let animation = true;

window.onload = function () {
    const volumeInput = document.getElementById('volume');
    volumeInput.addEventListener('change', changeAudio);

    // const resetBtn = document.getElementById('reset');
    // resetBtn.onclick = function() { confirmationPrompt('Reset'); };

    // Load's users theme, TODO previous input settings, taskList, language
    loadTheme();
    loadLang();
    loadTasks();
}





/**
 * Play the audio from break to work
 * id:   'breakToWorkAudio',         'workToBreakAudio'
 * Path: 'audio/Rooster Crow.wav', 'audio/Dove.wav'
 * 
 * @param {string} id The audio block involved with the rooster call
 */
function playAudio(id) {
    // Check if the volume is muted
    if (volume == 0) {
        return;
    }

    const audioObj = document.getElementById(id);
    audioObj.volume = volume / 100;

    if (mute == false) {
        audioObj.play();
    }
}

/**
 * Locally stores audio. 
 */
function changeAudio() {
    const volumeInput = document.getElementById('volume');
    volume = volumeInput.value;
    windwos.localStorage.setItem('volume', volume);
}

/**
 * 
 */
function toggleMute() {
    // Audio icon and volume
    const volumeIcon = document.getElementById('volumeIcon');
    if (mute == false) {
        //change img
        if (theme == 'Dark') {
            volumeIcon.src = 'img/volume-mute-dark.png';
        } else {
            volumeIcon.src = 'img/volume-mute.png';
        }
        mute = true;
    } else {
        //change img
        if (theme == 'Dark') {
            volumeIcon.src = 'img/volume-dark.png';
        } else {
            volumeIcon.src = 'img/volume.png';
        }
        mute = false;
    }
    windows.localStorage.setItem('mute', mute);
}

/**
 * Disables or enables the dancing potato animation. 
 * @returns Flag if animations are turned on or off
 */
function toggleAnimation() {
    animation = !animation;
    if (animation) { // Turn on animation and say disable
        document.getElementById('animationBtn').innerText = dict['disableAnimation'][lang];
    } else {
        hidePotatos();
        document.getElementById('animationBtn').innerText = dict['enableAnimation'][lang];
    }
    return animation;
}
/**
 * MIGHT CHANGE TO LISTEN TO AN 'INPUT' EVENT LISTENER
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 * Sets the input times when the cycle isn't in progress.
 * @param {string} phase The phase to set the input times
 * @returns {number} The input time in seconds associated with the phase
 */
function setInputTimes(phase) {
    let minutes = document.getElementById(phase + 'Min').value;
    let seconds = document.getElementById(phase + 'Sec').value;
    return (+minutes) * 60 + (+seconds);
}

/**
 * Starts the timer and decrements the timer's MM:SS every second.
 * If the timer was stopped and resumed, the input times are not modified.
 */
function start() {
    if (phase != 'stopped') {
        console.log('Setting input times');
        phase = 'work';
        workLength = setInputTimes('work');
        shortBreakLength = setInputTimes('short');
        longBreakLength = setInputTimes('long');
    }


    secondsRemaining = setTimeRemaining();
    document.getElementById('reset').disabled = true;
    document.getElementById('start').innerHTML = dict['stop'][lang];
    document.getElementById('start').onclick = stop;
    document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];
    //hide task container
    hideOptions();
    // Still synchronous
    if (taskCount > 0) {
        timer = setInterval(function () {
            // once all the tasks have ended, clear the timer
            if (taskCount == tasksDone) {   // FIXME
                clearInterval(timer);
                phase = 'idle';
                // Update the phase
                document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];
                document.getElementById('timerDisplay').innerHTML = '- - : - -';
                document.getElementById('start').innerHTML = dict['start'][lang];
                document.getElementById('start').onclick = start;
                showOptions();
            } else {
                // Display the time MM:SS
                MMSS = convertSeconds(secondsRemaining);
                document.getElementById('timerDisplay').innerHTML = MMSS;
                setPageTitle(MMSS);
                secondsRemaining--;

                if (secondsRemaining < 0) {
                    if (phase == 'work') {
                        playAudio('breakToWorkAudio');
                    }
                    if (phase != 'work') {
                        playAudio('breakToWorkAudio');
                    }
                    updatePhase();
                    secondsRemaining = setTimeRemaining();
                    document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];

                    // To change to dark background, need to create a new class
                    const background = document.getElementById('background');
                    if (theme == 'Potato' && phase == 'short break' || phase == 'long break') {
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

    var timerString = '';
    if (minutes < 10) { timerString = '0'; }
    timerString += minutes + ':';
    if (seconds < 10) { timerString += '0'; }
    timerString += seconds;
    console.log(timerString);
    return timerString;
}

/**
 * Update the phase and number of tasks complete.
 */
function updatePhase() {
    const circle = document.getElementById('circleTimer');

    if (phase == 'work') {
        pomosDone++;
        if (theme == 'Potato') {
            circle.className = 'circlePotato';
            if (animation) {
                showPotatos();
            }
        }


        if (pomosDone % 4 != 0) {
            // If the pomos completed is less than 4 (1-3)
            phase = 'short break';
            if (theme == 'Potato') {
                circle.className = 'circlePotatoBreak';
            }
        } else {
            // If the pomos completed is divisible by 4
            phase = 'long break';
            if (theme == 'Potato') {
                circle.className = 'circlePotatoBreak';
            }
        }
    } else {
        if (phase == 'long break') {
            if (theme == 'Potato') {
                circle.className = 'circlePotatoBreak';
                hidePotatos();
            }
        }
        phase = 'work';
        if (theme == 'Potato') {
            circle.className = 'circlePotato';
        }
    }
}

/** hides all of the dancing potato gifs */
function hidePotatos() {
    document.getElementById('cycle1').style.display = 'none';
    document.getElementById('cycle2').style.display = 'none';
    document.getElementById('cycle3').style.display = 'none';
    document.getElementById('cycle0').style.display = 'none';
}

/**shows a a number of dancing potatoe gives based on the pomosDone */
function showPotatos() {

    document.getElementById('cycle' + pomosDone % 4).style.display = 'inline';

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
    switch (phase) {
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
 * Stops the timer. The current time remaining in the phase is saved. 
 */
function stop() {
    clearInterval(timer);
    phase = 'stopped';
    setPageTitle(MMSS);
    document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];
    document.getElementById('reset').disabled = false;
    document.getElementById('start').innerHTML = dict['start'][lang];
    document.getElementById('start').onclick = start;
    // document.getElementById('taskManager').style.opacity = 1; //show task Container
    // document.getElementById('settingsIcon').style.opacity = 1; // show settings icon (top right)
    // document.getElementById('help').style.opacity = 1; //show help icon
    showOptions();

}
/**
 * Resets the pomodoro cycle to the beginning.
 */
function reset() {
    console.log('reset timer');
    phase = 'idle';

    document.getElementById('timerDisplay').innerHTML = '- - : - -';
    tasksDone = 0;
    pomosDone = 0;

    uniqueID = 1;
    hide('prompt');
}

/** 
 * Adds a non-blank task to the list of tasks. 
 */
function addTask() {
    const task = document.getElementById('enterTask').value;
    document.getElementById('enterTask').value = '';
    if (task != '') {
        createTask(task);
        console.log('Created task with ID ' + uniqueID);
        console.log('Task count: ' + taskCount);

    }
}

/**
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
    newTask.id = uniqueID;

    let markBtn = document.createElement('button');
    markBtn.className = 'transparent';
    markBtn.setAttribute('aria-label', 'Mark as Done');

    let pinBtn = document.createElement('button');
    pinBtn.classList.add('transparent'); //, 'smallIcon');
    pinBtn.innerHTML = '<img src="img/unpinned.png" id="pin-' + uniqueID + '">';
    pinBtn.setAttribute('aria-label', 'Pin to the Main Display');

    let delBtn = document.createElement('button');
    delBtn.classList.add('transparent', 'smallIcon');
    delBtn.setAttribute('aria-label', 'Delete this Task');

    if (theme == 'Dark') {
        markBtn.innerHTML = '<div class="markCircle markDark" id="mark-' + uniqueID + '"></div>'
        delBtn.innerHTML = '<img src="img/delete-task-dark.png" class="delete" id="del-' + uniqueID + '">';
    } else {
        markBtn.innerHTML = '<div class="markCircle markLight" id="mark-' + uniqueID + '"></div>'
        delBtn.innerHTML = '<img src="img/delete-task.png" class="delete" id="del-' + uniqueID + '">';
    }

    markBtn.onclick = function () {
        markedTask = document.getElementById('mark-' + newTask.id);
        if (markedTask.classList.contains('markFill')) {
            unmark(newTask.id);
        } else {
            markDone(newTask.id);
        }
    };

    pinBtn.onclick = function () {
        origTask = document.getElementById('pin-' + newTask.id);
        pinnedTask = document.getElementById(newTask.id + '-copy');
        if (!pinnedTask) {
            createPinnedTask(text, newTask.id);
            origTask.src = 'img/pinned.png';
        } else {
            origTask.src = 'img/unpinned.png';
            unpinTask(newTask.id);
        }
    };

    delBtn.onclick = function () {
        deleteTask(newTask.id);
    }

    let content = document.createElement('p');
    content.id = 'p' + uniqueID;
    content.innerHTML = text;

    let ariaSkip = document.createElement('a');
    ariaSkip.href = '#' + (uniqueID + 1);
    ariaSkip.className = 'ariaSkipTask';
    ariaSkip.innerText = 'Skip';
    newTask.appendChild(ariaSkip);

    taskCount++;
    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';
    taskBtn.style.width = "fit-content";

    savedTasks.push(text);
    console.log(JSON.stringify(savedTasks));
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    console.log(localStorage.getItem("savedTasks"));

    newTask.appendChild(markBtn);
    newTask.appendChild(pinBtn);
    newTask.appendChild(content);
    newTask.appendChild(delBtn);
    taskList.appendChild(newTask);

    if (taskCount == 1) {
        createPinnedTask(text, uniqueID);
        document.getElementById('pin-' + uniqueID).src = 'img/pinned.png';
    }

    notifyUser('addTask');
    return uniqueID++;
}

/** 
 * Creates 'pinned' userTask in the mainTasks container. 
 * This display an existing task on the main page.
 * A pinned task is identified as '#pin' where # is the uniqueID.
 * Inherits the four userTask components, 
 * The eventListener for pin is different.
 * 
 * @param {string} text     A copy of the user's task.
 * @param {string} uniqueID The existing task's id.
 */
function createPinnedTask(text, uniqueID) {
    let mainTasks = document.getElementById('mainTasks');
    let pinTask = document.createElement('div');
    pinTask.classList.add('userTask', 'pinnedTask');
    pinTask.id = uniqueID + '-copy';

    let markBtn = document.createElement('button');
    markBtn.className = 'transparent';
    markBtn.setAttribute('aria-label', 'Mark as Done');

    let pinBtn = document.createElement('button');
    pinBtn.classList.add('transparent'); //, 'smallIcon');
    pinBtn.innerHTML = '<img src="img/pinned.png">';
    pinBtn.setAttribute('aria-label', 'Pin to the Main Display');

    // let delBtn = document.createElement('button');
    // delBtn.classList.add('transparent', 'smallIcon');
    // delBtn.setAttribute('aria-label', 'Delete this Task');

    if (theme == 'Dark') {
        markBtn.innerHTML = '<div class="markCircle markDark" id="mark-' + uniqueID + '-copy"></div>'
        //    delBtn.innerHTML = '<img src="img/delete-task-dark.png" class="delete" id="del-'+uniqueID+'-copy">';
    } else {
        markBtn.innerHTML = '<div class="markCircle markLight" id="mark-' + uniqueID + '-copy"></div>'
        //    delBtn.innerHTML = '<img src="img/delete-task.png" class="delete" id="del-'+uniqueID+'-copy">';
    }

    markBtn.onclick = function () {
        markedTask = document.getElementById('mark-' + uniqueID);
        if (markedTask.classList.contains('markFill')) {
            unmark(uniqueID);
        } else {
            markDone(uniqueID);
        }
    };

    pinBtn.onclick = function () {
        unpinTask(uniqueID);
    };

    // delBtn.onclick = function() {
    //     deleteTask(uniqueID);
    // }

    let content = document.createElement('p');
    content.innerHTML = text;

    let ariaSkip = document.createElement('a');
    ariaSkip.href = '#' + (uniqueID + 1) + '-copy';
    ariaSkip.className = 'ariaSkipTask';
    ariaSkip.innerText = 'Skip';
    pinTask.appendChild(ariaSkip);

    pinTask.appendChild(markBtn);
    pinTask.appendChild(pinBtn);
    pinTask.appendChild(content);
    // pinTask.appendChild(delBtn);

    mainTasks.appendChild(pinTask);

    if (document.getElementById('mark-' + uniqueID).classList.contains('markFill')) {
        document.getElementById('mark-' + uniqueID + '-copy').classList.add('markFill');
    }
    setPinnedSkip();
    notifyUser('pinTask');
    return uniqueID;
}

/**
 * Visually marks a task if a user completes the task.
 * This affects the task list and main display, if possible.
 * Increments the number of tasks completed.
 * @param {string} uniqueID The existing task's (task list) id.
 */
function markDone(uniqueID) {
    let originalTask = document.getElementById(uniqueID);
    document.getElementById('mark-' + uniqueID).classList.add('markFill');
    let pinnedTask = document.getElementById(uniqueID + '-copy');

    if (pinnedTask) {
        document.getElementById('mark-' + uniqueID + '-copy').classList.add('markFill');
    }
    tasksDone++;
    originalTask.setAttribute('marked', 'true');
    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';
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
    document.getElementById('mark-' + uniqueID).classList.remove('markFill');
    let pinnedTask = document.getElementById(uniqueID + '-copy');

    if (pinnedTask) {
        document.getElementById('mark-' + uniqueID + '-copy').classList.remove('markFill');
    }
    tasksDone--;
    originalTask.setAttribute('marked', 'false');
    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';
    console.log('Tasks done: ' + tasksDone);
}

/**
 * Unpins a task from the main display by deleting the pinned copy.
 * @param {string} uniqueID The existing task's (task list) id.
 * 
 * @example Unpin pinned task '1pin' calls function with '1pin'
 */
function unpinTask(uniqueID) {
    let pinnedTask = document.getElementById(uniqueID + '-copy');
    const mainTasks = document.getElementById('mainTasks');
    mainTasks.removeChild(pinnedTask);
    document.getElementById('pin-' + uniqueID).src = 'img/unpinned.png';
    notifyUser('unpinTask');
    setPinnedSkip();
}

/**
 * Deletes a task from both the task list and the main display, if possible.
 * Decreases the number of tasks by one.
 * @param {string} uniqueID The existing task's (task list) id.
 * 
 * @example Delete pinned task '1pin' calls function with '1'.
 */
function deleteTask(uniqueID) {
    let taskText = document.getElementById('p' + uniqueID).innerText;

    const pinnedTask = document.getElementById(uniqueID + '-copy');

    if (document.getElementById(uniqueID).getAttribute('marked') == 'true') {
        tasksDone--;
    }

    if (pinnedTask) {
        const mainTasks = document.getElementById('mainTasks');
        mainTasks.removeChild(pinnedTask);
        console.log('Deleted a pinned task.');
    }
    const taskListContainer = document.getElementById('taskListContainer');
    taskListContainer.removeChild(document.getElementById(uniqueID));
    taskCount--;

    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';

    if (taskCount == 0) {
        taskBtn.innerHTML = dict['tasks'][lang];
        taskBtn.style.fontSize = "25px";
        taskBtn.style.width = "150px";
    }

    // ARIA
    setARIASkip();

    savedTasks.splice(savedTasks.indexOf(taskText), 1);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));

    notifyUser('delTask');
    console.log('Task count: ' + taskCount);
}
// So you can see me code
/**
 * Deletes all of the tasks from both the tsak list and main display, if possible.
 * Resets taskCount to 0 and uniqueID to 1.
 * @event deleteAll text
 */
function deleteAllTasks() {
    const taskListContainer = document.getElementById('taskListContainer');
    while (taskListContainer.firstChild) {
        taskListContainer.removeChild(taskListContainer.lastChild);
    }

    const mainTasks = document.getElementById('mainTasks');
    while (mainTasks.firstChild) {
        mainTasks.removeChild(mainTasks.lastChild);
    }

    taskCount = 0;
    uniqueID = 1;
    const taskBtn = document.getElementById('taskBtn');

    if (taskCount == 0) {
        taskBtn.innerHTML = dict['tasks'][lang];
        taskBtn.style.fontSize = "25px";
        taskBtn.style.width = "150px";
    }
    savedTasks = [];
    localStorage.removeItem('savedTasks');
    hide('prompt');
    notifyUser('deleteAll');
    console.log('Deleted all tasks.');
    console.log('Task Count: ' + taskCount);
}

/**
 * If task 1 gets deleted, no change
 * @param {*} uniqueID 
 */
function setARIASkip() {
    let taskListContainer = document.getElementById('taskListContainer');
    let userTaskList = taskListContainer.children; // <a list of userTask nodes
    for (let i = 0; i < userTaskList.length - 1; i++) {
        let userTask = userTaskList[i]; // The first userTask
        let nextTask = userTaskList[i + 1];
        userTask.firstChild.href = '#' + nextTask.id;
    }
}

function setPinnedSkip() {
    let mainTasks = document.getElementById('mainTasks');
    let pinnedTaskList = mainTasks.children;
    for (let i = 0; i < pinnedTaskList.length - 1; i++) {
        let pinnedTask = pinnedTaskList[i];
        let nextTask = pinnedTaskList[i + 1];
        pinnedTask.firstChild.href = '#' + nextTask.id;
    }
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

    if (action == 'Reset') {
        message.innerHTML = dict['confirmReset'][lang];
        confirmBtn.onclick = reset;
    } else if (action == 'Delete') {
        message.innerHTML = dict['confirmDeleteAll'][lang];
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
 * 
 */
function showOptions() {
    //show task Container
    document.getElementById('taskManager').classList.replace('opacityHide', 'opacityShow');
    //show settings icon
    document.getElementById('settingsIcon').classList.replace('opacityHide', 'opacityShow');
    //show help icon
    document.getElementById('help').classList.replace('opacityHide', 'opacityShow');
}

/**
 * 
 */
function hideOptions() {
    document.getElementById('taskManager').classList.replace('opacityShow', 'opacityHide'); //hide task Container
    document.getElementById('settingsIcon').classList.replace('opacityShow', 'opacityHide');//hide settings Icon
    document.getElementById('help').classList.replace('opacityShow', 'opacityHide');   //hide help icon
}


var page = 0;
function back() {
    if (page <= 1) {
        return;
    }
    --page;
    let topic = document.getElementById('instrTopic');
    topic.innerText = dict[page][topic.id][lang];
    let content = document.getElementById('instrContent');
    content.innerText = dict[page][content.id][lang];
    if (page != 4) {
        content.classList.add('leftAlign');
    }
    document.getElementById('page').innerText = page + ' / 4';
}

function next() {
    if (page >= 4) {
        hide('instructionsMenu');
        page = 0;
        document.getElementById('next').innerHTML = 'Next';
        return;
    }
    page++;
    let topic = document.getElementById('instrTopic');
    topic.innerText = dict[page][topic.id][lang];
    let content = document.getElementById('instrContent');
    content.innerText = dict[page][content.id][lang];
    document.getElementById('page').innerText = page + ' / 4';
    if (page == 4) {
        content.classList.remove('leftAlign');
        content.innerText = content.innerText +
            'Alexis Chen\nElizabeth Cho\nKevin Jang\nMarco Kuan\nAhmad Milad\nRohan Patel\nMiaoqiu Sun\nJessie Zou\n';
        content.innerHTML = content.innerHTML + '<a href="https://github.com/AlexisChen99/cse110-w21-group4"><img src="img/GitHub-Mark-32px.png"></a>';
        document.getElementById('next').innerHTML = 'Close';
    }
}
//
function notifyUser(action) {
    let notif = document.getElementById('notificationBar');
    switch (action) {
        case 'addTask':
            notif.innerText = 'a task was added';
        case 'pinTask':
        case 'unpinTask':
        case 'delTask':
        case 'deleteAll':
            notif.innerText = dict['notification'][action][lang];
            break;
        default:
            notif.innerText = '';
    }
    // show('notificationBar');
    // setTimeout(function() {
    //     hide('notificationBar')
    // }, 3000);
    setTimeout(function () {
        notif.innerText = '';
    }, 5000);
    return action;
}

/** 
 * Save user's last theme selected locally 
 * TODO: Previous input settings, taskList, language
 */
function loadTheme() {
    theme = window.localStorage.getItem('theme');
    switch (theme) {
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
 * @event loadTheme() When the website is loaded.
 * @event button    When the user selects a theme.
 * @param {string} newTheme The theme to change to.
 */
function changeTheme(newTheme) {
    console.log("Changing theme to: " + newTheme);
    window.localStorage.setItem('theme', newTheme);
    theme = newTheme;
    const body = document.getElementById('background');
    body.className = 'theme' + newTheme;

    if (newTheme == 'Potato') {
        body.classList.add('potatoWork');
    }

    const circle = document.getElementById('circleTimer');
    circle.className = 'circle' + newTheme;

    if (newTheme == 'Dark') {
        let settingsIcon = document.getElementById('settingsIcon');
        settingsIcon.src = 'img/settings-dark.png';

        let volumeIcon = document.getElementById('volumeIcon');
        if (volume != 0) {
            volumeIcon.src = 'img/volume-dark.png';
        } else {
            volumeIcon.src = 'img/volume-mute-dark.png';
        }


        let buttons = document.getElementsByClassName('mainButton');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('darkButton');
        }

        let transparentBtns = document.getElementsByClassName('transparent');
        for (let i = 0; i < transparentBtns.length; i++) {
            transparentBtns[i].classList.remove('textDark');
        }

        let menus = document.getElementsByClassName('menu');
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('themeDark');
            if (menus[i].classList.contains('menuLight')) {
                menus[i].classList.remove('menuLight');
            }
        }

        let prompt = document.getElementById('prompt');
        prompt.classList.add('themeDark');
        if (prompt.classList.contains('themeLight')) {
            prompt.classList.remove('themeLight');
        }

        let userTasks = document.getElementsByClassName('userTask');
        for (let i = 0; i < userTasks.length; i++) {
            userTasks[i].children[1].firstChild.classList.replace('markLight', 'markDark');
            userTasks[i].children[4].firstChild.src = 'img/delete-task-dark.png';
        }
    } else if (newTheme == 'Potato' || newTheme == 'Light') {
        let settingsIcon = document.getElementById('settingsIcon');
        settingsIcon.src = 'img/settings.png';

        let volumeIcon = document.getElementById('volumeIcon');
        if (volume != 0) {
            volumeIcon.src = 'img/volume.png';
        } else {
            volumeIcon.src = 'img/volume-mute.png';
        }

        let buttons = document.getElementsByClassName('mainButton');
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('darkButton')) {
                buttons[i].classList.remove('darkButton');
            }
        }

        let transparentBtns = document.getElementsByClassName('transparent');
        for (let i = 0; i < transparentBtns.length; i++) {
            transparentBtns[i].classList.add('textDark');
        }

        let menus = document.getElementsByClassName('menu');
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('menuLight');
            if (menus[i].classList.contains('themeDark')) {
                menus[i].classList.remove('themeDark');
            }
        }

        let prompt = document.getElementById('prompt');
        prompt.classList.add('menuLight');
        if (prompt.classList.contains('themeDark')) {
            prompt.classList.remove('themeDark');
        }

        let userTasks = document.getElementsByClassName('userTask');
        for (let i = 0; i < userTasks.length; i++) {
            console.log('changing tasks');
            userTasks[i].children[1].firstChild.classList.replace('markDark', 'markLight');
            userTasks[i].children[4].firstChild.src = 'img/delete-task.png';
        }
    }

    if (theme == 'Potato') {
        show('animationBtn');
    } else {
        hide('animationBtn');
    }

    hide('settingsMenu');
}

function setLang(selectedLang) {
    window.localStorage.setItem('lang', selectedLang);
    window.location.reload();
}

function loadLang() {
    let savedLang = window.localStorage.getItem('lang');
    if (savedLang == null) {
        console.log("No saved language detected. Your browser's language is: " + navigator.language);
        if (navigator.language.includes('es')) {
            lang = 'es';
        } else if (navigator.language.includes('zh')) {
            lang = 'zh';
        } else if (navigator.language == 'ko') {
            lang = 'ko';
        } else {
            lang = 'en';
        }
        window.localStorage.setItem('lang', lang);
    } else {
        lang = savedLang;
        console.log('language was saved');
    }

    document.documentElement.lang = lang; // <HTML> tag
    document.getElementById('title').innerText = dict['title'][lang];
    document.getElementById('phaseDisplay').innerText = dict['phase']['idle'][lang];
    document.getElementById('start').innerText = dict['start'][lang];
    document.getElementById('taskBtn').innerText = dict['tasks'][lang];
    // document.getElementById('reset').innerText = dict['reset'][lang];
    document.getElementById('enterTask').placeholder = dict['enterTask'][lang];
    document.getElementById('taskAdder').innerText = dict['add'][lang];

    document.getElementById('settingsTitle').innerText = dict['settings'][lang];
    document.getElementById('closeSettings').innerText = dict['close'][lang];
    document.getElementById('selectTheme').innerText = dict['selectTheme'][lang];
    document.getElementById('lightTheme').innerText = dict['lightTheme'][lang];
    document.getElementById('darkTheme').innerText = dict['darkTheme'][lang];
    document.getElementById('potatoTheme').innerText = dict['potatoTheme'][lang];
    document.getElementById('workTime').innerText = dict['workTime'][lang];
    document.getElementById('shortTime').innerText = dict['shortBreak'][lang];
    document.getElementById('longTime').innerText = dict['longBreak'][lang];
    // document.getElementById('cycleLength').innerText = dict['cycleLength'][lang];
    document.getElementById('volume').innerText = dict['volume'][lang];

    document.getElementById('tasksTitle').innerText = dict['tasks'][lang];
    document.getElementById('closeTasks').innerText = dict['close'][lang];
    document.getElementById('deleteAll').innerText = dict['deleteAll'][lang];

    document.getElementById('confirm').innerText = dict['confirm'][lang];
    document.getElementById('cancel').innerText = dict['cancel'][lang];
}

/**
 * All unmarked tasks are loaded onto the page.
 * @returns nothing
 */
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
    if (!savedTasks) {
        return;
    }

    for (let i = 0; i < savedTasks.length; i++) {
        createTask(savedTasks[i]);
    }
}