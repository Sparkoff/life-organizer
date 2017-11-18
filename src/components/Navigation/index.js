import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { navigateTo } from './actions'

import SubNav from './components/SubNav'

import { Menu } from 'semantic-ui-react'

import navConfig from '../../config/navigation'


class Navigation extends Component {
	render() {
		const styles = {
			...this.props.style,
			"backgroundColor": "white"
		}

		return (
			<div>
				<Menu fixed='left' vertical style={styles}>
					<Menu.Item header>
						{navConfig.appName}
					</Menu.Item>

					<Menu.Item
						as={Link}
						to='/'
						name='home'
						active={this.props.activeItem === 'home'}
						onClick={() => this.props.onNavigateTo('home')}
					>
						Accueil
					</Menu.Item>

					{navConfig.menus.map((subNav,i) =>
						<SubNav {...subNav} key={subNav.slug}/>
					)}
				</Menu>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		activeItem: state.navigationStore.activeItem
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onNavigateTo: (menu) => {
			dispatch(navigateTo(menu))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
