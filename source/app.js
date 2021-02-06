
/**
 * Phases: idle, work, small_break, long_break (lowercase)
 * 
 * i = idle, W = work, b = small break, B = big break
 * 
 * i-W-b-W-b-W-b-W-B (1 cycle)
 * i-0-1-0-1-0-1-0-2
 */

let tasks = [];
let task;
let phase = "idle";
let tasksDone = 0;

/**
 * Break lengths
 */
let work_length = 5;            // work time (seconds)   15 mins (900)
let small_break_length = 7;     // small break time      5 mins  (300)
let big_break_length = 10;      // big break time        25 mins (1500)

window.onload = function() {
    document.getElementById("work-slider").addEventListener("input", setWork);
    document.getElementById("small-slider").addEventListener("input", setSmallBreak);
    document.getElementById("big-slider").addEventListener("input", setBigBreak);
}



/**
 * Start the timer and update the timer every second
 */
function start() {
    phase = "work";
    document.getElementById('phaseDisplay').innerHTML = phase;
    var secondsRemaining = setTimeRemaining();
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

                if (secondsRemaining <= 0) {
                    if (phase == "work") {
                        // Update the tasks array (shift)
                        task = tasks.shift();
                        document.getElementById('listTasks').innerHTML = tasks;
                    }

                    updatePhase();
                    document.getElementById('phaseDisplay').innerHTML = phase;
                    secondsRemaining = setTimeRemaining();
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
    phase = 'idle';
    document.getElementById('timerDisplay').innerHTML='00:00';
    document.getElementById('start').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('listTasks').innerHTML = tasks;
}

/**
 * Skip to the next task
 */
function skip() {
    tasks.shift();
    phase = "idle"
    secondsRemaining = 0;
    document.getElementById('listTasks').innerHTML = tasks;
}

/** 
 * Adds a task to the task queue
 */
function addTask() {
    // Load the start button if it's not running
    if (phase == 'idle') {
        document.getElementById("start").disabled = false;
    }
    tasks.push(document.getElementById("task").value);
    document.getElementById('listTasks').innerHTML = tasks;
    alert('task added');
    document.getElementById('task').value='';
}

/**
 * Update the global phases and tasks complete
 */
function updatePhase() {
    if (phase == "work") {
        tasksDone++;

        if (tasksDone % 4 != 0) {
            // If the tasks completed is less than 4 (1-3)
            phase = "small_break";
        } else {
            // If the tasks completed is 4
            phase = "long_break";
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
    return (phase == "work") ? work_length :     
        (phase == "small_break") ? small_break_length : 
        big_break_length;                        
}

function setBigBreak(event) {
    big_break_length = event.target.value * 60;
}

function setSmallBreak(event) {
    small_break_length = event.target.value * 60;
}

function setWork(event) {
    work_length = event.target.value * 60;
}