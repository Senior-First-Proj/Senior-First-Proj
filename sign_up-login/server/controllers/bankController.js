const db = require("../database/index");

const addUser = function (req, res) {
 let info =req.body
 let sql="INSERT INTO verif VALUES "+ info
 db.query(sql, function (err, result) {
    err?console.error("add error:",err):res.json(result),console.log(result);
 })
};
const getUser = function (req, res) {
    let sql = "SELECT * FROM verif"
    db.query(sql, function (err, result) {
        err ? console.error("get error:", err) : res.send(result),console.log(result);
        })
}



module.exports = {addUser,getUser};
