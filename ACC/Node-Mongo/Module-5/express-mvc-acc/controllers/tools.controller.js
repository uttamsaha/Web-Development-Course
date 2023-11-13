const { ObjectId } = require("mongodb");
const limiter = require("../middleware/limiter");
const { getDb } = require("../utlis/dbConnect");

let tools = [
    {id: 1, name: "Hammer"},
    {id: 1, name: "Hammer-2"},
    {id: 1, name: "Hammer-3"},
    {id: 1, name: "Hammer-4"},
]
const getAllTools = async(req,res)=>{
    try{
        const db = getDb();
        const result = await db.collection("tools").find().toArray();
        res.status(200).send({success: true, data: result})
    }catch(err){
        console.log(err);
    }
}

const  saveATool = async(req,res, next) => {
    try{
        const tool = req.body;
        const db = getDb();
        const result = await db.collection("tools").insertOne(tool);
        res.send("Successful");
    }catch(err){
        next(err);
    }
}

const getToolsDetails = (req, res) => {
    const {id} = req.params;
    res.send("Tools details found");
}


const updateTool = async(req, res,next) => {
    const db = getDb();
    const id = req.params.id;
    const tool = req.body;
    const result = await db.collection("tools").updateOne({_id: ObjectId(id)}, {$set: tool});
    res.send(result);
}

const deleteTool = async(req, res, next) => {
    try{
        const db = getDb();
        const {id} = req.params;
        const filter = {_id: id};
        const result = db.collection("tools").deleteOne({_id: ObjectId(id)});
        res.status(200).send({success: true, data: result});
    }catch(err){
        next(err);
    }
}
module.exports = {getAllTools, saveATool, getToolsDetails, updateTool, deleteTool};