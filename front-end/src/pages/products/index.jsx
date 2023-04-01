import React from 'react';
import '../../App.css';
import NavBar from '../../components/NavBar';
import Cards from '../../components/Cards';

function Products() {
  return (
    <div>
      <NavBar />
      <div className="ProductPage">
        <Cards />
      </div>
    </div>
  );
}

export default Products;
