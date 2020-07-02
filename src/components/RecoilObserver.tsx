import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import defaultSubject from '../lib/defaultSubject';
import { TOPIC_GET_PRODUCT_DETAIL, TOPIC_GET_PRODUCT_LIST } from '../lib/observerTopics';
import { productDetailState, productListState } from '../lib/recoilState';

export const RecoilObserver = () => {
  const setProductList = { topic: TOPIC_GET_PRODUCT_LIST, cb: useSetRecoilState(productListState) };
  const setProductDetail = { topic: TOPIC_GET_PRODUCT_DETAIL, cb: useSetRecoilState(productDetailState) };

  const observers = [setProductList, setProductDetail];

  React.useEffect(() => {
    observers.forEach((observer) => {
      defaultSubject.attach(observer);
    });
    return () => {
      observers.forEach((observer) => {
        defaultSubject.detach(observer);
      });
    };
  }, [observers]);

  return null;
};

export default RecoilObserver;
