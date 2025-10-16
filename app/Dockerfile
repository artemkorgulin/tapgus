# dev
FROM node:22.9.0-alpine AS dev
RUN apk add --no-cache tzdata
ENV TZ Europe/Moscow
ENV NODE_PATH /opt/server/node_modules

WORKDIR /opt/server/

CMD [ "node" ]

# production
FROM node:22.9.0-alpine AS production
RUN apk add --no-cache tzdata
ENV TZ Europe/Moscow
ENV NODE_PATH /opt/server/node_modules

WORKDIR /opt/server/

COPY /*.json ./
RUN npm cache clean --force \
    && npm i --save --force --legacy-peer-deps

RUN npm install typeorm \
    && npm install -g @nestjs/cli \
    && npm install @nestjs/swagger swagger-ui-express
 #   && npm install typeorm-seeding \
 #   && yarn add typeorm-seeding

CMD ["sh", "-c", "npm run build;npm run start"]