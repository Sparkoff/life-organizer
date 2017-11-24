import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { navigateTo } from '../../../../actions'

import { Menu } from 'semantic-ui-react'


class NavItem extends Component {
	render() {
		const { path, name, activeItem, title } = this.props
		let styles = {}

		if (activeItem === name) {
			styles.backgroundColor = "#A4E9FF"
		}

		return (
			<Menu.Item
				as={Link}
				to={path}
				name={name}
				active={activeItem === name}
				onClick={() => this.props.onNavigateTo(name)}
				style={{...styles}}
			>
				{title}
			</Menu.Item>
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


export default connect(mapStateToProps, mapDispatchToProps)(NavItem)
