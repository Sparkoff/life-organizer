import React from 'react'


const getTodo = () => {
	return {
		subTitle: "To do list",
		content: (<p>liste (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "liste":
			subMenu = getTodo()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "checked calendar",
		title: "À planifier / Général"
	}
}
