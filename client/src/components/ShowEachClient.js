import { Button } from 'react-bootstrap'
import { useTransactions } from "../context/TranContext";
import { useParams, useNavigate } from 'react-router-dom'
function ShowEachClient() {
  const navigate = useNavigate()
  const params = useParams()
  const { tran, handleChecked, archiveTransactions, refreshPage } = useTransactions();

  const eachTran = tran.filter(tran => {
    if (tran._id === params.id) {
      return tran
    }
  }).map(tran => {
    // find which questions to display 
    if (tran.transaction.toLowerCase() === 'seller') {
      return (
        <div key={tran._id} className="flex flex-column justify-center align-items-center w-100">
          <div className="container w-auto flex flex-col ">
            <h3 className="text-center">{tran.transaction}</h3>
            <p> <strong className="bold">Name:</strong> {tran.name}</p>
            <p><strong className="bold">Phone:</strong> {tran.phoneNumber}</p>
            <p><strong className="bold">Email:</strong> {tran.email}</p>
            <p><strong className="bold">Address:</strong> {tran.address}</p>
            <p><strong className="bold">Price:</strong> ${tran.price}</p>
          </div>

          <div className="w-100 flex flex-col align-items-center justify-content-between" style={{"height": "40vh"}}>
            {
              tran.seller.sellerq.map(q => {
                return (
                  <div className="flex align-items-center justify-content-between" style={{ "width": "90%", "maxWidth": "30%"}} key={q._id}>
                    <hr />
                    <input
                      className="mx-4 w-25"
                      type="checkbox"
                      id="action"
                      name="action"
                      checked={q.checked}
                      onChange={() => handleChecked(q._id, tran._id)}
                    />
                    <label className="text-center col" htmlFor="action1">{q.action}</label>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    } else if (tran.transaction.toLowerCase() === 'buyer') {
      return (
        <div key={tran._id} className="flex flex-column justify-center w-100 ">
          <div className="container w-auto flex flex-col ">
            <h3 className="text-center">{tran.transaction}</h3>
            <p> <strong className="bold">Name:</strong> {tran.name}</p>
            <p><strong className="bold">Phone:</strong> {tran.phoneNumber}</p>
            <p><strong className="bold">Email:</strong> {tran.email}</p>
            <p><strong className="bold">Address:</strong> {tran.address}</p>
            <p><strong className="bold">Price:</strong> ${tran.price}</p>
          </div>
          <div className="w-100 flex flex-col align-items-center justify-start">
            {
              tran.buyer.buyerq.map(q => {
                return (
                  <>
                    <hr />
                    <div className="flex align-items-center" style={{ "width": "90%", "maxWidth": "60%" }} key={q._id} >
                      <input
                        className="mx-4 w-25"
                        type="checkbox"
                        id="action"
                        name="action"
                        checked={q.checked}
                        onChange={() => handleChecked(q._id, tran._id)}
                      />
                      <label className="text-center col" htmlFor="action1">{q.action}</label>
                    </div>
                    <br />
                  </>
                )
              })
            }
          </div>
        </div >
      )
    }
  })
  return (
    <>
      <div className="container flex justify-center">
        {eachTran}
      </div>
      <div className='flex justify-center'>
        <Button variant='secondary' onClick={() => {
          archiveTransactions(params.id)
          navigate('/')
          refreshPage()
        }}>Closed</Button>
      </div>
    </>
  );
}

export default ShowEachClient;