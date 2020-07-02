import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import productService from '../lib/productService';
import { applicationState, productListState } from '../lib/recoilState';

export const ProductList = () => {
  const productList = useRecoilValue(productListState);
  const [appState, setAppState] = useRecoilState(applicationState);

  React.useEffect(() => {
    productService.getProductList();
  }, []);

  const viewProduct = (product) => {
    productService.getProductDetail(product);
    setAppState({ ...appState, view: 'product' });
  };

  return (
    <div>
      {productList.map((product: any, i) => (
        <div key={i}>
          <button
            onClick={() => {
              viewProduct(product);
            }}
          >
            View {product.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
