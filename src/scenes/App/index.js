import React, { Component } from 'react'

import Navigation from '../../components/Navigation'
import Routes from '../../routes'

import { Container } from 'semantic-ui-react'


class App extends Component {
	render() {
		const styles = {
			"sideBar": {
				"position": "fixed",
				"top": "0px",
				"bottom": "0px",
				"left": "0px",
				"width": "250px",
				"padding-bottom": "1em",
				"overflow-y": "scroll"
			},
			"content": {
				"margin-left": "250px",
				"padding-left": "10px",
			    "min-width": "550px",
			    "max-width": "1150px"
			}
		}

		return (
			<div>
				<Container fluid>
					<Navigation style={styles.sideBar}/>

					<div style={styles.content}>
						<Container fluid>
							<Routes/>
						</Container>
					</div>

				</Container>
			</div>
		)
	}
}

export default App
