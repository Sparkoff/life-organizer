import React, { Component } from 'react'

import { Container, Header, Icon } from 'semantic-ui-react'


class PageLayout extends Component {
	render() {
		let icon = this.props.icon ? (<Icon name={this.props.icon} />) : (<span></span>)
		return (
			<Container fluid>
				<Header as='h1' dividing>
					{icon}

					<Header.Content>
						{this.props.title}

						<Header.Subheader>
							{this.props.subTitle}
						</Header.Subheader>
					</Header.Content>
				</Header>

				{this.props.children}
			</Container>
		)
	}
}


export default PageLayout
