@echo off
cd ..
echo Discord Bot Maker Directory: (copy paste it)
set /P dbm=
bitsadmin /addfile dljob https://nodejs.org/dist/v12.13.0/node-v12.13.0-x64.msi %CD%
echo Node.js installer will start, please don't change anything and just continue on with installion.
start /W node-v12.13.0-x64.msi
cd Actions
copy dbm_remote_MOD.js %dbm%\actions\dbm_remote_MOD.js
cd ..
cd src
npm install
cd ..
echo The config will open, make all of your changes there. (!The directory of your bot has to have double slashes)
echo Btw, once you close notepad the webserver will run.
start /W notepad config.json
echo cd src && npm install && node index >> start.bat
echo Anytime you want to start the dashboard you can open start.bat
start.bat