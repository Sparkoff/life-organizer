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
				"paddingBottom": "1em",
				"overflowY": "scroll"
			},
			"content": {
				"marginLeft": "250px",
				"paddingLeft": "10px",
			    "minWidth": "550px",
			    "maxWidth": "1150px"
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
