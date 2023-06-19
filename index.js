require('dotenv').config();
const express=require("express");
const app=express();
const userroute=require("./routers/userroute");
const postroute=require("./routers/postroute");
const User=require("./models/user");
const Post=require("./models/post");

const port=process.env.port;

app.use(express.json());

app.use(userroute);

app.use(postroute);

// User.hasOne(Post, {foreignKey:"userid", as: "user_info"});
// Post.belongsTo(User,{foreignKey:"userid", as:"user_info"});

// User.hasMany(Post, {foreignKey:"userid", as: "user_info"});
// Post.belongsTo(User,{foreignKey:"userid", as:"user_info"});


Post.belongsToMany(User, {
  through: "post_tag",
  as:"posts",
  foreignKey: "post_id"
});
User.belongsToMany(Post, {
  through: "post_tag",
  as:"tags",
  foreignKey: "tag_id"
});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})