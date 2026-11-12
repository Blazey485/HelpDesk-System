# HelpDesk-System

# README IN-PROGRESS!

# How would a person/team use this system?

## End user POV
1. The "leader/admin" of their teams gets a username and login like `Esport` and `Esport123`

2. The next step you will be met up with is things like type your `name, problem, urgency`
   - The names can be put in a json file, that can be easily updated and only if the name match you can send the forms in.

# Admin POV

1. The admin also has a password that can be used inorder to login and monitor the tickets
2. Dashboard is catogorized different labels - imagine github issues, where everything is catogorized and updated in real time.

# The Tech powering

1.  The user sends the forum as a json post to the server we have here, and the admin page fetches it and displays it




# Tech

Front end : React 

Backend: express js 


# How the tickets are saved & how the thing works
    SQLlite. Use the Schools server to store all the data, and the expressJS will fetch it. 

    the tickets are fetched with polling, meaning react will fetch/ask the endpoint for updates every 10sec or 5 sec. 

    


# Plan; 

