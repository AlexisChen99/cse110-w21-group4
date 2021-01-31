
/**
 * Phases: work, small_break, long_break (lowercase)
 * 
 * W = work, b = small break, B = big break
 * 
 * W-b-W-b-W-b-W-B (1 cycle)
 * 0-1-0-1-0-1-0-2
 */

var tasks = [];
var task;
var phase = "work";
var tasksDone = 0;

/**
 * Start the timer and update the timer every second
 */
function start() {
    let secondsRemaining = setTimeRemaining();
    phase = "work";
    tasksDone = 0;

    let timer = setInterval(function () {
        // once all the tasks have ended, clear the timer
        if (tasks.length == 0) clearInterval(timer);

        document.getElementById('timerDisplay').innerHTML = convertSeconds(secondsRemaining);
        secondsRemaining--;
        if (secondsRemaining < 0) {
            if (phase == "work") {
                task = tasks.shift();
            }
            updatePhase();
            secondsRemaining = setTimeRemaining();
        }
    }, 1000); //update the timer every second
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

    var timerString;
    if (minutes < 10) { timerString = '0'; }
    timerString += minutes + ':';
    if (seconds < 10) { timerString += '0'; }
    timerString += seconds;

    return timerString;
}

/** 
 * Adds a task to the task queue
 */
function addTask() {
    tasks.push(document.getElementById("task").value);
    alert('task added');
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
    return (phase == "work") ? 65 :     // work time (seconds)   15 mins (900)
        (phase == "small_break") ? 30 : // small break time      5 mins  (300)
            120;                        // big break time        25 mins (1500)
}