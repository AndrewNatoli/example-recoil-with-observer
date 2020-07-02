import defaultSubject from './defaultSubject';
import { TOPIC_GET_PRODUCT_DETAIL, TOPIC_GET_PRODUCT_LIST } from './observerTopics';

const getProductList = () => {
  const count = Math.ceil(Math.random() * 10);
  let products: any[] = [];
  for (let i = 0; i < count; i++) {
    products.push({
      name: Math.random().toString(36),
      details: Math.random().toString(16),
    });
  }
  defaultSubject.notify(TOPIC_GET_PRODUCT_LIST, products);
};

const getProductDetail = (product) => {
  defaultSubject.notify(TOPIC_GET_PRODUCT_DETAIL, product);
};

export const productService = { getProductList, getProductDetail };
export default productService;
