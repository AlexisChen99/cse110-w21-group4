
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

let img = ['img/unmarked-circle-outline.png', 'img/unpinned.png', 'img/delete-task.png'];
                            // Inactive images of a task component
let altImg = ['img/marked-done.png', 'img/pinned.png'];
                            // Active images of a task component
let potatoesEaten = 0;      // Number of pomo "work" phases completed.
let phase = 'idle';         // idle, work, short break, long break, stopped
let timer;                  // Represents the interval change of 1s
let MMSS;                   // {string} MM:SS format
let tasksDone = 0;          // TODO: Change its application
let secondsRemaining = 0;   // Displays on timer
let taskCount = 0;          // Used to keep track of all active tasks
var uniqueID = 1;           // Used to assign uniqueID's when deleting specific tasks 
                            // (may be copied from task list to main)
/**
 * Break lengths
 */

let workLength;             // work time (seconds)   15 mins (900)
let shortBreakLength;       // short break time      5 mins  (300)
let longBreakLength;        // long break time       25 mins (1500)

window.onload = function() {
    const deleteAll = document.getElementById('deleteAll');
    deleteAll.addEventListener('click', deleteAllTasks);
    const volumeIcon = document.getElementById("volumeIcon");
    volumeIcon.addEventListener("click", mute);
}

function mute() {
    const volumeIcon = document.getElementById("volumeIcon");
    volumeIcon.src = "img/volume-mute.png";
    const volume = document.getElementById("volume");
    volume.value = 0;
}
/**
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
 *  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *          INCOMPLETE: confirmationPrompt
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 
 * Resets the timer and empties the task queue.
 */
function reset() {
    // confirmationPrompt('reset');
    // displayArray();
    phase = 'idle';
    document.getElementById('timerDisplay').innerHTML='00:00';
    deleteAllTasks();
    taskCount = 0;
    uniqueID = 1;
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
    }
}

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!1
 *          INCOMPLETE
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

    let i = 0;
    let mark = addTaskComponents(i++, 'mark');
    let pin = addTaskComponents(i++, 'pin');
    let del = addTaskComponents(i++, 'del');
    let content = document.createElement('p');
    content.innerHTML = text;
    // tasks.push(content.innerHTML);

    // TODO MARK TASK


    pin.addEventListener('click', function() {
        pinnedTask = document.getElementById(newTask.id+'pin');
        if(!pinnedTask) {
            createExistingTask(text, newTask.id);
            pin.src = altImg[1];
        } else {
            pin.src = img[1];
            unpinTask(pinnedTask.id);
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
 * INCOMPLETE
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Creates "pinned" userTask in the mainTasks container. 
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

    let i = 0;
    let mark = addTaskComponents(i++, 'mark');
    let pin = addTaskComponents(i++, 'pinned');
    let del = addTaskComponents(i++, 'del');
    let content = document.createElement('p');
    content.innerHTML = text;

    // TODO MARK TASK

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
 * Append images to task components with image-switching functions
 * @param {*} index An index used to access the respective img, altImg, id for the part
 * @param {*} func Adds active/inactive image displays for mark and pin components
 */
function addTaskComponents(index, func) {
    let componentID = ['markDone', 'pin', 'singleDel'];
    let part = document.createElement('img');
    
    part.src = img[index];
    part.id = componentID[index];
    switch(func) {
        case 'mark':
            // TODO: Switch images back and forth
            break;
        case 'pinned':
            part.src = altImg[index];
            break;
        default:
    }
    return part;
}

/**
 * Unpins a task from the main display by deleting the pinned copy.
 * @param {string} uniqueID The id of the original task.
 * 
 * @example Unpin pinned task '1pin' calls function with '1pin'
 */
function unpinTask(uniqueID) {
    let pinnedTask = document.getElementById(uniqueID+'pin');
    const mainTasks = document.getElementById('mainTasks');
    mainTasks.removeChild(pinnedTask);
    let originalTask = document.getElementById(uniqueID).children
    originalTask[1].src = img[1];
}

/**
 * Deletes a task from both the task list and the main display, if possible.
 * @param {string} uniqueID The id of the original task.
 * 
 * @example Delete pinned task '1pin' calls function with '1'.
 */
function deleteTask(uniqueID) {    
    const pinnedTask = document.getElementById(uniqueID+'pin');
    console.log(pinnedTask);
    if(pinnedTask) {
        const mainTasks = document.getElementById('mainTasks');
        mainTasks.removeChild(pinnedTask);
    }
    const taskList = document.getElementById('taskListContainer');
    taskList.removeChild(document.getElementById(uniqueID));
}

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *          INCOMPLETE: confirmationPrompt
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Called by the deleteAll button.
 */
function deleteAllTasks() {
    // TODO confirm message
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   TODO: create logic for the prompt process
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  function confirmationPrompt(action) {
//     let prompt = document.getElementById('prompt');
//     prompt.style.display = 'block';
//     let message = document.getElementById('confirmMessage');
//     if(action == 'reset') {
//         message.innerHTML = 'Are you sure you want to reset the timer\'s cycle?';
//     } else if (action == 'delete') {
//         message.innerHTML = 'Are you sure you want to delete all tasks?';
//     }

//  }

// function confirm(action) {
//     return true;
// }

// function cancel() {
//     document.getElementById('prompt').style.display = 'none';
//     return false;
// }


// function setLongBreak(event) {
//     longBreakLength = event.target.value * 60;
// }

// function setShortBreak(event) {
//     shortBreakLength = event.target.value * 60;
// }

// function setWork(event) {
//     workLength = event.target.value * 60;
// }

// function displayArray() {
//     let ul = document.getElementById('task-list');
//     while(ul.firstChild) {
//         ul.removeChild(ul.firstChild);
//     }
//     for(let i = 0; i <tasks.length; i++) {
//         let newLi = document.createElement('li')
//         newLi.innerHTML = tasks[i];
//         ul.appendChild(newLi);
//     }
// }


