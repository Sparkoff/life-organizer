import React from 'react'


const getDimension = () => {
	return {
		subTitle: "Dimensions des pièces",
		content: (<p>dims (à implémenter)</p>)
	}
}

const getPainting = () => {
	return {
		subTitle: "Références des peintures",
		content: (<p>ref-peintures (à implémenter)</p>)
	}
}

const getBed = () => {
	return {
		subTitle: "Literie",
		content: (<p>literie (à implémenter)</p>)
	}
}

const getLight = () => {
	return {
		subTitle: "Références des ampoules",
		content: (<p>ampoules (à implémenter)</p>)
	}
}

const getConsumption = () => {
	return {
		subTitle: "Relevé des consommations",
		content: (<p>consos (à implémenter)</p>)
	}
}

const getCat = () => {
	return {
		subTitle: "Chat",
		content: (<p>chat (à implémenter)</p>)
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
		case "dims":
			subMenu = getDimension()
			break
		case "ref-peintures":
			subMenu = getPainting()
			break
		case "literie":
			subMenu = getBed()
			break
		case "ampoules":
			subMenu = getLight()
			break
		case "consos":
			subMenu = getConsumption()
			break
		case "chat":
			subMenu = getCat()
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
		icon: "home",
		title: "Maison"
	}
}
