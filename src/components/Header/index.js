import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Menu, Container } from 'semantic-ui-react'


class App extends Component {

	constructor(props) {
		super(props)
		this.state = { activeItem: '' }
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		const styles = {
			"backgroundColor": "white"
		}

		return (
			<div>
				<Menu fixed='top' pointing secondary stackable color={'blue'} style={styles}>
					<Container>
						<Menu.Item as={Link} to='/' header name='home' onClick={this.handleItemClick}>
							My Life Origanizer
						</Menu.Item>

						<Menu.Item as={Link} to='/homePage' name='homePage' active={activeItem === 'homePage'} onClick={this.handleItemClick}>
							Home
						</Menu.Item>
					</Container>
				</Menu>
			</div>
		)
	}
}

export default App
