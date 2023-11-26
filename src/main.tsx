import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './config/store/store.ts'
import { Provider } from 'react-redux'
import getSessionKey from './config/getSessionKey.ts'
import App from './App.tsx'

import './index.css'

getSessionKey()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
