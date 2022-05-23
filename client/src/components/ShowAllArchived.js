import { Container, Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { useEffect } from 'react';
import { useTransactions } from '../context/TranContext'
import { useParams } from 'react-router-dom'


function ShowAllArchive() {
  const {archivedTran, restoreASingleTransaction } = useTransactions()
  
  return (
    <div className="container">
      <div className="container">
        <div className='flex w-fit '>   
        </div>
      </div>
      <Container className='flex justify-center gap-5 flex-wrap' fluid='sm'>
        {
          archivedTran.map(client => {
            return (
              <div key={client._id} className="border p-3">
                <div className="buttons">
                  <Button variant="secondary" onClick={() => restoreASingleTransaction(client._id)}>Un-Archived</Button>
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
)}

export default ShowAllArchive;