FROM node:alpine
WORKDIR /usr/local/hapitest
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3100
CMD [ "npm", "start" ]
