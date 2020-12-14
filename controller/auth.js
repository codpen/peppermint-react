const mongoose = require("mongoose");
const User = mongoose.model("InternalUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if ((!email || !name, !password)) {
      return res.status(422).json({ error: "Please add all fields" });
    }
    await User.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      bcrypt.hash(password, 16).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        });

       await user
          .save()
          .then((user) => {
            res.json({ message: "User saved successfully" });
          })
          .catch((err) => {
            console.log(err);
            res.json({ err });
          });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "please add email or password" });
    }
    await User.findOne({ email: email }).then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid Email or password" });
      }
      bcrypt.compare(password, savedUser.password).then((doMatch) => {
        if (doMatch) {
          // res.json({message: "Sign in Sucessful"})
          const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
          const { _id, name, email, role } = savedUser;
          res.status(200).json({ token, user: { _id, name, email, role } });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Token = async (req, res) => {

  const r = req.header('x-auth-token')

  try {
    console.log('hit')
    const token = r;
    if (!token) return res.json(false);
    console.log(token)

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    console.log(verified)

    // const user = await User.findById(req.user._id);
    // if (!user) return res.json(false);
    // console.log(user)

    return res.status(201).json(true)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.resetPasswordAdmin = async (req, res) => {
  try {
    await User.findOne({ _id : mongoose.Types.ObjectId(userId) })
    .then(user=>{
      if(!user){
          return res.status(422).json({error:"User doesnt exist"})
      }
      bcrypt.hash(password,12).then(hashedpassword=>{
        user.password = hashedpassword
        user.save()
        res.status(201).json({message:"password updated success"})
        console.log('Users Password updated')
     })}
    )} catch (error) {
    console.log(error)
    res.status(500)
  }
}

exports.resetPasswordUser = async (req, res) => {
  const { password } = req.body
  try {
    await User.findOne({ _id : mongoose.Types.ObjectId(req.user._id) })
    .then(user=>{
      if(!user){
          return res.status(422).json({error:"User doesnt exist"})
      }
      bcrypt.hash(password,12).then(hashedpassword=>{
        user.password = hashedpassword
        user.save()
        res.status(201).json({message:"password updated success"})
        console.log('Users Password updated')
     })}
    )
  } catch (error) {
    console.log(error)
    res.status(500)
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({users})
  } catch (error) {
    console.log(error)
  }
}