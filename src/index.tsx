import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'; //api fake  feito yarn add miragejs
import { App } from './App';


createServer({

  models: {
    transaction: Model

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
        id: 1,
        title: 'Freelance de Website',
        type: 'deposit',
        category: 'dev',
        amount: 6000,
        createdAt: new Date ('2021-02-12 09:00:00'),
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1100,
        createdAt: new Date ('2021-02-14 11:00:00'),
      },
      ]
    })
  },

  routes() {
    this.namespace = 'api'; //this namespace para api pq chama todos os fetch do transactionstable para ele

    this.get ('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) =>{
      const data = JSON.parse(request.requestBody) //tem que fazer o json parse para mudar o formato que as infos chegam

      return schema.create('transaction', data) //schema banco de dados mirage. Primeiro parametro é onde estou inserindo (models/transaction). segundo parametro os dados que quer passar pra esse model (DATA)
    }) 
  }
  
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
