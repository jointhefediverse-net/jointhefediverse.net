FROM node:18-alpine
RUN mkdir -p /usr/src/app
RUN npm install
CMD npm run translate; npm start
