# Team 4
## Meeting Minutes
## Monday, February 15, 2021

Meeting commenced at: 9:07 PM PST / 10:37 AM IST on Zoom

Present:  
Alexis Chen  
Elizabeth Cho  
Kevin Jang  
Marco Kuan  
Ahmad Milad  
Rohan Patel  
Miaoqiu Sun  
Jessie Zou  
Deepak Karki

Absent:  

# Agenda
1. Review what we did last week.
2. Discussion of future ideas and integrations.

# Notes
- Currently skip button skips the current task and resets the timer.
  - Deepak recommends keeping the task and timer separate (don't reset timer when a task is skipped)
    - If someone completes multiple tasks, they can all be checked off.
- Deepak thinks we can use a google calendar integration where the tasks on the calender can be imported.
  - Ex: 25 min work cycle; 4-5 tags (tasks); the description of the cycle on the calendar marks the tags as complete.
  - "Time Blocking" 
- According to Deepak, ElectronJS should take a day because of config files to create a binary file. No original code is changed.
  - Not specifically useful. Still better off as a browser tab.
- Lock the tab so the user focuses on timer screen:
  - In-browser = plugin
  - Desktop app = "DNS blocking"
    - In "work" mode, have list of websites user wants to block
      - The program would go to local/etchosts (/etc/hosts) and append the websites to redirect user action to say they're unable to open the page.
      - Class-specific block lists
      - Requires pseudocode permissions
      - A website can't do this
- Standup, weekly meetings, sprints via GH Projects are worth team points.
- Sprint planning should be tasks to do in the week, etc.
- a11y role could be towards the development team.

Meeting adjourned at: 9:32 PM PST / 11:02 AM IST  
Time elapsed: 25 minutes
