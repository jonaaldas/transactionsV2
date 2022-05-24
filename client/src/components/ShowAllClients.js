import { Container, Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTransactions } from '../context/TranContext'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'

// This branch is to add the authintication only
function ShowAllClients() {
  const navigate = useNavigate()
  const { tran, archiveTransactions, deleteTransaction, archivedTran, restoreASingleTransaction } = useTransactions()
  const [newItems, setNewItems] = useState([])

  useEffect(() => {
    console.log('i am being render')
    setNewItems(newItems)
  }, [])

  const filterItem = (transactionType) => {
    const newItem = tran.filter(tran => tran.transaction.toLowerCase() === transactionType
    )
    setNewItems(newItem)
  };


  const showHowmanyBuyers = (tran) => {
    const newArr = tran.filter(each => {
      if (each.transaction.toLowerCase() === 'buyer') {
        return each
      }
    })
    return newArr.length
  }
  const showHowmanySellers = (tran) => {
    const newArr = tran.filter(each => {
      if (each.transaction.toLowerCase() === 'seller') {
        return each
      }
    })
    return newArr.length
  }
  const showHowmanyArchived = (tran) => {
    setNewItems(tran)
  }

  // show how delete button in archive
  const showDeleteBtnArchive = (arr) => {
    if (arr.archivedAt) {
      return (
        <Button
          variant="danger"
          className='mx-2'
          onClick={() => {
            toast(t => (
              <div className='flex flex-col justify-content-center align-self-center
              '>
                <h6>Are you sure?</h6>
                <div>
                  <Button
                    className='mx-3'
                    onClick={() => {
                      deleteTransaction(arr._id)
                      toast.success('Transactions has been deleted')
                    }}
                  >Yes</Button>
                  <Button
                    className='mx-3'
                    onClick={() => toast.dismiss(t.id)}
                  >No</Button>

                </div>
              </div>
            ))
          }}
        >
          Delete
        </Button>
      )
    }
  }

  return (
    <div className="container">
      <div className="container">
        <div className='flex w-fit '>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => setNewItems(tran)}>All {tran.length}</Button>

            <Button variant="secondary" onClick={() => {
              filterItem('buyer')
            }}>Buyers {showHowmanyBuyers(tran)}</Button>

            <Button variant="secondary" onClick={() => filterItem('seller')}>Sellers {showHowmanySellers(tran)}</Button>

            <Button variant='secondary' onClick={() => showHowmanyArchived(archivedTran)}> Archived {archivedTran.length}</Button>
          </ButtonGroup>
        </div>
      </div>
      <Container className='flex justify-center gap-5 flex-wrap' fluid='sm'>
        {
          newItems.map(client => {
            return (
              <div key={client._id} className="border p-3">
                <div className="buttons">
                  <Button
                    variant="danger" onClick={() => {
                      archiveTransactions(client._id)
                      toast.success('Transactions has been Archived')
                    }}
                    className='edit-btn mx-2'
                    style={!client.archivedAt ? { display: 'inline-block' } : { display: 'none' }}
                  >
                    Archive
                  </Button>

                  <Button
                    variant="secondary"
                    className='edit-btn mx-2'
                    style={!client.archivedAt ? { display: 'inline-block' } : { display: 'none' }}
                    onClick={() => navigate(`transactions/edit/${client._id}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="secondary"
                    className='mx-2'
                    onClick={() => {
                      if (client.archivedAt) {
                        restoreASingleTransaction(client._id)
                        toast.success('Transactions has been un Archived')
                      } else {
                        navigate(`transactions/${client._id}`)
                      }
                    }}
                  >
                    {client.archivedAt ? 'unArchived' : 'SeeMore'}
                  </Button>

                  {
                    showDeleteBtnArchive(client)
                  }
                </div>
                <Row>
                  <Col className='h-16 flex justify-center'>
                    <h1 className='text-center m-auto'>{client.transaction}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className='h-12'>Name: {client.name}</Col>
                </Row>
                <Row>
                  <Col className='h-12'>Cell-Phone: {client.phoneNumber}</Col>

                </Row>
                <Row>
                  <Col className='h-16'>Email: {client.email}</Col>

                </Row>
                <Row >
                  <Col className='h-16'>Address: {client.address}</Col>

                </Row>
                <Row>
                  <Col className='h-12'>Price: {client.price}</Col>
                </Row>
              </div>
            )
          })
        }
      </Container>
    </div>

  );
}

export default ShowAllClients;