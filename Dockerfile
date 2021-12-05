FROM node:alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
EXPOSE 3000
CMD [ "node", "app.js" ]