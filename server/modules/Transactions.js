import mongoose from 'mongoose'
 
const buyerSchema = new mongoose.Schema({
  buyerq: [{
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    }
  ]
})

const sellerSchema = new mongoose.Schema({
  sellerq: [{
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    },
    {
      action: String,
      checked: Boolean
    }
  ]
})

const clientSchema = new mongoose.Schema({
  transaction: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trime: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trime: true
  },
  email: {
    type: String,
    required: true,
    trime: true
  },
  address: {
    type: String,
    required: true,
    trime: true
  },
  price: {
    type: Number,
    required: true,
    trime: true
  },
  closed:{
    type: Boolean
  },
  buyer: buyerSchema,
  seller: sellerSchema
})


export default mongoose.model('Transactions', clientSchema)