import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './services/registerServiceWorker'

import App from './scenes/App'

import './style.css'
import 'semantic-ui-css/semantic.min.css'


render((
    <Provider store={store}>
	    <BrowserRouter>
	    	<App/>
	    </BrowserRouter>
    </Provider>
), document.getElementById('root'))


registerServiceWorker()
