FROM node:lts-alpine3.18
# FROM node:18

ENV TZ="America/Bogota"
WORKDIR  /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3300

CMD ["npm", "run","dev"]