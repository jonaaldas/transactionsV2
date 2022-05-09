import mongoose from 'mongoose'
import mongooseArchive from 'mongoose-archive';
 


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
  buyer: buyerSchema,
  seller: sellerSchema
})

clientSchema.plugin(mongooseArchive);
export default mongoose.model('Transactions', clientSchema)