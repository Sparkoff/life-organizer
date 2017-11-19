import React from 'react'


const getContact = () => {
	return {
		subTitle: "Annuaire",
		content: (<p>carnet-d-adresses (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "carnet-d-adresses":
			subMenu = getContact()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "address book outline",
		title: "Carnet d'adresses"
	}
}
