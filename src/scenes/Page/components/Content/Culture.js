import React from 'react'


const getBook = () => {
	return {
		subTitle: "Livres",
		content: (<p>livres (à implémenter)</p>)
	}
}

const getMovie = () => {
	return {
		subTitle: "Films",
		content: (<p>films (à implémenter)</p>)
	}
}

const getTVShow = () => {
	return {
		subTitle: "Séries",
		content: (<p>series (à implémenter)</p>)
	}
}

const getConcert = () => {
	return {
		subTitle: "Concerts - Spectacles",
		content: (<p>concerts-spectacles (à implémenter)</p>)
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
		case "livres":
			subMenu = getBook()
			break
		case "films":
			subMenu = getMovie()
			break
		case "series":
			subMenu = getTVShow()
			break
		case "concerts-spectacles":
			subMenu = getConcert()
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
		icon: "book",
		title: "Culture"
	}
}
