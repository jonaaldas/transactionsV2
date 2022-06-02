import { useTransactions } from "../context/TranContext";
import { Container, Row, Button, Col } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import {VscEmptyWindow} from 'react-icons/vsc'
function ShowAllArchivedClietns() {
  const {archivedTran, deleteTransaction, restoreASingleTransaction, refreshPage} = useTransactions()

  const navigate = useNavigate()
  return (  
    <Container className='flex justify-center gap-5 flex-wrap' fluid='sm'>
        {
          archivedTran.length === 0 ? 
          (<div className="flex flex-col align-items-center">
          <VscEmptyWindow className='w-48 h-48 text-black text-center' />
          <h1 className='text-black text-2xl text-center'>There are no Archived Transactions</h1>
          </div>
          )
          :
           archivedTran.map(client => {
            return (
              <div key={client._id} className="border p-3">
                <div className="buttons">
                <Button
                    variant="secondary"
                    className='edit-btn mx-2'
                    onClick={() => {
                      restoreASingleTransaction(client._id)
                      toast.success('Transactions has un-Archived')
                      // navigate('/transations')
                      refreshPage()
                    }}
                  >
                    Un-Archive
                  </Button>

                  <Button
                    variant="danger"
                    className='edit-btn mx-2'
                    onClick={() => {
                      toast(t => (
                        <div className='flex flex-col justify-content-center align-self-center
                        '>
                          <h6>Are you sure?</h6>
                          <div>
                            <Button
                              className='mx-3'
                              onClick={() => {
                                deleteTransaction(client._id)
                                toast.success('Transactions has been deleted')
                                refreshPage()
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
  );
}

export default ShowAllArchivedClietns;