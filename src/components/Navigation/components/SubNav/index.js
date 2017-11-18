import React, { Component } from 'react'

import NavItem from './components/NavItem'

import { Menu } from 'semantic-ui-react'


class SubNav extends Component {
	render() {
		let subNavs = this.props.subMenu
		for (var i = 0; i < subNavs.length; i++) {
			subNavs[i].path = '/' + this.props.slug + '/' + subNavs[i].slug
			subNavs[i].name = this.props.slug + '.' + subNavs[i].slug
		}

		return (
			<Menu.Item>
				<Menu.Header>
					{this.props.title}
				</Menu.Header>

				<Menu.Menu>
					{subNavs.map((item,i) =>
						<NavItem {...item} key={item.name}/>
					)}
				</Menu.Menu>
			</Menu.Item>
		)
	}
}

export default SubNav
