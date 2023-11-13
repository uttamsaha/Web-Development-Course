/**
1. create a folder
2. open command line to that folder
3. npm init
4. npm install express
5. create index.js files
---------------------------------
For expres/noe server
-----------------------
1. require express (const express = require('express');)
2. create app variable (const app = express();)
3. Declare port (const port = process.env.PORT || 5000;)
4. set app.get('/') /// app.get('/', (req,res)=>{
    res.send('I can code none js now');
});

5. listen to port /// app.listen(port, ()=>{
    console.log('Listening to port: ',port);
})

6. node index.js 
7. check browser localhost:port we set




----
get
----
**/