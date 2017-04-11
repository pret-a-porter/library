import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const store = configureStore()

function App () {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
