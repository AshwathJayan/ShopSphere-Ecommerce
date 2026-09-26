const jwt=require("jsonwebtoken"),User=require("../models/User");
async function protect(req,res,next){try{const h=req.headers.authorization||"",t=h.startsWith("Bearer ")?h.slice(7):null;if(!t)return res.status(401).json({message:"Please sign in."});const d=jwt.verify(t,process.env.JWT_SECRET);req.user=await User.findById(d.id).select("-password");if(!req.user)return res.status(401).json({message:"User not found"});next()}catch(e){res.status(401).json({message:"Invalid or expired session"})}}
function adminOnly(req,res,next){if(req.user?.role!=="admin")return res.status(403).json({message:"Admin access required"});next()}
module.exports={protect,adminOnly};
