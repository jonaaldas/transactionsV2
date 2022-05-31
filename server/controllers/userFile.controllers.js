import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import User from '../modules/userModels.js'

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body

    if (!name || !email || !password) {
      res.status(400)
      console.log('error')
      return
    }

    // check if user exist
    const userExists = await User.findOne({
      email
    })

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    // bycrypt
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt)
    // create user 
    const user = await User.create({
      name,
      password: hashedPassword,
      email,
    })
    const token = jwt.sign({id: user._id,}, process.env.JWT_SECRET)
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: token
      })
    }
    await user.save()
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({
      message: error.message
    })
  }
}

export const logInUser = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body
    // Check for user Email
    const user = await User.findOne({
      email
    })

    const token = jwt.sign({id: user._id,}, process.env.JWT_SECRET)
    // comparing if password and see if user exist
    if (user && (await bcryptjs.compare(password, user.password))) {
      res.cookie('acces_token', token, {
        httpOnly: true,
      }).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: token
      })
    }
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({
      message: error.message
    })
  }
}


// generate a jwt
// const generateToken = (id) => {
//   return jwt.sign({
//     id
//   }, process.env.JWT_SECRET, {
//     expiresIn: '30d'
//   })
// }

export const getUserData = async (req, res) => {
  // const {
  //   _id,
  //   name,
  //   email
  // } = await User.findById(req.user._id)
  console.log(req.user)
  // res.status(200).json({
  //   id: _id,
  //   name,
  //   email
  // })
}