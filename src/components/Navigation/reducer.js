import { currentSlug } from '../../services/location'


const defaultState = {
	activeItem: currentSlug()
}

const navigation = (state, action) => {
	let newState = Object.assign({}, defaultState, state)

	switch (action.type) {
		case "NAVIGATE_TO":
			newState.activeItem = action.activeItem
			break
		default:
	}

	return newState
}


export default navigation
