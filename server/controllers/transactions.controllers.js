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
      closed,
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
      seller,
      closed
    })
    tran.buyer = {
      buyerq: [{
          action: 'Attorney Review Started',
          checked: false
        },
        {
          action: 'Attorney Review Ended',
          checked: false
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
    tran.closed = false
    await tran.save()
    return res.json(tran)
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

export const archiveTransaction = async (req, res) => {
  try {
    const {
      id
    } = req.params
    const tran = await Transactions.findById(id)
    tran.archive()
    if (!tran) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}

// delete from data base for good
export const deleteTransactionForGood = async (req, res) => {
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


export const getTransaction = async (req, res) => {
  try {
    const {
      id
    } = req.params
    const tran = await Transactions.findById(id)
    if (!tran) return res.sendStatus(404);
    return res.json(tran)
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}


export const getArchivedTransactions = async (req, res) => {
  try {
    const archivedData = await Transactions.find().where('archivedAt').exists();
    return res.json(archivedData);
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}

export const restoreArchivedTransactions = async (req, res) => {
  try {
    const {
      id
    } = req.params
    const archivedData = await Transactions.find().where('archivedAt').exists().findOne({_id: `${id}`});
    archivedData.restore();
    if (!archivedData) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}