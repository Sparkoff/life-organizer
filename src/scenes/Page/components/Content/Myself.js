import React from 'react'


const getPromise = () => {
	return {
		subTitle: "Résolutions",
		content: (<p>resolutions (à implémenter)</p>)
	}
}

const getNotReproduce = () => {
	return {
		subTitle: "À ne plus faire",
		content: (<p>a-ne-plus-faire (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "restos":
			subMenu = getPromise()
			break
		case "recettes":
			subMenu = getNotReproduce()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "user",
		title: "Perso"
	}
}
