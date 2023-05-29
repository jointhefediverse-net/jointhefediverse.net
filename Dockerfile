FROM node:18-alpine
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
RUN npm install && npm cache clean --force
CMD npm run translate; npm start
