import React from 'react'


const getBed = () => {
	return {
		subTitle: "Literie",
		content: (<p>literie (à implémenter)</p>)
	}
}

const getCellar = () => {
	return {
		subTitle: "Cellier",
		content: (<p>cellier (à implémenter)</p>)
	}
}

const getFreezer = () => {
	return {
		subTitle: "Congélateur",
		content: (<p>congelateur (à implémenter)</p>)
	}
}

const getDrug = () => {
	return {
		subTitle: "Pharmacie",
		content: (<p>pharmacie (à implémenter)</p>)
	}
}

const getLiving = () => {
	return {
		subTitle: "Salon",
		content: (<p>salon (à implémenter)</p>)
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
		case "literie":
			subMenu = getBed()
			break
		case "cellier":
			subMenu = getCellar()
			break
		case "congelateur":
			subMenu = getFreezer()
			break
		case "pharmacie":
			subMenu = getDrug()
			break
		case "salon":
			subMenu = getLiving()
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
		icon: "file text outline",
		title: "Inventaire"
	}
}
