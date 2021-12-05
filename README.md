# Hello world API

A simple Hello world API protected with Auth0

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Hello world API.

```bash
git clone www.githuburl.com/username
npm install or yarn install
```

## Replace the Env

Please make sure to update the ```.env``` with yours from [Auth0](https://auth0.com/) as appropriate. Create a user on Auth0 to login or

```bash
  baseURL: 'http://localhost:3000',
  clientID: 'YOUR_CLIENT_ID',
  issuerBaseURL: 'https://YOUR_DOMAIN',
  secret: 'LONG_RANDOM_STRING'
````

## Build the Docker image locally

```bash
docker build -t imageName:tag /PATH

docker run --name container-name -p 3000:3000/tcp -d imageName:tag
```
# OR

## From Azure Container Registry

```bash
docker run --name your-container-name -p 3000:3000/tcp -d mycont131.azurecr.io/helloworldapi:latest
```

## Test the endpoint on a browser

```bash
# Hello world Api
- http://localhost:3000  

username:john@email.com
password:Password1

# Hello <authenticated user>
- http://localhost:3000/hello 

# To logout <authenticated user>
- http://localhost:3000/logout

```
