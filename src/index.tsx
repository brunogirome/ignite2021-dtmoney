import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'New bookcase',
          amount: 125.99,
          category: 'Furniture',
          date: new Date(),
        },
        {
          id: 2,
          title: 'Engery Taxes',
          amount: 101.54,
          category: 'Taxes',
          date: new Date(),
        },
        {
          id: 3,
          title: 'BSA3 earnings',
          amount: 654.47,
          category: 'Stock earnings',
          date: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
