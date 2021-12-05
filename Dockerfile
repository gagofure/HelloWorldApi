# Create app directory
FROM node:alpine
WORKDIR /app

# Install app dependencies
ADD package*.json ./
RUN npm install

#Bundle app source
ADD . .

EXPOSE 3000
CMD [ "node", "app.js" ]