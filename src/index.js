import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './services/registerServiceWorker'

import App from './scenes/App'

import './style.css'
import 'semantic-ui-css/semantic.min.css'


render((
    <BrowserRouter>
    	<App/>
    </BrowserRouter>
), document.getElementById('root'))


registerServiceWorker()
