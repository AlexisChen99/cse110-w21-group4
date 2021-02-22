# Team 4
## Sprint 1 Review
## Sunday, February 21, 2021

Meeting commenced at: 7:38 PM PST on Zoom

Present:  
Alexis Chen  
Elizabeth Cho  
Kevin Jang  
Marco Kuan  
Ahmad Milad  
Rohan Patel  
Miaoqiu Sun  
Jessie Zou  

Absent:  

# Agenda
1. What's Done
2. What's Not Done
3. Management, Backend, Frontend, QA progress
4. Review and Revise the Backlog

## What's Done
Since the start of our sprint on week three, the MVP timer is complete. A user must input at least one non-blank task that they want to work on in order for the timer to start. After each pomodoro cycle, the timer would remove the oldest task in the queue. 

The frontend (Kevin, Ahmad, Miaoqiu) supports three different themes: light, dark, and potato. It also has a displayable settings menu that contains the theme changer and customized user inputs. The backend has included a playable rooster audio for the potato theme.

## What's Not Done
The UI and frontend of our timer is incomplete.  It has to implement the task system to display the top three most important tasks that the user wants to work on. Then the displayable task list can be opened for the user to mark their tasks as complete and reassign priority to new tasks. The current frontend has to be pushed to the main branch and go through unit testing. Minor visuals for the potato theme, such as the background and potato icons should be included to resemble a true potato theme.

Due to the frontend finishing after the backend, the backend (Marco, Rohan) must synchronize the changes and additions that the frontend will provide through element id's.

As of today, the CI/CD pipeline does not pass its own linting and document generation of the backend, so our QA (Elizabeth) is fixing this for the current deployment.

## Demo
See the first sprint status video as /admin/videos/statusvideo1.mp4.

![Former UI](/admin/misc/022021-former-mvp-display.png)
This is the current UI display that is on the main branch. There is a skip button that will be removed in the sprint update because we decided the skip button isn't needed.

![Current Themes](/admin/misc/022121-frontend-themes.png)
Current Frontend themes that has to be pushed. The dark theme's settings and buttons should be recolored.

## Review and Revise Product Backlog
Considering the changes to the task-dependent system of the timer, our user stories must be updated such that it resembles the way a user would approach the program. We have to push the frontend to update our progress, but nevertheless we can transition from hard-coded lengths to user-controllable lengths. The user can now hear and adjust the volume that notifies them when the work phase ends. Currently the frontend design is accessible for the colorblind because of the light and dark themes and is deployable on a mobile browser. Therefore we have advanced the MVP timer to be mobile-friendly for a wider userbase.  


Meeting adjourned at: 8:22 PM PST  
Time elapsed: 44 minutes