import React from 'react';
import { useRecoilState } from 'recoil';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { applicationState } from './lib/recoilState';

function App() {
  const [appState, setAppState] = useRecoilState(applicationState);

  return (
    <div className="App">
      {appState.view === 'index' && (
        <button
          onClick={() => {
            setAppState({ ...appState, view: 'products' });
          }}
        >
          Show products
        </button>
      )}
      {appState.view === 'products' && <ProductList />}
      {appState.view === 'product' && <ProductDetail />}
    </div>
  );
}

export default App;
