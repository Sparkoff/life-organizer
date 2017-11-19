import React from 'react'


const getCart = () => {
	return {
		subTitle: "À acheter",
		content: (<p>acheter (à implémenter)</p>)
	}
}

const getHoliday = () => {
	return {
		subTitle: "Références des peintures",
		content: (<p>vacances (à implémenter)</p>)
	}
}

const getBirthday = () => {
	return {
		subTitle: "Literie",
		content: (<p>anniversaires (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "acheter":
			subMenu = getCart()
			break
		case "vacances":
			subMenu = getHoliday()
			break
		case "anniversaires":
			subMenu = getBirthday()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "pin",
		title: "Pratique"
	}
}
