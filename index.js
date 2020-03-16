const express = require('express'); // import express module
const bodyParser = require('body-parser');
const catRoute = require('./routes/catRoute');
const dogRoute = require('./routes/dogRoute');
const userRoute = require('./routes/userRoute');

const app = express(); // create express app 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));

app.use('/cat',catRoute);
app.use('/dog',dogRoute);
app.use('/user',userRoute);

let userList = [
  {
    id: 1,
    name: 'tong1',
    age: 29
  },

  {
    id: 2,
    name: 'tong2',
    age: 29
  },
  {
    id: 3,
    name: 'tong3',
    age: 29
  }
]

app.get('/all', function (req, res) {
  res.send(userList);
})

app.post('/addUser', function (req, res) {
  const newUser = {
    id:newId(),
    name:req.body.name,
    age:req.body.age
  }
  userList.push(newUser);
  res.send(newUser);
})

let newId = () => {
  return getMaxId() +1;
}

let getMaxId = () => {
let max = 0 ;

for(let user of userList){
 if (user.id > max){
   max = user.id;
 }
}
return max;
}


app.delete('/deleteUser', function (req, res) {
  userList = userList.filter(user => user.id !== Number(req.query.id))
  res.send(userList);
})

// app.post('/add', function (req, res) {
//   let numA = req.body.a;
//   let numB = req.body.b;
//   let mode = req.body.mode;

//   if(mode == "minus"){
//     return res.send(`${Number(numA)- Number(numB)}`);
//   }else if(mode == "multi"){
//     return res.send(`${Number(numA) * Number(numB)}`);
//   }else if(mode == "divide"){
//     return res.send(`${Number(numA)/Number(numB)}`);
//   }else{
//     return res.send(`${Number(numA) + Number(numB)}`);
//   }

// });

// app.get('/add', function (req, res) {
//   let numA = req.query.a;
//   let numB = req.query.b;
//   let mode = req.query.mode;

//   if(mode == "minus"){
//     return res.send(`${Number(numA)- Number(numB)}`);
//   }else if(mode == "multi"){
//     return res.send(`${Number(numA) * Number(numB)}`);
//   }else if(mode == "divide"){
//     return res.send(`${Number(numA)/Number(numB)}`);
//   }else{
//     return res.send(`${Number(numA) + Number(numB)}`);
//   }

// });

// app.get('/add/:a/:mode/:b', function (req, res) {
//   let numA = req.params.a;
//   let numB = req.params.b;
//   let mode = req.params.mode;

//   if(mode == "minus"){
//     return res.send(`${Number(numA)- Number(numB)}`);
//   }else if(mode == "multi"){
//     return res.send(`${Number(numA) * Number(numB)}`);
//   }else if(mode == "divide"){
//     return res.send(`${Number(numA)/Number(numB)}`);
//   }else{
//     return res.send(`${Number(numA) + Number(numB)}`);
//   }

// });

app.get('/query_path', function (req, res) {
  console.log(req.query.age);
  console.log(req.query.name);
  console.log(req.query.number);
  res.send(req.query);
})

// create ตัวที่ listen get methods ที่ path '/'
// app.get('/', function(req,res) {
//   res.send('Hello, World');
// })


// app.get('/dog/walk', function(req,res) {
//   res.send('dog walk');
// })

// app.get('/dog/play', function(req,res) {
//   res.send('dog play');
// })

// app.get('/cat/eat', function(req,res) {
//   res.send('cat eat');
// })

// app.get('/cat/sleep', function(req,res) {
//   res.send('cat sleep');
// })

// set app listen on port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})