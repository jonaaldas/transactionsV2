import { Container, Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTransactions } from '../context/TranContext'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'

// This branch is to add the authintication only
function ShowAllClients() {
  const navigate = useNavigate()
  const { tran, deleteTransactions } = useTransactions()
  const [newItems, setNewItems] = useState([])

  useEffect(() => {
    if (newItems.length === 0) {
      setNewItems(tran)
    }
  },[])

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
          </ButtonGroup>
        </div>
      </div>
      <Container className='flex justify-center gap-5 flex-wrap' fluid='sm'>
        {
          newItems.length === 0 ? <p> Its empty </p> : newItems.map(client => {
            return (
              <div key={client._id} className="border p-3">
                <div className="buttons">
                  <Button variant="danger" onClick={() => {
                    deleteTransactions(client._id)
                    toast.success('it has been deleted')
                  }} className='edit-btn' >Delete</Button>{' '}
                  <Button variant="secondary" className='edit-btn'
                    onClick={() => navigate(`transaction/edit/${client._id}`)}
                  >Edit</Button>{' '}
                  <Button variant="secondary" onClick={() => navigate(`transaction/${client._id}`)}>See More</Button>
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