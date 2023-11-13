const express = require("express");
const toolsController = require("../../controllers/tools.controller");
const limiter = require("../../middleware/limiter");

const router = express.Router();

//get route
/* 
router.get('/', (req,res)=> {
    res.send('Tools found');
});*/

//post route
/*
router.post('/', (req,res)=> {
    res.send("Tool added");
})*/

//shortcut
router
  .route("/")
  .get(toolsController.getAllTools)
  .post(toolsController.saveATool);

router
  .route("/:id")
  .get(limiter, toolsController.getToolsDetails)
  .patch(toolsController.updateTool)
  .delete(toolsController.deleteTool); // middleware route e use korsi . max 2 bar login reqst korte parbe.

//export route.
module.exports = router;
