var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// const expressValidator = require('express-validator');
// const { check, validationResult } = require('express-validator/check');


// middleware
// var logger = function (req, res, next) {
//     console.log('Logging...');
//     next();
// }
// app.use(logger);

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// pass json or array obj to url
// var student = [

// {
//     name: "Jeff",
//     age: 30
// },
// {
//     name: "Sara",
//     age: 32
// },
// {
//     name: "Ricky",
//     age: 22
// }

// ]
// app.get('/', function (req, res) {
//     res.json(student);
// });

var user = [
    {
        id: 1,
        firstName: 'James',
        lastName: 'Mary',
        email: 'maryj@gmail.com'
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Marleyy',
        email: 'bobmarley@gmail.com'
    },
    {
        id: 3,
        firstName: 'Joanne',
        lastName: 'Smith',
        email: 'johnsmith@gmail.com'
    }
];

// route handler
app.get('/', function(req, res){
    res.render('index', {
         title: 'Customers',
         user: user
        });
});

app.post('/users/add', function(req, res){
    // console.log(req.body.first_name);
    var newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };

    console.log(newUser);
});

app.listen(3000, function(){
    console.log('Server started on port 3000...');
});





// app.post('/users/add', [
//     // firstname must be an text
//     check('first_name').isString(),
//      // lastname must be an text
//      check('last_name').isString(),
//     // email must be an email
//     check('email').isEmail(),
//   ], (req, res) => {
//       const errors = validationResult(req);
  
//       if(!errors.isEmpty()){
//           console.log('Error!');
//       }else{
//           var newUser = {
//               first_name: req.body.first_name,
//               last_name: req.body.last_name,
//               email: req.body.email
//           }
//           console.log(newUser);
//       }   
//   }
//   });