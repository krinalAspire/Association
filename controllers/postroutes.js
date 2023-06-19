const Post= require("../models/post");
const User=require("../models/user");

exports.postget=async(req,res)=>{
    try{
       const user=await Post.findAll();
       res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.postpost=async(req,res)=>{
    try{
        const {id, name, number, gender}=req.body;
        const user=await Post.create({
        //   id, name,number,gender
        name
        })
        // console.log(user);
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.updatepost=async(req,res)=>{
    try{
      const id=req.params.id;
      const user=await Post.update(req.body, {
        where: { id : id}
      })
      res.send("updated");
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.getpost=async(req,res)=>{
    try{
        const id=req.params.id;
        const user= await Post.findByPk(id);
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.deletepost=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=Post.destroy({
            where: {id : id}
        })
        res.send("deleted");
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.oneToone=async(req,res)=>{
    try{
        let data = await Post.findAll({
            attributes:["number"],
            include:User
          })
          console.log(data);
          res.send(data);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.manyTomany=async(req,res)=>{
    try{
        let data= await Post.findAll({
            include:[{
                model:User,
                as:"posts"
            }]
        })
        res.send(data);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}