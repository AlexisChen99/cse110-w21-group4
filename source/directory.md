# A Directory of the Source Files
## HTML
### Main Content
.contentWrapper
- p #title Potato Timer
- p #phaseDisplay Work/Short Break/Long Break/Idle
- img alt="Settings" #settingsIcon
- div #circleTimer
  - .timer #timerDisplay
- .buttonWrapper
  - button #reset reset()
  - button #start start()
  - button #tasks displayTasks()
- .taskContainer
  - input text #enterTask required
  - #taskAdder addTask()
  - #mainTasks
    - TODO

### Settings Menu
.menu #settingsMenu
- p Settings
- p .close #closeSettings Close
- #chooseTheme
  - p Select a Theme
  - button #themeDark light()
  - button #themeDark dark()
  - button #themePotato potato()
- form .userInputContainer
  - div
    - label for="work" .fieldLabel
    - input number .customTime #workMin
    - p :
    - input number .customTime #workSec
  - div
    - label for="shortBreak" .fieldLabel
    - input number .customTime #shortMin
    - p :
    - input number .customTime #shortSec
  - div
    - label for="longBreak" .fieldLabel
    - input number .customTime #longMin
    - p :
    - input number .customTime #longSec
  - div
    - label for="volume" .fieldLabel
    - input number .customVolume #volume
    - img alt="Mute?" .volumeIcon #volumeIcon

### Task Menu
- .menu #taskMenu
  - p Tasks
  - p .close #closeTasks Close
  - p #deleteAll Delete All
  - #taskListContainer
    - JAVASCRPT createTask()
    - div .userTask (#uniqueID)
      - img #markDone
      - img #pin
      - img #singleDel
      - p
