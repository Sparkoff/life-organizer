import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './scenes/Home'


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/homePage" component={Home}/>
		</Switch>
	)
}


export default Routes
