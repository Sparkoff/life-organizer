import React from 'react'


const getDone = () => {
	return {
		subTitle: "Fait",
		content: (<p>fait (à implémenter)</p>)
	}
}

const getTodo = () => {
	return {
		subTitle: "À faire",
		content: (<p>a-faire (à implémenter)</p>)
	}
}

const getCar = () => {
	return {
		subTitle: "Voiture",
		content: (<p>voiture (à implémenter)</p>)
	}
}

const getNote = () => {
	return {
		subTitle: "Notes",
		content: (<p>notes (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "fait":
			subMenu = getDone()
			break
		case "a-faire":
			subMenu = getTodo()
			break
		case "voiture":
			subMenu = getCar()
			break
		case "notes":
			subMenu = getNote()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "wrench",
		title: "Travaux et Entretien"
	}
}
