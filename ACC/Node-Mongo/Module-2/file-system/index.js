const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=> {
    if(req.url == "/"){
        //asynchronous read
        /*
        fs.readFile('data.txt', (err,data)=> {
            if(err){
                res.write("Data read failed.");
                res.end();
            }else{
                res.write(data);
                res.end()
            }
        })*/

        //synchronous read
        /*
        const data = fs.readFileSync('data.txt');
        res.write(data);
        res.end()*/


        //asynchronous data write
        fs.writeFile('data.txt', "Hello node js ", (err)=> {
            if(err){
                res.write("data failed to write");
                res.end();
            } else {
                res.write("data written successfully");
                res.end();
            }
        })
    }
})

const PORT = 5000;
server.listen(PORT);
console.log('server is running on port, ',PORT);