import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useTransactions } from '../context/TranContext';
import { useNavigate, useParams} from 'react-router-dom'
import * as Yup from "yup";
// import PlacesAutocomplete from '../components/PlacesAutocomplete'
function Forms() {
  const navigate = useNavigate()
  const params = useParams()
  const { createTransactions, getSingleTransactionToEdit, editTransaction } = useTransactions()
  const [formValues, setformValues] = useState({
    transaction: '',
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    price: ''
  })

  // to check is link comes with paramaters
  useEffect(() => {
    (async () => {
      if (params.id) {
        const { transaction, name, phoneNumber, email, address, price } = await getSingleTransactionToEdit(params.id)
        setformValues({
          transaction,
          name,
          phoneNumber,
          email,
          address,
          price
        })
      }
    })()
  },[getSingleTransactionToEdit],[params.id] )


  return (
    // <div className="container h-auto">
    <Formik
      initialValues={formValues}
      validationSchema={Yup.object({
        transaction: Yup.string().required("Transaction is Required"),
        name: Yup.string().required('Name is Required'),
        phoneNumber: Yup.string().required('Phone Number is Required'),
        email: Yup.string().required('Email is Required'),
        address: Yup.string().required('Address is Required'),
        price: Yup.number().required('Price is Required')
      })}
      onSubmit={async (values, actions) => {
        if (params.id) {
          await editTransaction(params.id, values)
        } else {
          await createTransactions(values)
        }
        navigate('/')
      }}
      enableReinitialize
    >
      {({ handleSubmit }) => (

        <Form onSubmit={handleSubmit} className='container flex flex-col align-center h-6' autoComplete='off'>
          <div className='m-2 flex flex-col form-group'>
            <label htmlFor="transaction">Transaction Type</label>
            <Field name='transaction' className='form-control' placeholder='Enter Transaction Type' />
            <ErrorMessage component='p' name='transaction' className='text-muted form-text' />
          </div>

          <div className='m-2 flex flex-col form-group'>
            <label htmlFor="name">Name</label>
            <Field name='name' className='form-control' placeholder='Enter Name' />
            <ErrorMessage component='p' name='name' className='text-muted' />
          </div>

          <div className='m-2 flex flex-col form-group'>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name='phoneNumber' className='form-control' placeholder='Enter Phone Number' />
            <ErrorMessage component='p' name='phoneNumber' className='text-muted' />
          </div>

          <div className='m-2 flex flex-col form-group'>
            <label htmlFor="email">Email</label>
            <Field name='email' className='form-control' placeholder='Enter Email' />
            <ErrorMessage component='p' name='email' className='text-muted' />
          </div>

          <div className='m-2 flex flex-col form-group'>
            <label htmlFor="address">Address</label>
            <Field name='address' className='form-control' placeholder='Enter Complete Address' />
            <ErrorMessage component='p' name='address' className="text-muted" />
          </div>

          <div className='m-2 flex flex-col form-group'>
            <label htmlFor="price">Price</label>
            <Field name='price' className='form-control' placeholder='Enter Price' />
            <ErrorMessage component='p' name='price' className="text-muted" />
          </div>
          <Button type='submit' className='w-40 my-4' variant="secondary">Add Transaction</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Forms;