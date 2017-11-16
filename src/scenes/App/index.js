import React, { Component } from 'react'

import Header from '../../components/Header'
import Routes from '../../routes'

import { Container } from 'semantic-ui-react'


class App extends Component {
	render() {
		return (
			<div>
				<Header/>

				<Container fluid style={{ paddingTop: '50px' }}>
					<Routes/>
				</Container>
			</div>
		)
	}
}

export default App
