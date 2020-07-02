import { atom } from 'recoil';

export const productListState = atom({
  key: 'productList',
  default: [],
});

export const productDetailState = atom({
  key: 'productDetail',
  default: [],
});

export const applicationState = atom({
  key: 'applicationState',
  default: {
    view: 'index',
  },
});
