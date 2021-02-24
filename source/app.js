
/**
 * Phases: idle, work, short break, long break (lowercase)
 * 
 * i = idle, W = work, b = short break, B = long break
 * 
 * i-W-b-W-b-W-b-W-B (1 cycle)
 * i-0-1-0-1-0-1-0-2
 */

// var pushEvent = function(arr, callback) {
//     arr.push = function(e) {
//         Array.prototype.push.call(arr,e);
//         callback(arr);
//     };
// };

// var popEvent = function(arr, callback) {
//     arr.shift = function(e) {
//         Array.prototype.shift.call(arr,e);
//         callback(arr);
//     };
// };

let tasks = [];
// pushEvent(tasks, function(tasks) {
//     displayArray();
// });
// popEvent(tasks, function(tasks) {
//     displayArray();
// });
let task;
let phase = "idle";
let timer;
let MMSS;
let tasksDone = 0;
let secondsRemaining = 0;
let taskList;
var uniqueID = 1;
/**
 * Break lengths
 */

let workLength; // = document.getElementById("workLength");            // work time (seconds)   15 mins (900)
let shortBreakLength; // = 5;     // short break time      5 mins  (300)
let longBreakLength; // = 15;      // long break time        25 mins (1500)

// window.onload = function() {
//     document.getElementById("work-slider").addEventListener("input", setWork);
//     document.getElementById("short-slider").addEventListener("input", setshortBreak);
//     document.getElementById("long-slider").addEventListener("input", setLongBreak);
// }


/**
 * Sets the input times when the cycle isn't in progress.
 * @param {string} phase The phase to set the input times
 * @returns {number} The input time in seconds associated with the phase
 */
function setInputTimes(phase) {
    let minutes = document.getElementById(phase+"Min").value;
    let seconds = document.getElementById(phase+"Sec").value;
    return (+minutes) * 60 + (+seconds);
}

/**
 * Starts the timer and decrements the timer's MM:SS every second.
 * If the timer was stopped and resumed, the input times are not modified.
 */
function start() {
    if(phase != "stopped") {
        console.log("Setting input times");
        workLength = setInputTimes("work");
        shortBreakLength = setInputTimes("short");
        longBreakLength = setInputTimes("long");
    }

    secondsRemaining = setTimeRemaining();
    document.getElementById("reset").disabled = true;
    document.getElementById("start").innerHTML = "Stop";
    document.getElementById("start").onclick = stop;
    phase = "work";
    document.getElementById("phaseDisplay").innerHTML = phase;

    if (tasks.length > 0) {
        timer = setInterval(function () {
            // once all the tasks have ended, clear the timer
            if (tasks.length == 0) {
                clearInterval(timer);
                phase = "idle";
                // Update the phase
                document.getElementById("phaseDisplay").innerHTML = phase;
                // Disable the reset button
                document.getElementById("reset").disabled = true;
            } else {
                // Display the time MM:SS
                MMSS = convertSeconds(secondsRemaining);
                document.getElementById("timerDisplay").innerHTML = MMSS;
                setPageTitle(MMSS);
                secondsRemaining--;

                if (secondsRemaining < 0) {
                    if (phase == "work") {
                        // Update the tasks array (shift)
                        task = tasks.shift();
                        document.getElementById("mainTasks").innerHTML = tasks;
                        var audio = new Audio("audio/Rooster Crow.wav");
                        audio.play();
                    }

                    updatePhase();
                    secondsRemaining = setTimeRemaining();
                    document.getElementById("phaseDisplay").innerHTML = phase;
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

    var timerString ="";
    if (minutes < 10) { timerString = "0"; }
    timerString += minutes + ":";
    if (seconds < 10) { timerString += "0"; }
    timerString += seconds;

    return timerString;
}

/**
 * Stops the timer. The current time remaining in the phase is saved. 
 */
function stop() {
    clearInterval(timer);
    phase = "stopped";
    setPageTitle(MMSS);
    document.getElementById("phaseDisplay").innerHTML = phase;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("start").onclick = start;
}
/**
 * Resets the timer and empties the task queue.
 */
function reset() {
    tasks = [];
    uniqueID = 1;
    // displayArray();
    phase = "idle";
    document.getElementById("timerDisplay").innerHTML="00:00";
    deleteAllTasks();
}

/**
 * Skip to the next task
 */
function skip() {
    if(phase == "work") {
        tasks.shift();
        document.getElementById("phaseDisplay").innerHTML = phase;
    }
    phase = "work"
    secondsRemaining = setTimeRemaining();
    document.getElementById("mainTasks").innerHTML = tasks;
}

/** 
 * Adds a non-blank task to the list of tasks. 
 * TODO: If the taskCount is less than 4, add the task to the main page.
 */
function addTask() {
    const task = document.getElementById("enterTask").value;
    if(task != "") {
        createTask(task, -1);
    }
}

function createTask(text, existingID) {
    taskList = document.querySelector("#taskListContainer");
    let newTask = document.createElement("div");
    newTask.className = "userTask";

    if(existingID != -1 ) {
        newTask.id = document.getElementById(""+existingID).id;
    } else {
        newTask.id = uniqueID++;
    }

    let img = ["img/unmarked-circle-outline.png", "img/unpinned.png", "img/delete-task.png"];
    let altImg = ["img/marked-done.png", "img/pinned.png"];
    let id = ["markDone", "pin", "singleDel"];

    let i = 0;
    let mark = addTaskComponents(i++, "mark", img, altImg, id);
    let pin = addTaskComponents(i++, "pin", img, altImg, id);
    let del = addTaskComponents(i++, "del", img, altImg, id);
    let content = document.createElement("p");
    content.innerHTML = text;
    tasks.push(content.innerHTML);

    pin.addEventListener("click", function() {
        createTask(text, newTask.id);
    });

    del.addEventListener("click", function() {
        let deleteTask = newTask;
        deleteTask.parentNode.removeChild(deleteTask);
        // TODO: Delete both tasks if it is pinned
    });

    newTask.appendChild(mark);
    newTask.appendChild(pin);
    newTask.appendChild(del);
    newTask.appendChild(content);
    if(existingID == -1) {
        taskList.appendChild(newTask);
    } else {
        let mainTasks = document.getElementById("mainTasks");
        mainTasks.appendChild(newTask);
    }
}

function addTaskComponents(index, func, img, altImg, id) {
    let part = document.createElement("img");
    part.src = img[index];
    part.id = id[index];
    switch(func) {
        case "mark":
            // TODO: Switch images back and forth
            break;
        case "pin":
            // TODO: Switch images back and forth

            break;
    }
    return part;
}

function deleteTask() {

}

function deleteAllTasks() {

}

/**
 * Update the global phases and tasks complete
 */
function updatePhase() {
    if (phase == "work") {
        tasksDone++;

        if (tasksDone % 4 != 0) {
            // If the tasks completed is less than 4 (1-3)
            phase = "short break";
        } else {
            // If the tasks completed is 4
            phase = "long break";
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
        (phase == "short break") ? shortBreakLength : 
        (phase == "stopped") ? secondsRemaining :
        longBreakLength;                        
}

/**
 * Sets the <title> element for users to see remaining time off-page.
 * @param {string} MMSS "MM:SS" form
 */
function setPageTitle(MMSS) {
    let phaseSymbol;
    switch(phase) {
        case "work":
            phaseSymbol = " Work - ";
            break;
        case "short break":
        case "long break":
            phaseSymbol = " Break -";
            break;
        case "stopped":
            phaseSymbol = " Stopped - "
            break;
    }

    document.title = MMSS + phaseSymbol + "Potato Timer";
}
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
//     let ul = document.getElementById("task-list");
//     while(ul.firstChild) {
//         ul.removeChild(ul.firstChild);
//     }
//     for(let i = 0; i <tasks.length; i++) {
//         let newLi = document.createElement("li")
//         newLi.innerHTML = tasks[i];
//         ul.appendChild(newLi);
//     }
// }