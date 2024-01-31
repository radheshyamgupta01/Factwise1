import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CtxProvider from './Component/Contex/CtxProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CtxProvider>
  <App></App>
</CtxProvider>
);


reportWebVitals();
