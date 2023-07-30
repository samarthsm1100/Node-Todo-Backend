const ToDoModel = require('../Models/ToDoModel');

module.exports.getToDo = async(req,res) => {
    const data = await ToDoModel.find({});
    res.send(data);
}

module.exports.saveToDo = async(req,res) => {
    const {text} = req.body;
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added Successfully",data);
        res.send(data);
    })
}

module.exports.updateToDo = async(req,res) => {
    const {_id, text} = req.body;
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.set(201).send("Updated Successfully"))
    .catch((err)=>console.log(err));
}

module.exports.deleteToDo = async(req,res) => {
    const {_id} = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>console.log(err));
}