// ProductForm.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const initialValues = {
    product: '',
    quantity: '',
    price: ''
  };
  const [error, setError] = useState(null); 
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    product: Yup.string().required('Product name is required'),
    quantity: Yup.number()
      .required('Quantity is required')
      .positive('Quantity must be a positive number')
      .integer('Quantity must be a whole number'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be a positive number')
  });

  const onSubmit = (values) => {
    console.log('Form Data:', values);
    const productData = {
      "id": values.id,
      "name": values.product,
      "quantity": values.quantity,
      "price": values.price
    };
    axios.post('https://fuzzy-space-rotary-phone-xpxqjggxr9r2pw5q-3001.app.github.dev/products', productData)
    .then(response => {
      console.log('Product added:', response.data);
      setSuccess('Product added successfully!');
      setError(null);
    })
    .catch(error => {
      console.error('Error adding product:', error);
      setError('Failed to add product.');
      setSuccess(null); 
    });
    navigate('/products');

  };

return (

  
  <div className="form-container">
    <h1>Add Product</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <div>
            <Field type="text" placeholder='Enter Product Name' id="product" name="product" />
            <ErrorMessage name="product" component="span" className="error" />
          </div>
        </div>
        <br></br>

        <div>
          <div>
            <Field type="number" placeholder='Enter Quantity' id="quantity" name="quantity" />
            <ErrorMessage name="quantity" component="span" className="error" />
          </div>
        </div>
        <br></br>

        <div>
          <div>
            <Field type="number" placeholder='Enter Price' id="price" name="price" />
            <ErrorMessage name="price" component="span" className="error" />
          </div>
        </div>
        <br></br>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>


);
};


export default AddProduct;
