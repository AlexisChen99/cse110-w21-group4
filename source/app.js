
/**
 * Phases: idle, work, small break, long break (lowercase)
 * 
 * i = idle, W = work, b = small break, B = long break
 * 
 * i-W-b-W-b-W-b-W-B (1 cycle)
 * i-0-1-0-1-0-1-0-2
 */

var pushEvent = function(arr, callback) {
    arr.push = function(e) {
        Array.prototype.push.call(arr,e);
        callback(arr);
    };
};

var popEvent = function(arr, callback) {
    arr.shift = function(e) {
        Array.prototype.shift.call(arr,e);
        callback(arr);
    };
};

let tasks = [];
// pushEvent(tasks, function(tasks) {
//     displayArray();
// });
// popEvent(tasks, function(tasks) {
//     displayArray();
// });
let task;
let phase = "idle";
let tasksDone = 0;
let secondsRemaining = 0;
let taskList;
var uniqueID = 1;
/**
 * Break lengths
 */

let workLength; // = document.getElementById("workLength");            // work time (seconds)   15 mins (900)
let smallBreakLength; // = 5;     // small break time      5 mins  (300)
let longBreakLength; // = 15;      // long break time        25 mins (1500)

window.onload = function() {
    document.getElementById("work-slider").addEventListener("input", setWork);
    document.getElementById("small-slider").addEventListener("input", setSmallBreak);
    document.getElementById("long-slider").addEventListener("input", setLongBreak);
}



/**
 * Start the timer and update the timer every second
 */
function start() {
    // let ms = (document.getElementById("workLength").value).split(":");
    // workLength = (+ms[0]) * 60 + (+ms[1]);
    // ms = (document.getElementById("shortBreak").value).split(":");;
    // smallBreakLength = (+ms[0]) * 60 + (+ms[1]);
    // ms = (document.getElementById("longBreak").value).split(":");;
    // longBreakLength = (+ms[0]) * 60 + (+ms[1]);
    // console.log(workLength);
    // console.log(smallBreakLength);
    // console.log(longBreakLength);

    workLength = 3;
    smallBreakLength = 5;
    longBreakLength = 10;
    console.log(workLength);
    console.log(smallBreakLength);
    console.log(longBreakLength);
    phase = "work";
    document.getElementById('phaseDisplay').innerHTML = phase;
    secondsRemaining = setTimeRemaining();
    console.log(secondsRemaining);
    tasksDone = 0;
    document.getElementById("reset").disabled = false;
    document.getElementById('start').disabled = true;

    if (tasks.length > 0) {
        let timer = setInterval(function () {
            // once all the tasks have ended, clear the timer
            if (tasks.length == 0) {
                clearInterval(timer);
                phase = "idle";
                // Update the phase
                document.getElementById('phaseDisplay').innerHTML = phase;
                // Disable the reset button
                document.getElementById('reset').disabled = true;
            } else {
                // Display the time MM:SS
                document.getElementById('timerDisplay').innerHTML = convertSeconds(secondsRemaining);
                secondsRemaining--;

                if (secondsRemaining < 0) {
                    if (phase == "work") {
                        // Update the tasks array (shift)
                        task = tasks.shift();
                        document.getElementById('mainTasks').innerHTML = tasks;
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

    if (tasks.length > 0) {
        let timer = setInterval(function () {
            // once all the tasks have ended, clear the timer
            if (tasks.length == 0) {
                clearInterval(timer);
                phase = "idle";
                // Update the phase
                document.getElementById('phaseDisplay').innerHTML = phase;
                // Disable the reset button
                document.getElementById('reset').disabled = true;
            } else {
                // Display the time MM:SS
                document.getElementById('timerDisplay').innerHTML = convertSeconds(secondsRemaining);
                secondsRemaining--;

                if (secondsRemaining < 0) {
                    if (phase == "work") {
                        // Update the tasks array (shift)
                        task = tasks.shift();
                        document.getElementById('mainTasks').innerHTML = tasks;
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
 * Resets the timer and empties the task queue
 */
function reset() {
    tasks = [];
    uniqueID = 1;
    // displayArray();
    phase = 'idle';
    document.getElementById('timerDisplay').innerHTML='00:00';
    document.getElementById('start').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('mainTasks').innerHTML = tasks;
}

/**
 * Skip to the next task
 */
function skip() {
    if(phase == "work") {
        tasks.shift();
        document.getElementById('phaseDisplay').innerHTML = phase;
    }
    phase = "work"
    secondsRemaining = setTimeRemaining();
    document.getElementById('mainTasks').innerHTML = tasks;
}

/** 
 * Adds a task to the task queue
 */
function addTask() {
    // Load the start button if it's not running
    if (phase == 'idle') {
        document.getElementById("start").disabled = false;
    }
    const task = document.getElementById("enterTask").value;
    if(task != '') {
        createTask(task);
    }
    document.getElementById("mainTasks").innerHTML = tasks;
    //alert('task added');
}

function createTask(text) {
    taskList = document.querySelector("#taskListContainer");
    let newTask = document.createElement("div");
    newTask.className = "userTask";
    newTask.id = uniqueID++;
    let img = ["img/unmarked-circle-outline.png", "img/pin.png", "img/delete-task.png"];
    let id = ["markDone", "pin", "singleDel"];
    let i = 0;
    let mark = document.createElement("img");
    mark.src = img[i];
    mark.id = id[i++];
    mark.addEventListener('click', function() {
        mark.src = "img/marked-done.png";
    });
    let pin = document.createElement("img");
    pin.src = img[i];
    pin.id = id[i++];
    // Event listener
    let del = document.createElement("img");
    del.src = img[i];
    del.id = id[i++];
    //Event Listener
    let content = document.createElement("p");
    content.innerHTML = text;
    tasks.push(text);

    newTask.appendChild(mark);
    newTask.appendChild(pin);
    newTask.appendChild(del);
    newTask.appendChild(content);
    taskList.appendChild(newTask);
}

/**
 * Update the global phases and tasks complete
 */
function updatePhase() {
    if (phase == "work") {
        tasksDone++;

        if (tasksDone % 4 != 0) {
            // If the tasks completed is less than 4 (1-3)
            phase = "shortBreak";
        } else {
            // If the tasks completed is 4
            phase = "longBreak";
        }
    }
    else {
        phase = "work";
    }
}

/**
 * Function that returns the break times after the completion of "work times"
 * 
 * @return the break time
 */
function setTimeRemaining() {
    return (phase == "work") ? workLength :     
        (phase == "shortBreak") ? smallBreakLength : 
        longBreakLength;                        
}

function setLongBreak(event) {
    longBreakLength = event.target.value * 60;
}

function setSmallBreak(event) {
    smallBreakLength = event.target.value * 60;
}

function setWork(event) {
    workLength = event.target.value * 60;
}

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