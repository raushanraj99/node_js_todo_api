const User = require("../models/user.js");
const bcrypt = require('bcrypt');
const { sendCookie } = require("../utils/features.js");
const { ErrorHandler } = require("../middlewares/error.js");



//login user
const login = async (req,res,next)=>{
  try {
    
  const {email,password} = req.body;

  const user = await User.findOne({email}).select("+password");

  if(!user) return next(new ErrorHandler("Invalid Email or password",400))

  const isMatch = await bcrypt.compare(password,user.password)

  

  if(!isMatch) return next(new ErrorHandler("User Already Exits",400))

  sendCookie(user,res,`Welcome back ${user.name}`,200)

  } catch (error) {
    next(error)
  }
}


// register user
const register = async (req, res,next) => {
  try {
    const {name,email,password} = req.body
    let user = await User.findOne({email});
    
    
    res.setHeader('Access-Control-Allow-Origin', 'https://todo-app-react-snowy-five.vercel.app');

  if(user) return next(new ErrorHandler("User Already Exits",400))


  const hashedPassword = await bcrypt.hash(password,10)
  
 user =  await User.create({
    name,
    email,
    password:hashedPassword
  })

sendCookie(user,res,"registered Successfully",201)

    
  } catch (error) {
    next(error)
  }
};

const getMyProfile = (req, res) => {
  res.status(200).json({
    success:true,
    user:req.user,
  })

}

const logout = (req,res)=>{

  res.status(200).cookie("token",'', {
    expires: new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
    secure:process.env.NODE_ENV==="Development"?false: true,
  })
  .json({
    success:true,
    message:"Logged out successfully !!!",
    user:req.user,
  })
}


module.exports = {
  register,
  getMyProfile,
  login,
  logout,
};
