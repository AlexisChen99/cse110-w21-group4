# A Directory of the app.js File

- ~~var pushEvent UNUSED~~
- ~~var popEvent UNUSED~~

### Globally defined (Local) Let
- img []                Inactive images of a task component
- altImg                Active images of a task component
- tasks = []            Contains the \<p> of each task
- phase = "idle"        idle, work, short break, long break, stopped
- timer                 interval change of 1s
- MMSS                  string MM:SS format
- tasksDone = 0         marked as complete, alert to user?
- secondsRemaining = 0  to display on timer
- taskCount = 0         count of active tasks
- uniqueID = 1          if tasks are mirrored to main display 
- workLength            work time           (in seconds)
- smallBreakLength      short break time    (in seconds)
- longBreakLength       long break time     (in seconds)

### window.onload UNUSED

### start()     Start/Stop button
### convertSeconds(secondsRemaining)
### stop()      Start/Stop button
### reset()     Reset button
### addTask()   Add button
### createTask(text, existingID)    
- New: creates task in task list
### createExistingTask(text, existingID)
- Existing: creates pinned task in main list
#### addTaskComponents(index, func, img, altImg, id)
- Called by createTask
### unpinTask(pinTaskID) 
### deleteTask(uniqueID)
### deleteAllTasks() deleteAll button
### updatePhase()
### setTimeRemaining()
### setPageTitle(MM:SS)
### TODO confirmationPrompt(reset/deleteAll) of reset/deleteAll
### TODO confirm(reset/deleteAll) return true 
### TODO cancel() return false
### ~~setLongBreak(event)~~
### ~~setShortBreak(event)~~
### ~~setWork(event)~~
### ~~displayArray()~~