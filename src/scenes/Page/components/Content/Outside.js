import React from 'react'


const getGarden = () => {
	return {
		subTitle: "Plantations",
		content: (<p>plantations (à implémenter)</p>)
	}
}

const getTodo = () => {
	return {
		subTitle: "À faire",
		content: (<p>a-faire (à implémenter)</p>)
	}
}

const getTool = () => {
	return {
		subTitle: "Équipement",
		content: (<p>equipement (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "plantations":
			subMenu = getGarden()
			break
		case "a-faire":
			subMenu = getTodo()
			break
		case "equipement":
			subMenu = getTool()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "tree",
		title: "Espace extérieur"
	}
}
