import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    task: Model
  },

  routes() {
    this.namespace = 'api';

    this.get('/tasks', () => {
      return this.schema.all('task');
    });

    this.post('/tasks', (schema, request) => {  
      const data = JSON.parse(request.requestBody);

      return schema.create('task', data);
    });

    this.del("/tasks/:id", (schema, request) => {
      let id = request.params.id
    
      schema.find('task', id).destroy();
    });

    this.put("/tasks/:id", (schema, request) => {
      let id = request.params.id
      const data = JSON.parse(request.requestBody);

      schema.find('task', id).update({
        status: data.status,
      });
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)