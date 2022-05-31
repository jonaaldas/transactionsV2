import { Formik, Form, Field, ErrorMessage } from 'formik'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import { useTransactions } from '../context/TranContext';
import * as Yup from "yup";

function Register() {
  const [formValues, setformValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { registerUser } = useTransactions()

  return (
    <div className="contianer flex align-center justify-center flex-col h-screen">
      <div className='container w-100'>
        <h1 className='flex align-center justify-center text-slate-800'>Transaction Managment</h1>
        <h2 className='flex align-center justify-center text-slate-600'><BsFillPersonPlusFill /> Register</h2>
        <h3 className='flex align-center justify-center text-slate-400'>Please Create an Account</h3>
      </div>
      <Formik
        initialValues={formValues}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is Required'),
          email: Yup.string().required('Email is requires'),
          password: Yup.string().required('Phone Number is Required'),
        })}
        onSubmit={ async (values) => {
          await registerUser(values)
          // console.log(values)
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className='container flex flex-col align-center' >
            <div className='m-2 flex flex-col form-group'>
              <label htmlFor="name">Name</label>
              <Field name='name' className='form-control' placeholder='Enter Your Name' />
              <ErrorMessage component='p' name='name' className='text-muted form-text' />
            </div>
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
            <div className='m-2 flex flex-col form-group'>
              <label htmlFor="confirmPassword">Re-Password</label>
              <Field name='confirmPassword' type='password' className='form-control' placeholder='Re Enter password' />
              <ErrorMessage component='p' name='password' className='text-muted form-text' />
            </div>
            <Button type='submit' className='w-40 my-4' variant="secondary">Register</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;