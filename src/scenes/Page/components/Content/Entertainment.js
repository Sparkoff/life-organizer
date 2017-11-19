import React from 'react'


const getRestaurant = () => {
	return {
		subTitle: "Restos",
		content: (<p>restos (à implémenter)</p>)
	}
}

const getRecipe = () => {
	return {
		subTitle: "Recettes",
		content: (<p>recettes (à implémenter)</p>)
	}
}

const getCouture = () => {
	return {
		subTitle: "Couture",
		content: (<p>couture (à implémenter)</p>)
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
		case "restos":
			subMenu = getRestaurant()
			break
		case "recettes":
			subMenu = getRecipe()
			break
		case "couture":
			subMenu = getCouture()
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
		icon: "cocktail",
		title: "Loisirs"
	}
}
