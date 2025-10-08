#!/bin/bash

if [ ! -f /home/node/.env ]; then
    cp /home/node/.env.local /home/node/.env
    cd /home/node/ && \
    npm i --omit=optional && \
    yarn && \
    mkdir -p /home/node/ssl && \
    yarn build && \
    yarn dev --port 9999 && \
    chown -R 1000:1000 /home/node/
    echo '   ⠿ static http|https bundled'
else
  	cd /home/node/ && \
    npm i --omit=optional && \
    yarn && \
    mkdir -p /home/node/ssl && \
    yarn build && \
    yarn dev --port 9999 && \
    chown -R 1000:1000 /home/node/
    echo '   ⠿ static http|https bundled'
    while ((1)); do sleep 1; done;
fi
