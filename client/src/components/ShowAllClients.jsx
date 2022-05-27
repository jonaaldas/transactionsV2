import { Container, Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTransactions } from '../context/TranContext'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import FilterButtons from './FilterButtons'
import {VscEmptyWindow} from 'react-icons/vsc'

// This branch is to add the authintication only
function ShowAllClients() {
  const navigate = useNavigate()
  const { archiveTransactions, filteredItems, refreshPage} = useTransactions()
 

  return (
    <div className="container">
      <FilterButtons/>
      <Container className='flex justify-center gap-5 flex-wrap' fluid='sm'>
        {
          filteredItems.length === 0 ?
          (<div className="flex flex-col align-items-center">
          <VscEmptyWindow className='w-48 h-48 text-black text-center' />
          <h1 className='text-black text-2xl text-center'>There are no Transactions</h1>
          </div>
          ) :
           filteredItems.map(client => {
            return (
              <div key={client._id} className="border p-3">
                <div className="buttons">
                  <Button
                      variant="danger" onClick={() => {
                      archiveTransactions(client._id)
                      toast.success('Transactions has been Archived')
                      refreshPage()
                    }}
                    className='edit-btn mx-2'
                  >
                    Archive
                  </Button>

                  <Button
                    variant="secondary"
                    className='edit-btn mx-2'
                    onClick={() => navigate(`transactions/edit/${client._id}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="secondary"
                    className='mx-2'
                    onClick={() => navigate(`transactions/${client._id}`)}
                  >
                    See More
                  </Button>
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