#!/bin/bash

echo '⠿ static begin constructed'
if ! [ -L /home/node/node_modules ]; then
  echo '⠿ node_modules exists'
  cp /home/node/.env.local /home/node/.env
  cd /home/node/ && \
  yarn && \
  mkdir -p /home/node/ssl && \
  yarn build && \
  yarn dev --host --port 9999 && \
  chown -R 1000:1000 /home/node/
else
  echo '⠿ node_modules found'
  if [ ! -f /home/node/.env ]; then
      cp /home/node/.env.local /home/node/.env
      cd /home/node/ && \
      npm i --omit=optional && \
      yarn && \
      mkdir -p /home/node/ssl && \
      yarn build && \
      yarn dev --host --port 9999 && \
      chown -R 1000:1000 /home/node/
  else
      cd /home/node/ && \
      npm i --omit=optional && \
      yarn && \
      mkdir -p /home/node/ssl && \
      yarn build && \
      yarn dev --host --port 9999 && \
      chown -R 1000:1000 /home/node/
  fi
fi
echo '⠿ static http|https bundled'
