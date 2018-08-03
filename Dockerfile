FROM node:alpine
WORKDIR /usr/local/hapitest
COPY package*.json ./
RUN npm install
RUN apk add curl
COPY . .
EXPOSE 3100
CMD [ "npm", "start" ]
