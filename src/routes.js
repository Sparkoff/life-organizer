import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './scenes/Home'
import Page from './scenes/Page'
import NotFound from './scenes/NotFound'


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/:menu/:subMenu" component={Page}/>
			<Route exact path="/*" component={NotFound}/>
		</Switch>
	)
}


export default Routes
