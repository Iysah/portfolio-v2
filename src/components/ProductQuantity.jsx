import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';

const ProductQuantity = () => {
  const {qty, incQty, decQty } = useStateContext();

  return (
    <div className="flex items-center gap-3 mb-4">
      <button
        className="bg-gray-500 text-white px-3 py-1 rounded"
        onClick={decQty}
      >
        -
      </button>
      <span>{qty}</span>
      <button
        className="bg-gray-500 text-white px-3 py-1 rounded"
        onClick={incQty}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
