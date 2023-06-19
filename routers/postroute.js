const postroutes=require("../controllers/postroutes");
const express=require("express");
const router = new express.Router();

router.get("/post", postroutes.postget);

router.post("/post", postroutes.postpost);

router.patch("/post/:id", postroutes.getpost);

router.get("/post/:id", postroutes.updatepost);

router.delete("/post/:id", postroutes.deletepost);

router.get("/manyTomany", postroutes.manyTomany);

module.exports=router;