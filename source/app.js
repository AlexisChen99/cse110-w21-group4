
/**
 * Phases: work, small_break, long_break (lowercase)
 *
 * W = work, b = small break, B = big break
 *
 * W-b-W-b-W-b-W-B (1 cycle)
 * 0-1-0-1-0-1-0-2
 */

let tasks = [];
let task;
let phase = 'work';
let tasksDone = 0;

/**
 * Break lengths
 */
let work_length = 5; // work time (seconds)   15 mins (900)
let small_break_length = 7; // small break time      5 mins  (300)
let big_break_length = 10; // big break time        25 mins (1500)

/**
 * Start the timer and update the timer every second
 */
function start() {
  let secondsRemaining = setTimeRemaining();
  phase = 'work';
  tasksDone = 0;

  if (tasks.length > 0) {
    let timer = setInterval(function() {
      // once all the tasks have ended, clear the timer
      if (tasks.length == 0) {
        clearInterval(timer);
      } else {

        // Display the time MM:SS
        document.getElementById('timerDisplay').innerHTML = convertSeconds(secondsRemaining);
        secondsRemaining--;

        if (secondsRemaining < 0) {
          if (phase == 'work') {
            task = tasks.shift();
          }

          updatePhase();
          secondsRemaining = setTimeRemaining();
        }
      }
    }, 1000); // update the timer every second

    document.getElementById('timerDisplay').innerHTML = '00:00';
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

  var timerString;
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
  document.getElementById('timerDisplay').innerHTML = '00:00';
}

/**
 * Adds a task to the task queue
 */
function addTask() {
  tasks.push(document.getElementById('task').value);
  alert('task added');
}

/**
 * Update the global phases and tasks complete
 */
function updatePhase() {
  if (phase == 'work') {
    tasksDone++;

    if (tasksDone % 4 != 0) {
      // If the tasks completed is less than 4 (1-3)
      phase = 'small_break';
    } else {
      // If the tasks completed is 4
      phase = 'long_break';
    }
  } else {
    phase = 'work';
  }
}

/**
 * Function that returns the break times after the completion of "work times"
 *
 * @return the break time
 */
function setTimeRemaining() {
  return (phase == 'work') ? work_length :
    (phase == 'small_break') ? small_break_length :
      big_break_length;
}
