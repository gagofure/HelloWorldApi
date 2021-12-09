import express from 'express';
const app = express();
require('dotenv').config();
import { auth, requiresAuth } from 'express-openid-connect';

app.use(
    auth({
        idpLogout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,

    })
);

//if the user is authenticated display api
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Hello World API' : 'You are logged out')
});

//if the user is authenticated display hello user
app.get('/hello', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? `Hello ${req.oidc.user.name}` : 'You are logged out')
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
