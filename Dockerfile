FROM node:18-alpine
RUN mkdir -p /usr/src/app
RUN npm install && npm cache clean
CMD npm run translate; npm start
