import React, { Component } from 'react'

import PageLayout from 'components/PageLayout'
import getPage from './components/Content'


class Page extends Component {
	render() {
		const { menu, subMenu } = this.props.match.params

		let data = getPage(menu, subMenu)

		return (
			<PageLayout icon={data.icon} title={data.title} subTitle={data.subTitle}>
				{data.content}
			</PageLayout>
		)
	}
}


export default Page
