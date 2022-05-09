import Transactions from "../modules/Transactions.js";


export const getTransactions = async (req, res) => {
  try {
    // searching all the post and it has to be async
    const tran = await Transactions.find()
    return res.json(tran);
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}


export const createTransactions = async (req, res) => {
  try {
    const {
      transaction,
      name,
      phoneNumber,
      email,
      address,
      price,
      buyer,
      seller
    } = req.body

    const tran = new Transactions({
      transaction,
      name,
      phoneNumber,
      email,
      address,
      price,
      buyer,
      seller
    })
    tran.buyer = {
      buyerq: [{
          action: 'Attorney Review Started',
          checked: true
        },
        {
          action: 'Attorney Review Ended',
          checked: true
        },
        {
          action: 'Inspection Was ordered',
          checked: false
        },
        {
          action: 'Apprasial was ordered',
          checked: false
        },
        {
          action: 'Closed',
          checked: false
        }
      ]
    }
    tran.seller = {
      sellerq: [{
          action: 'Listing Paper Work singed ',
          checked: false
        },
        {
          action: 'Photos has been ordered',
          checked: false
        },
        {
          action: 'Listing is live',
          checked: false
        },
        {
          action: 'Showings has started',
          checked: false
        },
        {
          action: 'Got an offer',
          checked: false
        }
      ]
    }

    await tran.save()
    return res.send('received')
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }

}

export const updateTransactions = async (req, res) => {
  try {
    // this returns the old post that is not updated 
    const updatedTran = await Transactions.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.send(updatedTran)
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}

export const deleteTransaction = async (req, res) => {
  try {
    const {
      id
    } = req.params
    const tran = await Transactions.findByIdAndDelete(id)
    if (!tran) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}

export const getTransaction = async(req, res)=> {
  try{
    const {
      id
    } = req.params
    const tran =  await Transactions.findById(id)
    if (!tran) return res.sendStatus(404);
    return res.json(tran)
  }catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}