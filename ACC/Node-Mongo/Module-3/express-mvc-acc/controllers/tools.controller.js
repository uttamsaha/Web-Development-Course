const limiter = require("../middleware/limiter");

let tools = [
    {id: 1, name: "Hammer"},
    {id: 1, name: "Hammer-2"},
    {id: 1, name: "Hammer-3"},
    {id: 1, name: "Hammer-4"},
]
const getAllTools = (req,res)=>{
   // res.download(__dirname + "/README.md");
   //res.redirect("/login");
    //res.send("tools found");
    const {limit, page} = req.query; // query

    res.json(tools.slice(0,limit));
}

const  saveATool = (req,res) => {
    console.log(req.body);
    tools.push(req.body);
    res.send(tools);
}

const getToolsDetails = (req, res) => {
    const {id} = req.params;
    res.send("Tools details found");
}


const updateTool = (req, res) => {
    //const newData = req.body;
    const {id} = req.params;
    const filter = {_id: id};
    const newData = tools.find(tool => tool.id == id);
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);
}

const deleteTool = (req, res) => {
    const {id} = req.params;
    const filter = {_id: id};
   tools =  tools.filter(tool => tool.id !== parseInt(id) );
   res.send(tools);
}
module.exports = {getAllTools, saveATool, getToolsDetails, updateTool, deleteTool};