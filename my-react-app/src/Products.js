
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ newProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fuzzy-space-rotary-phone-xpxqjggxr9r2pw5q-3001.app.github.dev/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    if (newProduct) {
      setProducts([...products, newProduct]);
    }
  }, [newProduct]);

  const handleClick = () => {
    alert(`Are you sure you want to view the details`);
  };

  return (
    <div>
      <h2>Products List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
         <tbody>
           {products.map((product) => (
             <tr key={product.id}>
               <td><Link to={`/products/${product.name}`}  onClick={() => handleClick()}>{product.name}</Link></td>
               <td>{product.quantity}</td>
               <td>Rs.{product.price}</td>
             </tr>
           ))}
         </tbody>
      </table><br></br>
      <Link className='txt-space' to="/addproduct">Add Product</Link>
    </div>
  );
};

export default ProductList;
