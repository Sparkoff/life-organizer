import React, { Component } from 'react'

import { Container, Header } from 'semantic-ui-react'


class Home extends Component {
	render() {
		return (
			<div>
				<Container>
					<Header as='h1' dividing>
						404 Not Found
					</Header>
				</Container>
			</div>
		)
	}
}

export default Home
