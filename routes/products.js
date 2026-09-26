const r=require("express").Router(),P=require("../models/Product"),{protect,adminOnly}=require("../middleware/auth");
r.get("/",async(q,s)=>{let f={};if(q.query.category&&q.query.category!=="All")f.category=q.query.category;if(q.query.search)f.name={$regex:q.query.search,$options:"i"};s.json(await P.find(f).sort({createdAt:-1}))});
r.post("/",protect,adminOnly,async(q,s)=>{try{s.status(201).json(await P.create(q.body))}catch(e){s.status(400).json({message:e.message})}});
r.put("/:id",protect,adminOnly,async(q,s)=>{try{let p=await P.findByIdAndUpdate(q.params.id,q.body,{new:true,runValidators:true});if(!p)return s.status(404).json({message:"Not found"});s.json(p)}catch(e){s.status(400).json({message:e.message})}});
r.delete("/:id",protect,adminOnly,async(q,s)=>{let p=await P.findByIdAndDelete(q.params.id);if(!p)return s.status(404).json({message:"Not found"});s.json({message:"Deleted"})});module.exports=r;
