//middle ware e 3 ta parameter thakbe req, res,  next
let count = 0;
const viewCount = (req, res, next) => {
    count++;
    console.log(count);
    next();
    //res.send("tools found");  // middle ware e res send korte hoi na hole server hang hoi jabe
}

module.exports = viewCount;