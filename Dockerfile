# Create app directory
FROM node:alpine
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install  --only=production

#Bundle app source
COPY . .

EXPOSE $PORT
CMD [ "node", "app.js" ]