import React, { Component } from 'react'

import PageLayout from '../../components/PageLayout'


class NotFound extends Component {
	render() {
		return (
			<PageLayout icon="close" title="Erreur" subTitle="404 Not Found">
				<p>La route demandée n'existe pas</p>
			</PageLayout>
		)
	}
}


export default NotFound
