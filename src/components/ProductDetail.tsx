import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { applicationState, productDetailState } from '../lib/recoilState';

export const ProductDetail = () => {
  const productDetail: any = useRecoilValue(productDetailState);
  const [appState, setAppState] = useRecoilState(applicationState);

  return (
    <div>
      <div>
        <h2>{productDetail.name}</h2>
        <p>{productDetail.details}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setAppState({ ...appState, view: 'products' });
          }}
        >
          Return to product list
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
