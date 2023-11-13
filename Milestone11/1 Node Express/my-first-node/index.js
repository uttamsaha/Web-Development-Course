const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // to allow use data from server
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('I can code none js we are done bro d i t ');
});

const users = [
    {id: 1, name:'Sabana', email: 'sabana@gmail.com', phone: '0178888888'},
    {id: 2, name:'Kabana', email: 'Kabana@gmail.com', phone: '0178888888'},
    {id: 3, name:'Shabnur', email: 'Shabnur@gmail.com', phone: '0178888888'},
    {id: 4, name:'Bobita', email: 'bobita@gmail.com', phone: '0178888888'},
    {id: 5, name:'Kobita', email: 'kobita@gmail.com', phone: '0178888888'},
    {id: 6, name:'lolona', email: 'lolona@gmail.com', phone: '0178888888'}
]
app.get('/users', (req,res)=>{
    //filter by search query
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
    res.send(users);
    }
    // console.log('query',req.query);
});

app.get('/users/:id', (req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user);

})

//handle post method
app.post('/users',(req,res)=>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    // res.send('Post success');
})
app.listen(port, ()=>{
    console.log('Listening to port: ',port);
})