const Post= require("../models/post");
const User= require("../models/user");

exports.userget=async(req,res)=>{
    try{
       const user=await User.findAll();
       res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.postuser=async(req,res)=>{
    try{
        const {id, title, content,name, email, gender}=req.body;
        const user=await User.create({
        //   id, name,email,gender
        title,content
        })
        // console.log(user);
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.updateuser=async(req,res)=>{
    try{
      const id=req.params.id;
      const user=await User.update(req.body, {
        where: { id : id}
      })
      res.send("updated");
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.getuser=async(req,res)=>{
    try{
        const id=req.params.id;
        const user= await User.findByPk(id);
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.deleteuser=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=User.destroy({
            where: {id : id}
        })
        res.send("deleted");
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.onetone=async(req,res)=>{
    try{
        let data = await User.findAll({
            include:[{
                model:Post,
                as:"user_info",
                attributes:['number']
            }]
          })
        //   console.log(data);
          res.send(data);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.manytomany=async(req,res)=>{
    try{
        let data= await User.findAll({
            include:[{
                model:Post,
                as:"tags"
            }]
        })
        res.send(data);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}