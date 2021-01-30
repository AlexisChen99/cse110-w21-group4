
var tasks = [];
var task;
//  W-b-W-b-W-b-W-Big Break (1 cycle)
//  0-1-0-1-0-1-0-2
var phase = 0;
var tasksDone = 0;

function start() {
    
    var secondsRemaining = setTimeRemaining();
    phase = 0;
    tasksDone = 0;

    var timer = setInterval( function() {

        //once all the tasks have ended, clear the timer
        if(tasks.length == 0) clearInterval(timer);

        document.getElementById('timerDisplay').innerHTML=convertSeconds(secondsRemaining);
        secondsRemaining--;
        if(secondsRemaining < 0) {
            if(phase == 0) {
                task = tasks.shift();
            }
            updatePhase();
            secondsRemaining = setTimeRemaining();
        }
    }, 1000); //update the timer every second
}

//convert our time measure into 00:00 format
function convertSeconds(secondsRemaining) {
    minutes = Math.floor(secondsRemaining/60);
    seconds = secondsRemaining - (60*minutes);
    
    var timerString;
    if(minutes < 10) {timerString = '0';}
    timerString += minutes+':';
    if(seconds < 10) { timerString+='0';}
    timerString += seconds;

    return timerString;
}

// adds a task to the task queue
function addTask() {
    tasks.push(document.getElementById("task").value);
    alert('task added');
}


function updatePhase() {
    if(phase == 0) {
        tasksDone++;
        if(tasksDone < 4) {
            phase = 1;
        } else {
            phase = 2;
            tasksDone = 0;
        }
    }
    else {
        phase = 0;
    }
}

function setTimeRemaining() {  
    return  (phase == 0) ? 65 :      // work time (seconds)
            (phase == 1) ? 30 :      // small break time
            120;                     // big break time
}