import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { JumbotronPage } from './Jumbotron';
import Card from './Card';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
    <Footer />
  </React.StrictMode>
);

