import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import {BsArrowBarRight} from 'react-icons/bs'
import * as Yup from "yup";
import { useTransactions } from '../context/TranContext';
function Login() {
  const [formValues, setformValues] = useState({
    email: '',
    password: ''
  })
  const {loginUser} = useTransactions()

  return (
    <div className='container flex align-center justify-center flex-col h-screen'>
      <div className='container w-100'>
        <h1 className='flex align-center justify-center text-slate-800'>Transaction Managment</h1>
        <h3 className='flex align-center justify-center text-slate-600'>Welcome</h3>
        <h2 className='flex align-center justify-center text-slate-400'><BsArrowBarRight /> LogIn</h2>
      </div>
      <Formik
        initialValues={formValues}
        validationSchema={Yup.object({
          email: Yup.string().required('Name is Required'),
          password: Yup.string().required('Phone Number is Required'),
        })}
        onSubmit={(values) => {
          loginUser(values)
          console.log(formValues)
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className='container flex flex-col align-center h-auto' >
            <div className='m-2 flex flex-col form-group'>
              <label htmlFor="email">Email</label>
              <Field name='email' className='form-control' placeholder='Enter email' />
              <ErrorMessage component='p' name='email' className='text-muted form-text' />
            </div>
            <div className='m-2 flex flex-col form-group'>
              <label htmlFor="password">Password</label>
              <Field name='password' type='password' className='form-control' placeholder='Enter password' />
              <ErrorMessage component='p' name='password' className='text-muted form-text' />
            </div>
            <Button type='submit' className='w-40 my-4' variant="secondary">Log In</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;