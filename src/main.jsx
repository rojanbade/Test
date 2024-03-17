import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import Comment from './component/comment/index.jsx'
import DataPost from './component/post.jsx'

import { increment, decrement } from './redux/slice/counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Fragment>
        {/* <DataPost /> */}
        <App />
        {/* <Comment /> */}
      </Fragment>
    </Provider>

  </React.StrictMode>,
)

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
store.dispatch(decrement())