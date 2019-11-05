# dbm-dashboard
i see that people want it
# HOW TO SETUP
1. Download this project.
2. Extract the `dbm_remote_MOD.js` (in the Actions folder) to your DBM folder.
3. Open DBM with your bot project file then add a event called `Bot Initialization` after that, add a Action called `Start Server` (it will be in `dbm-dashboard`)
4. Extract all other files (except the Actions folder to a seperate folder)
5. Install node.js
6. Go to that seperate folder (in CMD) then execute `npm install && cd src && node index`
7. The server should now be running! You can check it out on `localhost:3000`
# REMINDERS
1. If your planning to put this on a VPS then
# ONLY KEEP PORT 3001 ON LOCALHOST
If you ask why, then<br>
Port 3001 is the port that the dbm_remote thing will run on, it contains endpoints to ban, kick, and alot of things that could destroy the bots servers in.
2. Make sure to edit `config.json`, after you install the thing then you will need to edit the botDir, port (your not required to), title, and name. (mySQL options are useless for now and won't work for a while)