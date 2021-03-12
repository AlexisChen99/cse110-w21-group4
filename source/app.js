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
let workLength = 900;             // work time (seconds)   15 mins (900)
let shortBreakLength = 300;       // short break time      5 mins  (300)
let longBreakLength = 1500;        // long break time       25 mins (1500)
let timer;                  // Represents the interval change of 1s
let secondsRemaining = 0;   // Displays on timer
let MMSS;                   // {string} MM:SS format
let tasksDone = 0;          // TODO: Change its application
let pomosDone = 0;          // Number of pomo 'work' phases completed.
let taskCount = 0;          // Used to keep track of all active tasks
var uniqueID = 1;           // Used to assign uniqueID's when deleting specific tasks 
                            // (may be copied from task list to main)
var pinCount = 0;
let savedTasks = [];
let volume = 10;
let theme;                  // Potato, Dark, Light, undefined (Capitalized)
let mute = false;           // whether the volume is muted
let dance = true;           // show dancing potatoes or still potatoes

let congrats;               // the congratulations modal
let volumeInput;            // the volume input

window.onload = function() {
    volumeInput = document.getElementById('volume');
    volumeInput.addEventListener('change', changeVolume);

    /*const resetBtn = document.getElementById('reset');
    resetBtn.onclick = function() { confirmationPrompt('Stop'); };*/

    const cancelBtn = document.getElementById('cancel');
    cancelBtn.onclick = function() { hide('prompt'); };
    const backBtn = document.getElementById('back');
    backBtn.onclick = function() { back(); };
    const nextBtn = document.getElementById('next');
    nextBtn.onclick = function() { next(); };

    congrats = document.getElementById('congratsScreen');
    //make addTask execute on enter press
    window.addEventListener('keyup', function (e) {
        //if the pressed key is the enter key
        if(e.keyCode === 13) {
            addTask();
        }
    })
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == congrats) {
        congrats.style.display = 'none';
        }
    } 
    // Load's users theme, TODO previous input settings, taskList, language
    loadData();
    loadLang();
    loadTasks();
}

/**
 * Play the audio from break to work
 * id:   'breakToWorkAudio',         'workToBreakAudio'
 *      ,'victoryAudio'
 * 
 * @param {string} id The audio block involved with the rooster call
 */
function playAudio(id) {
    // Check if the volume is muted
    if(volume == 0) {
        return;
    }
    const audioObj = document.getElementById(id);
    //check if volume is not negative
    if(volume > 0)
    {
        //if volume is over 100, set it to 100
        if(volume > 100)
        {
            volume = 100;
        }

        audioObj.volume = volume / 100;
        if (mute == false) {
             audioObj.play();
        }
    }
}

/**
 * Adjusts volume for all sounds to be played
 *  
 */
function changeVolume(event) {
    //const volumeInput = document.getElementById('volume');
    volume = event.target.value;
    localStorage.setItem('volume', volume);
}

/**
 * Mute adjusts the boolean which decides whether we play audio or not
 */
function toggleMute() {
    // Audio icon and volume
    const volumeIcon = document.getElementById('volumeIcon');
    if (mute == false) {
        //change img
        volumeIcon.src = 'img/volume-mute.png';
        mute = true;
    } else {
        //change img
        volumeIcon.src = 'img/volume.png';
        mute = false;
    }

    localStorage.setItem('mute', mute);
}

/**
 * Sets the input times when the cycle isn't in progress.
 * @param {string} phase The phase to set the input times
 * @returns {number} The input time in seconds associated with the phase
 */
function setInputTimes(phase) {
    let minutes = document.getElementById(phase+'Min').value;
    let seconds = document.getElementById(phase+'Sec').value;

    localStorage.setItem(phase+'Min', minutes);
    localStorage.setItem(phase+'Sec', seconds);

    return (+minutes) * 60 + (+seconds);
}


/**
 * Starts the timer and decrements the timer's MM:SS every second.
 * If the timer was stopped and resumed, the input times are not modified.
 */
function start() {

    if(taskCount == 0) {
        return;
    }

    phase = 'work';

    // console.log('Setting input times');
    workLength = setInputTimes('work');
    shortBreakLength = setInputTimes('short');
    longBreakLength = setInputTimes('long');

    secondsRemaining = setTimeRemaining();
    //document.getElementById('reset').disabled = true;
    document.getElementById('start').innerHTML = dict['stop'][lang];
    document.getElementById('start').onclick = function() { confirmationPrompt('Stop'); };
    document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];

    if (taskCount > 0) {    
        timer = setInterval(function () {
            // once all the tasks have ended, clear the timer and show congrats screen
            if (taskCount == tasksDone) {
                clearInterval(timer);
                phase = 'idle';
                // Update the phase
                document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];
                // Disable the reset button
                //document.getElementById('reset').disabled = true;
                displayCongrats();
                stop();
                deleteAllTasks();
            } else {
                // Display the time MM:SS
                MMSS = convertSeconds(secondsRemaining);
                document.getElementById('timerDisplay').innerHTML = MMSS;
                document.title = setPageTitle(MMSS);
                secondsRemaining--;

                if (secondsRemaining < 0) {
                    if (phase == 'work') {
                        playAudio('workToBreakAudio');
                    }
                    if (phase != 'work') {
                        playAudio('breakToWorkAudio');
                    }
                    updatePhase();
                    secondsRemaining = setTimeRemaining();
                    document.getElementById('phaseDisplay').innerHTML = dict['phase'][phase][lang];
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
 * Update the phase and number of tasks complete.
 */
function updatePhase() {
    const circle = document.getElementById('circleTimer');

    if (phase == 'work') {
        pomosDone++;
        localStorage.setItem('pomosDone', pomosDone);
        if (theme == 'Potato') {
            circle.className = 'circlePotato';
            showPotatos();
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
        if(phase == 'long break') {
            hidePotatos();
            if (theme == 'Potato') {
                circle.className = 'circlePotatoBreak';
             }
         }
         phase = 'work';
         if (theme == 'Potato') {
            circle.className = 'circlePotato';
         }
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
        longBreakLength;                        
}

/**
 *  Appends a pomotato to the congrats screen
 *  for each pomo done and displays the congrats screen
 */
function displayCongrats() {
    for(let i = 0; i < pomosDone; i++) {
        let potato = document.createElement('img');
        if(dance) {
            potato.src = 'img/potato-dance.gif';
        } else {
            potato.src ='img/pomotato.png';
        }
        congrats.appendChild(potato);
    }
    document.getElementById("congratsText").innerHTML = 'it took you ' + pomosDone + ' pomos to finish all your tasks';
    playAudio('victoryAudio');
    congrats.style.display = 'block';
}

/** 
 * hides all of the dancing potato gifs 
 */
function hidePotatos() {
    document.getElementById('cycle0').style.display = 'none';
    document.getElementById('cycle1').style.display = 'none';
    document.getElementById('cycle2').style.display = 'none';
    document.getElementById('cycle3').style.display = 'none';
}

/**
 *   Shows a a number of dancing potatoe gives based on the pomosDone 
 */
function showPotatos() {
    document.getElementById('cycle'+pomosDone%4).style.display = 'inline';
}

/**
 * Switches between dancing and still potatos 
 */
function toggleDance() {
    if(dance == true) {
        dance = false;
        switchPotatoStill();
    } else {
        dance = true;
        switchPotatoDance();
    }
}

/**
 * Makes the src of all the pomotato images a gif
*/
function switchPotatoDance() {
    document.getElementById('cycle0').src = 'img/potato-dance.gif';
    document.getElementById('cycle1').src = 'img/potato-dance.gif';
    document.getElementById('cycle2').src = 'img/potato-dance.gif';
    document.getElementById('cycle3').src = 'img/potato-dance.gif';
}

/**
 * Makes the src of all the pomotato images a png
 */
function switchPotatoStill() {
    document.getElementById('cycle0').src = 'img/pomotato.png';
    document.getElementById('cycle1').src = 'img/pomotato.png';
    document.getElementById('cycle2').src = 'img/pomotato.png';
    document.getElementById('cycle3').src = 'img/pomotato.png';   
}

/**
 * Sets the <title> element for users to see remaining time off-page.
 * 
 * @param {string} MMSS 'MM:SS' form
 * @return {string} New page title
 */
function setPageTitle(MMSS) {
    let phaseSymbol;
    switch(phase) {
        case 'work':
            phaseSymbol = ' Work - ';
            break;
        case 'short break':
        case 'long break':
            phaseSymbol = ' Break - ';
            break;
        case 'stopped':
            phaseSymbol = ' Stopped - '
            break;
        default:
            phaseSymbol = ' - ';
    }

    return MMSS + phaseSymbol + 'Potato Timer';
}



/**
 * Resets the pomodoro cycle to the beginning.
 */
function stop() {
    // console.log('stop the timer and reset everything');
    clearInterval(timer);
    document.getElementById('circleTimer').className = 'circlePotato';
    let bg = document.getElementById('background');
    if(theme == 'Potato' && phase != 'work') {
        bg.classList.replace('potatoBreak', 'potatoWork');
    }
    hidePotatos();
    phase = 'idle';
    document.getElementById('timerDisplay').innerHTML='- - : - -';
    document.getElementById('phaseDisplay').innerHTML=dict['phase'][phase][lang];

    document.getElementById('start').innerHTML = dict['start'][lang];
    document.getElementById('start').onclick = start;

    //tasksDone = 0;
    pomosDone = 0;
    localStorage.setItem('pomosDone',pomosDone);

    uniqueID = 1;
    hide('prompt');
}

/** 
 * Adds a non-blank task to the list of tasks. 
 * 
 */
function addTask() {
    const task = document.getElementById('enterTask').value;
    document.getElementById('enterTask').value = '';
    if(task != '') {
        createTask(task);
 
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
    pinBtn.className = 'transparent';
    pinBtn.innerHTML = '<img src="img/unpinned.png" id="pin-' + uniqueID + '">';
    pinBtn.setAttribute('aria-label', 'Pin to the Main Display');

    let delBtn = document.createElement('button');
    delBtn.className = 'transparent';
    delBtn.setAttribute('aria-label', 'Delete this Task');

    if(theme == 'Dark') {
       markBtn.innerHTML = '<div class="markCircle markDark" id="mark-' + uniqueID + '"></div>'
       delBtn.innerHTML = '<img src="img/delete-task-dark.png" class="delete" id="del-'+uniqueID+'">';
    } else {
       markBtn.innerHTML = '<div class="markCircle markLight" id="mark-' + uniqueID + '"></div>'
       delBtn.innerHTML = '<img src="img/delete-task.png" class="delete" id="del-'+uniqueID+'">';
    }

    markBtn.onclick = function() {
        markedTask = document.getElementById('mark-' + newTask.id); 
        if(markedTask.classList.contains('markFill')) {
            unmark(newTask.id);
        } else { 
            markDone(newTask.id);
        }
    };

    pinBtn.onclick = function() {
        origTask = document.getElementById('pin-' + newTask.id);
        pinnedTask = document.getElementById(newTask.id + '-copy');
        if(!pinnedTask) {
            createExistingTask(text, newTask.id);
            origTask.src = 'img/pinned.png';
        } else {
            origTask.src = 'img/unpinned.png';
            unpinTask(newTask.id);
        }
    };

    delBtn.onclick = function() {
        deleteTask(newTask.id);
    }

    let content = document.createElement('p');
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
    // console.log(JSON.stringify(savedTasks));
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    // console.log(localStorage.getItem("savedTasks"));

    newTask.appendChild(markBtn);
    newTask.appendChild(pinBtn);
    newTask.appendChild(content);
    newTask.appendChild(delBtn);
    taskList.appendChild(newTask);

    if(pinCount < 1) {
        createExistingTask(text, uniqueID);
        document.getElementById('pin-'+uniqueID).src = 'img/pinned.png';
    }
    
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
function createExistingTask(text, uniqueID) {
    let mainTasks = document.getElementById('mainTasks');
    let pinTask = document.createElement('div');
    pinTask.className = 'userTask';
    pinTask.id = uniqueID + '-copy';

    let markBtn = document.createElement('button');
    markBtn.className = 'transparent';
    markBtn.setAttribute('aria-label', 'Mark as Done');
    
    let pinBtn = document.createElement('button');
    pinBtn.className = 'transparent';
    pinBtn.innerHTML = '<img src="img/pinned.png">';
    pinBtn.setAttribute('aria-label', 'Pin to the Main Display');

    let delBtn = document.createElement('button');
    delBtn.className = 'transparent';
    delBtn.setAttribute('aria-label', 'Delete this Task');

    if(theme == 'Dark') {
       markBtn.innerHTML = '<div class="markCircle markDark" id="mark-' + uniqueID + '-copy"></div>'
       delBtn.innerHTML = '<img src="img/delete-task-dark.png" class="delete" id="del-'+uniqueID+'-copy">';
    } else {
       markBtn.innerHTML = '<div class="markCircle markLight" id="mark-' + uniqueID + '-copy"></div>'
       delBtn.innerHTML = '<img src="img/delete-task.png" class="delete" id="del-'+uniqueID+'-copy">';
    }

    markBtn.onclick = function() {
        markedTask = document.getElementById('mark-' + uniqueID); 
        if(markedTask.classList.contains('markFill')) {
            unmark(uniqueID);
        } else { 
            markDone(uniqueID);
        }
    };

    pinBtn.onclick = function() {
        unpinTask(uniqueID);
    };

    delBtn.onclick = function() {
        deleteTask(uniqueID);
    }

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
    pinTask.appendChild(delBtn);

    mainTasks.appendChild(pinTask);

    pinCount++;
    if(document.getElementById('mark-'+uniqueID).classList.contains('markFill')) {
        document.getElementById('mark-'+uniqueID+'-copy').classList.add('markFill');
    }

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

    if(pinnedTask) {
        document.getElementById('mark-' + uniqueID + '-copy').classList.add('markFill');
    }
    tasksDone++;
    originalTask.setAttribute('marked','true');
    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';
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

    if(pinnedTask) {
        document.getElementById('mark-'+uniqueID+'-copy').classList.remove('markFill');
    }
    tasksDone--;
    originalTask.setAttribute('marked', 'false');
    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';
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
    document.getElementById('pin-'+uniqueID).src = 'img/unpinned.png';
    pinCount--;
}

/**
 * Deletes a task from both the task list and the main display, if possible.
 * Decreases the number of tasks by one.
 * @param {string} uniqueID The existing task's (task list) id.
 * 
 * @example Delete pinned task '1pin' calls function with '1'.
 */
function deleteTask(uniqueID) {   
    let taskText = document.getElementById(uniqueID).lastChild.innerText;
    
    const pinnedTask = document.getElementById(uniqueID + '-copy');

    if (document.getElementById(uniqueID).getAttribute('marked') == 'true'){
        tasksDone--;
    }

    if(pinnedTask) {
        const mainTasks = document.getElementById('mainTasks');
        mainTasks.removeChild(pinnedTask);

    }
    const taskListContainer = document.getElementById('taskListContainer');
    taskListContainer.removeChild(document.getElementById(uniqueID));
    taskCount--;


    const taskBtn = document.getElementById('taskBtn');
    taskBtn.innerHTML = dict['tasks'][lang] + ' (' + tasksDone + '/' + taskCount + ')';

    if (taskCount == 0){
        taskBtn.innerHTML = dict['tasks'][lang];
        taskBtn.style.fontSize = "25px";
        taskBtn.style.width = "150px";
    }

    savedTasks.splice(savedTasks.indexOf(taskText), 1);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));

}

/**
 * Deletes all of the tasks from both the tsak list and main display, if possible.
 * Resets taskCount to 0 and uniqueID to 1.
 * @event deleteAll text
 */
function deleteAllTasks() {
    const taskListContainer = document.getElementById('taskListContainer');
    while(taskListContainer.firstChild) {
        taskListContainer.removeChild(taskListContainer.lastChild);
    }

    const mainTasks = document.getElementById('mainTasks');
    while(mainTasks.firstChild) {
        mainTasks.removeChild(mainTasks.lastChild);
    }

    taskCount = 0;
    tasksDone = 0;
    uniqueID = 1;
    const taskBtn = document.getElementById('taskBtn');

    if (taskCount == 0){
        taskBtn.innerHTML = dict['tasks'][lang];
        taskBtn.style.fontSize = "25px";
        taskBtn.style.width = "150px";
    }
    localStorage.setItem('savedTasks', null);
    hide('prompt');
}




/**
 * Confirms a user's action to prevent major accidents. 
 * @param {string} action The action to confirm. Either 'Reset' or 'Delete' all.
 */
 function confirmationPrompt(action) {
    show('prompt');
    let message = document.getElementById('confirmMessage');
    let confirmBtn = document.getElementById('confirm');

    if(action == 'Stop') {
        message.innerHTML = dict['confirmReset'][lang];
        confirmBtn.onclick = stop;
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

var page = 1;
function back() {
    if(page <= 1) {
        return;
    }
    page--;
    let topic = document.getElementById('instrTopic');
    topic.innerText = dict[page][topic.id][lang];
    let content = document.getElementById('instrContent');
    content.innerText = dict[page][content.id][lang];
    let currPage = document.getElementById('page');
    currPage.innerText = dict[page][currPage.id][lang];
}

function next() {
    if(page >= 5) {
        hide('instructionsMenu');
        page = 0;
    }
    page++;
    let topic = document.getElementById('instrTopic');
    topic.innerText = dict[page][topic.id][lang];
    let content = document.getElementById('instrContent');
    content.innerText = dict[page][content.id][lang];
    let currPage = document.getElementById('page');
    currPage.innerText = dict[page][currPage.id][lang];
}
/** 
 * Save user's last theme and settings selected locally 
 */
function loadData() {

    //Theme data
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
            //console.log('no previous theme');
            changeTheme('Potato');
    }
    
    //Timer Data
    if(localStorage.getItem('longMin') != null) {
        //console.log('setting time settings');
        document.getElementById('longMin').value = localStorage.getItem('longMin');
        document.getElementById('longSec').value = localStorage.getItem('longSec');
        document.getElementById('shortMin').value = localStorage.getItem('shortMin');
        document.getElementById('shortSec').value = localStorage.getItem('shortSec');
        document.getElementById('workMin').value = localStorage.getItem('workMin');
        document.getElementById('workSec').value = localStorage.getItem('workSec');
    } else {
        console.log('no previous time settings');
    }

    //Volume Data
    if(localStorage.getItem('volume') != null) {
        volume = Number(localStorage.getItem('volume'));
        document.getElementById('volume').value = volume;
    } else {
        console.log('no previous volume settings');
    }

    //Mute Data
    if(localStorage.getItem('mute') == 'true') {
        toggleMute();
    } else {
        console.log('no previous mute settings');
    }

    //Pomo Data
    if(localStorage.getItem('pomosDone') != null) {
        pomosDone = localStorage.getItem('pomosDone');
    } else {
        console.log('no previous pomos');
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
    window.localStorage.setItem('theme', newTheme);
    theme = newTheme;
    const body = document.getElementById('background');
    body.className = 'theme' + newTheme;

    if(newTheme == 'Potato') {
        body.classList.add('potatoWork');
    } else {
        hidePotatos();
    }

    const circle = document.getElementById('circleTimer');
    circle.className = 'circle' + newTheme;

    if(newTheme == 'Dark') {
        let settingsIcon = document.getElementById('settingsIcon');
        settingsIcon.src = 'img/settings-dark.png';
        
        let volumeIcon = document.getElementById('volumeIcon');
        if(volume != 0) {
            volumeIcon.src = 'img/volume-dark.png';
        } else {
            volumeIcon.src = 'img/volume-mute-dark.png';
        }
        
        
        let buttons = document.getElementsByClassName('mainButton');
        for(let i = 0; i < buttons.length; i ++) {
            buttons[i].classList.add('darkButton');
        }
    
        let transparentBtns = document.getElementsByClassName('transparent');
        for(let i = 0; i < transparentBtns.length; i++) {
            transparentBtns[i].classList.remove('textDark');
        }

        let menus = document.getElementsByClassName('menu');
        for(let i = 0; i < menus.length; i++) {
            menus[i].classList.add('themeDark');
            if(menus[i].classList.contains('menuLight')) {
                menus[i].classList.remove('menuLight');
            }
        }

        let prompt = document.getElementById('prompt');
        prompt.classList.add('themeDark');
        if(prompt.classList.contains('themeLight')) {
            prompt.classList.remove('themeLight');
        }
        
        let userTasks = document.getElementsByClassName('userTask');
        for(let i = 0; i < userTasks.length; i++) {
            userTasks[i].children[1].firstChild.classList.replace('markLight', 'markDark');
            userTasks[i].children[4].firstChild.src = 'img/delete-task-dark.png';
        }
    } else if (newTheme == 'Potato' || newTheme == 'Light') {
        let settingsIcon = document.getElementById('settingsIcon');
        settingsIcon.src = 'img/settings.png';

        let volumeIcon = document.getElementById('volumeIcon');
        if(volume != 0) {
            volumeIcon.src = 'img/volume.png';
        } else {
            volumeIcon.src = 'img/volume-mute.png';
        }
                
        let buttons = document.getElementsByClassName('mainButton');
        for(let i = 0; i < buttons.length; i ++) {
            if(buttons[i].classList.contains('darkButton')) {
                buttons[i].classList.remove('darkButton');
            }
        }
    
        let transparentBtns = document.getElementsByClassName('transparent');
        for(let i = 0; i < transparentBtns.length; i++) {
            transparentBtns[i].classList.add('textDark');
        }

        let menus = document.getElementsByClassName('menu');
        for(let i = 0; i < menus.length; i++) {
            menus[i].classList.add('menuLight');
            if(menus[i].classList.contains('themeDark')) {
                menus[i].classList.remove('themeDark');
            }
        }
        
        let prompt = document.getElementById('prompt');
        prompt.classList.add('menuLight');
        if(prompt.classList.contains('themeDark')) {
            prompt.classList.remove('themeDark');
        }
        
        let userTasks = document.getElementsByClassName('userTask');
        for(let i = 0; i < userTasks.length; i++) {
            // console.log('changing tasks');
            userTasks[i].children[1].firstChild.classList.replace('markDark', 'markLight');
            userTasks[i].children[4].firstChild.src = 'img/delete-task.png';
        }
    }

    hide('settingsMenu');
}
/**
 * Loads the language settings and applies them
 */
function loadLang() {
    let savedLang = window.localStorage.getItem('lang');
    if(savedLang == null) { 
        if(navigator.language.includes('es')) {
            lang = 'es';
        } else if(navigator.language.includes('zh')) {
            lang = 'zh';
        } else if(navigator.language == 'ko') {
            lang = 'ko';
        } else {
            lang = 'en';
        }
        window.localStorage.setItem('lang', lang);
    } else {
        lang = savedLang;
        //console.log('language was saved');
    }
    
    document.documentElement.lang = lang; // <HTML> tag
    document.getElementById('title').innerText = dict['title'][lang];
    document.getElementById('phaseDisplay').innerText = dict['phase']['idle'][lang];
    document.getElementById('start').innerText = dict['start'][lang];
    document.getElementById('taskBtn').innerText = dict['tasks'][lang];
    //document.getElementById('reset').innerText = dict['reset'][lang];
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
    document.getElementById('volume').innerText = dict['volume'][lang];

    document.getElementById('tasksTitle').innerText = dict['tasks'][lang];
    document.getElementById('closeTasks').innerText = dict['close'][lang];
    document.getElementById('deleteAll').innerText = dict['deleteAll'][lang];
    
    document.getElementById('confirm').innerText = dict['confirm'][lang];
    document.getElementById('cancel').innerText = dict['cancel'][lang];
}

/**
 * Loads the tasks from local storage and creates them again
 * 
 */
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
    if(!savedTasks) {
        return;
    }

    for(let i = 0; i < savedTasks.length; i++) {
        createTask(savedTasks[i]);
    }
}

/**
 * Manually sets the phase--for testing.
 * 
 * @param {string} newPhase The phase to change to.
 */
function setPhase(newPhase) {
    phase = newPhase;
}

module.exports = {
    setPhase,
    convertSeconds,
    setTimeRemaining,
    setPageTitle
 }