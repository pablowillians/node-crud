FROM node:alpine

RUN apk add yarn

WORKDIR /opt/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "node", "crud_web/index.js" ]
