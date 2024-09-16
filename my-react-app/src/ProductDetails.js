import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { name } = useParams(); 
  const [product, setProduct] = useState(null);
console.log(name)
  useEffect(() => {
    fetch(`https://fuzzy-space-rotary-phone-xpxqjggxr9r2pw5q-3001.app.github.dev/products`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [name]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product Details</h2>

      <p>Product Name: {name}</p>
      <Link to="/products">Back</Link>
    </div>
  );
};

export default ProductDetails;
