- **Introduction**

  1~~.How to start (install )~~

  2.Why is JavaScript Node's Language?

  3.Asynchronous and call callbacks

  ```jsx
  e.g 1 
  =========================
  // file read/write io
  fs = require('fs');
  
  // read file untill it finished then ...
  data = fs.readdirSync('c:/');
  
  console.log('data',data);
  
  console.log("this comes after");
  --------output --------
  
  ...
  ...
  this comes after
  ===========================
  
  e.g 2
  ===========================
  
  // file read/write io
  fs = require('fs');
  
  function somedata(err,data){
      console.log('data:',data);
  }
  fs.readdir('c:/',somedata);
  
  console.log('this comes after');
  --------output --------
  this comes after 
  .... 
  ....
  ```

- **Understanding npm : Node Package Manager**

  - Write your own module

    ```jsx
    --my-moudule.js----
    exports.mytext="hello I am here."
    exports.sometext="hey"
    ---------------------
    
    ---moudule-demo.js-----
    var myMoudle = require('./my-moudule')
    console.log(myMoudle.mytext);
    console.log(myMoudle.sometext);
    console.log(myMoudle);
    ----output------------
    hello I am here.
    hey
    { mytext: 'hello I am here.', sometext: 'hey' }
    ```

  - Manage thrid-party packages with npm (already installed lodash)

    ```jsx
    //数学包
    npm install lodash
    
    ----- demo.js-----
    var _=require('lodash')
    
    console.log(_.random(1,100));
    //本地端自动检测文件更新
    npm install -g nodemon
    ```

  - package.json

    ```jsx
    //Create Package.json file
    npm init
    //To create json as default
    npm init --yes 
    ```

- **Reading and Writing Files**

  ```jsx
  1) data.json
  {
      "name":"Tim"
  }
  2)demo.js
  var fs=require('fs');
  
  //This would be an asynchronous function, will be an callback
  //The call back contain to return value "err","data"
  fs.readFile('./data.json','utf-8',function(err,data){
  console.log(data);
  });
  --output--
  <Buffer 7b 0d 0a 20 20 20 20 22 6e 61 6d 65 22 3a 22 54 69 6d 22 0d 0a 7d>
  // add one more parameter 'utf-8'
  fs.readFile('./data.json','utf-8',function(err,data){
  console.log(data);
  });
  ---output---
  {
      "name":"Tim"
  }
  ===================
  var fs=require('fs');
  
  fs.readFile('./data.json','utf-8',function(err,data){
  console.log(data);
  });
  
  var data= require('./data.json')
  console.log(data);
  
  ----output------
  { name: 'Tim' }
  {
      "name":"Tim"
  }
  ///What's the defferent ?
  1)the readFile will treate out put as a String
  2)the data = require(...) will treate it as an Object
  	
  **e.g code :**
  
  var fs=require('fs');
  
  fs.readFile('./data.json','utf-8',function(err,data){
      var data=JSON.parse(data);
  console.log(data.name);
  });
  
  var data= require('./data.json')
  console.log(data.name);
  ---output----
  Tim
  Tim
  ```

- **Access directories**

  ```jsx
  var fs=require('fs');
  
  fs.readdir('c:/',(err,data)=>{
      console.log(data);
  })
  ```

- **Write to a file**

  ```jsx
  var fs=require('fs');
  
  data={
      name:'Bob'
  }
  //@para 'data.json' => path
  //@para JSON.stringify(data) => data
  //@para (err)=>{...} the callback function ..when someting wrong.
  fs.writeFile('data.json',JSON.stringify(data),(err)=>{
      console.log('write finished',err);
  });
  ```

- **Node.js frameworks**

  - Express (trditional framework) tried and tested
  - Sails (Feature rich) ORM...
  - Koa (Monst modern)

- **Example app**

  1. **Create server.js file**

  - 2.**Create package.json file**

    ```jsx
    npm init --yes
    ```

  - 3.**Install express**

    ```jsx
    npm install -s express
    ```

  - 4.adding code below

    ```jsx
    var express = require('express')
    var app = express();
    
    app.listen(3000);
    ```

  - 5.run app

    ```jsx
    npx nodemon server.js
    ```

  - 6.**To give an page loaded for user we can ... add an index.html file. then**

    ```jsx
    var express = require('express')
    var app = express()
    
    app.use(express.static(__dirname));
    var server = app.listen(3000,()=>{
        console.log('server is listening on prot',server.address().port);
    })
    ====
    ```

  - **7.Refine the the index.html**

    ```jsx
    <!doctype html>
    <link rel="stylesheet" href="<https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css>" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <script src="<https://code.jquery.com/jquery-3.2.1.slim.min.js>" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="<https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js>" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="<https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js>" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    
    <div class="container">
        <br>
        <div class="jumbotron">
            <h1 class="display-4">Send Message</h1>
            <br>
            <input class="form-control" placeholder="Name">
            <br>
            <button id="send" class="btn btn-success">Send</button>
        </div>
        <div id="messages">
    
        </div>
    </div>
    <script>
        $(()=>{
            $("#send").click(()=>{
                addMessages({name:"Bob",message:"hellow world~!"})
            });
        })
    
        function addMessages(message){
            $('#messages').append(`<h4>${message.name}</h4><p>${message.message}</p>`)
        }
    </script>
    ```

  - **8.Adjust server.js code**

    ```jsx
    var express = require('express')
    var app = express()
    
    app.use(express.static(__dirname));
    
    var messages=[
        {name:"Bob",message:"hi"},
        {name:"Tom",message:"hey~!!"},
    ]
    
    app.get('/messages',(req,res)=>{
        res.send(messages);
    
    })
    
    var server = app.listen(3000,()=>{
        console.log('server is listening on prot',server.address().port);
    })
    ```

  - **9.update index.html**

    ```jsx
    <!doctype html>
    <link rel="stylesheet" href="<https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css>" crossorigin="anonymous">
    <script src="<https://code.jquery.com/jquery-3.2.1.min.js>"  crossorigin="anonymous"></script>
    <script src="<https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js>" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="<https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js>" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    
    <div class="container">
        <br>
        <div class="jumbotron">
            <h1 class="display-4">Send Message</h1>
            <br>
            <input class="form-control" placeholder="Name">
            <br>
            <button id="send" class="btn btn-success">Send</button>
        </div>
        <div id="messages">
    
        </div>
    </div>
    <script>
        $(()=>{
            $("#send").click(()=>{
                addMessages({name:"Bob",message:"hellow world~!"})
            });
            getMessages();
        })
    
        function addMessages(message){
            $('#messages').append(`<h4>${message.name}</h4><p>${message.message}</p>`)
        }
    
        function getMessages(){
            $.get('<http://localhost:3000/messages>',(data)=>{
                data.forEach(addMessages);
            })
        }
    </script>
    ```

  - **10.create endpoint on node server for "post"**

    ```jsx
    //1. adding code in server.js
    app.post('/messages',(req,res)=>{
    console.log(req.body);
       res.sendStatus(200);
    })
    //2. use postman create a post request
    //3. we will see an undefined message on server side to solve that 
    //we need install another package 
    //npm install -s body-parser
    //then require it at top by adding these 2 line code below
    var bodyParser= require('body-parser')
    app.use(bodyParser.json());
    //then we can update code to below
    
    var express = require('express')
    var bodyParser= require('body-parser')
    var app = express()
    
    app.use(express.static(__dirname));
    app.use(bodyParser.json());
    
    var messages=[
        {name:"Bob",message:"hi"},
        {name:"Tom",message:"hey~!!"},
    ]
    
    app.get('/messages',(req,res)=>{
        res.send(messages);
    
    })
    
    app.post('/messages',(req,res)=>{
        messages.push(req.body);
       res.sendStatus(200);
    })
    
    var server = app.listen(3000,()=>{
        console.log('server is listening on prot',server.address().port);
    })
    ```

  - **11.Adding the [socket.io](http://socket.io)**

    ```bash
    //1st install moudule
    npm install -s socket.io
    //2nd update server.js by adding these two line
    var http = require('http').Server(app)
    var io = require('socket.io')(http)
    // then change 
    var server = app.listen(3000,()=>{
        console.log('server is listening on prot',server.address().port);
    })
    //to 
    var server = http.listen(3000,()=>{
        console.log('server is listening on prot',server.address().port);
    })
    //3rd adding script on index.html
    <script src="/socket.io/socket.io.js"></script>
    ```

- **Database (MongoDb)**

  1. go mlab to setup an account, then creating an free database

  2. install mongoose

     ```bash
     npm install -s mongoose
     ```

  3. import the mongodb

     ```bash
     var mongoose = require('mongoose')
     const uri = "....";
     //connect
     mongoose.connect(uri, (err) => {
         console.log('mongo db connection', err)
     })
     //add data
     app.post('/messages', (req, res) => {
         var message = new Message(req.body);
         message.save((err) => {
             if (err) {
                 sendStatus(500)
             }
             io.emit('message', req.body);
             res.sendStatus(200);
         })
     })
     //get data
     app.get('/messages', (req, res) => {
         Message.find({},(err,messages)=>{
             res.send(messages);
         })
     })
     ```

- **Improving Asynchronous Code**

  - Nested callbacks