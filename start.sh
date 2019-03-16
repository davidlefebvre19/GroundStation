#!/bin/sh
directory=`pwd`
x-terminal-emulator -e "cd $directory/websocket && yarn install && node server.js"
x-terminal-emulator -e "cd $directory/test-client-socket && yarn install &&  node client.js"
x-terminal-emulator -e "cd $directory/clientWebApp/client-app &&  yarn install && PORT=3001 yarn start "
