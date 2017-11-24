import React, { Component } from 'react'

import PageLayout from 'components/PageLayout'

import appInfos from 'config/app'


class Home extends Component {
	render() {
		return (
			<PageLayout icon={appInfos.icon} title={appInfos.title} subTitle={appInfos.subTitle}>
				<p>À implémenter</p>
			</PageLayout>
		)
	}
}


export default Home
