const userroutes=require("../controllers/usercontroller");
const express=require("express");
const router = new express.Router();

router.get("/user", userroutes.userget);

router.post("/user", userroutes.postuser);

router.patch("/user/:id", userroutes.updateuser);

router.get("/user/:id", userroutes.getuser);

router.delete("/user/:id", userroutes.deleteuser);

router.get("/onetoone", userroutes.onetone);

router.get("/manytomany", userroutes.manytomany);

module.exports=router;