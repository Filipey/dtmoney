import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({})
  },

  routes() {
    this.namespace = 'api'

    this.get('https://filipeydtmoney.netlify.app/api/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post(
      'https://filipeydtmoney.netlify.app/api/transactions',
      (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      }
    )
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
