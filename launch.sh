#!/bin/bash

#node websocket/server.js
#node test-client-socket/client.js
#cd clientWebApp/client-app && yarn start
gnome-terminal --tab -e 'cd /home/david/codage/ground_station_cansat/websocket && node server.js' --tab -e 'cd /home/david/codage/ground_station_cansat/test-client-socket && node client.js'

