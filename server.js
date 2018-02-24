const express =require('express');

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt-nodejs');

const cors = require('cors');

const register = require('./controllers/Register');
const signin = require('./controllers/Signin');
const profile = require('./controllers/Profile');
const image = require('./controllers/Image');


const db = require('knex')({
	client: 'pg',
	connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123456',
    database : 'smartbrain'
  }
});

const app= express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=> {

	res.send(database.users);
})

app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req,res) => {register.handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)})

app.put('/image', (req, res) => {image.handleImage(req, res, db)})

app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})


app.listen(3001, ()=> {

	console.log("app is running");
});
/* 
// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});

*/

/*


/ --. res = this is working

/signin --. POST = succes/fail

/register -- POST = user

/profile/:userId --. GET = user

/imagwe --> PUT --> user updated

*/