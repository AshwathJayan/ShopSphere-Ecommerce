require("dotenv").config();
const express=require("express"),mongoose=require("mongoose"),cors=require("cors"),path=require("path");
const app=express();
app.use(cors());app.use(express.json());app.use(express.static(path.join(__dirname,"public")));
app.use("/api/auth",require("./routes/auth"));app.use("/api/products",require("./routes/products"));app.use("/api/orders",require("./routes/orders"));
app.get("/api/health",(_,res)=>res.json({status:"ok"}));
app.get("*",(_,res)=>res.sendFile(path.join(__dirname,"public/index.html")));
mongoose.connect(process.env.MONGODB_URI).then(()=>app.listen(process.env.PORT||5000,()=>console.log("ShopSphere running on port "+(process.env.PORT||5000)))).catch(e=>{console.error(e.message);process.exit(1)});
